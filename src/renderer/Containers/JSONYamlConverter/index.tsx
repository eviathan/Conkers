import { useEffect, useState } from 'react';
import { useDebounce } from 'usehooks-ts';
import { BiFileBlank } from 'react-icons/bi';
import { FaRegCopy } from 'react-icons/fa';
import { IoCloseSharp } from 'react-icons/io5';
import { MdContentPaste } from 'react-icons/md';
import TextArea from 'renderer/Components/TextArea';
import HeaderedSection from 'renderer/Components/HeaderedSection';
import { useApi } from '../../../Contexts/ApiContext';
import JSONYamlSettings, { ISettings } from './JSONYamlSettings';
import './style.scss';
import Editor from '@monaco-editor/react';

// TODO: Add clipboard features and file loading
// see: https://www.electronjs.org/docs/latest/tutorial/ipc
// see: https://stackoverflow.com/questions/31130150/in-electron-framework-can-i-access-clipboard
// const { clipboard } = require('electron');
//setInput(clipboard.readText('clipboard')),
//clipboard.writeText(getOutput(), 'clipboard'),

export default function JWTEncoder() {
	const api = useApi();
	const [json, setJSON] = useState('');
	const [yaml, setYaml] = useState('');
	const [input, setInput] = useState('');
	const [settings, setSettings] = useState({} as ISettings);

	const debouncedInput = useDebounce<string>(input, 300);

	const didSettingsUpdate = (value: ISettings) => {
		setSettings(value);
	};

	const getInput = (): string => {
		switch (settings.conversion) {
			default:
			case 'JSONToYaml':
				return json;
			case 'YamlToJSON':
				return yaml;
		}
	};

	const getOutput = (): string => {
		switch (settings.conversion) {
			default:
			case 'JSONToYaml':
				return yaml;
			case 'YamlToJSON':
				return json;
		}
	};

	const clearInput = () => {
		setInput('');
		setJSON('');
		setYaml('');
	};

	const getInputLanguage = (): string => {
		switch (settings.conversion) {
			default:
			case 'JSONToYaml':
				return 'json';
			case 'YamlToJSON':
				return 'yaml';
		}
	};

	const getOutputLanguage = (): string => {
		switch (settings.conversion) {
			default:
			case 'JSONToYaml':
				return 'yaml';
			case 'YamlToJSON':
				return 'json';
		}
	};

	// useEffect(() => {
	// 	switch (settings.conversion) {
	// 		default:
	// 		case 'JSONToYaml':
	// 			setJSON(input);
	// 			break;
	// 		case 'YamlToJSON':
	// 			setYaml(input);
	// 			break;
	// 	}
	// }, [input, settings.conversion, settings.indent]);

	useEffect(() => {
		const output = api.jsonYamlConverterApi.convert(
			debouncedInput,
			settings.conversion,
			settings.indent
		);

		switch (settings.conversion) {
			default:
			case 'JSONToYaml':
				setYaml(output);
				break;
			case 'YamlToJSON':
				setJSON(output);
				break;
		}
	}, [
		api.jsonYamlConverterApi,
		debouncedInput,
		settings.conversion,
		settings.indent,
	]);

	return (
		<div className="json-yaml-converter">
			<HeaderedSection title="Configuration">
				<JSONYamlSettings
					onUpdate={(value: ISettings) => didSettingsUpdate(value)}
				/>
			</HeaderedSection>
			<div className="form">
				<HeaderedSection
					title="Input"
					items={[
						{
							label: 'Paste',
							icon: MdContentPaste,
							action: () => console.log('wooter'),
						},
						{
							icon: BiFileBlank,
							action: () => console.log('wooter'),
						},

						{
							icon: IoCloseSharp,
							action: () => clearInput(),
						},
					]}
				>
					<Editor
						height="300px"
						language={getInputLanguage()}
						theme="vs-dark"
						options={{
							wordWrap: 'on',
							wordWrapColumn: 80,
						}}
						onChange={(e: any) => setInput(e)}
					/>
					{/* <TextArea
						height="500px"
						onChange={(text: string) => setInput(text)}
					/> */}
				</HeaderedSection>
				<HeaderedSection
					title="Output"
					items={[
						{
							label: 'Copy',
							icon: FaRegCopy,
							action: () => console.log('wooter'),
						},
					]}
				>
					<Editor
						height="300px"
						language={getOutputLanguage()}
						theme="vs-dark"
						options={{
							wordWrap: 'on',
							wordWrapColumn: 80,
							readOnly: true,
						}}
						value={getOutput()}
					/>
					{/* <TextArea text={getOutput()} height="500px" disabled /> */}
				</HeaderedSection>
			</div>
		</div>
	);
}
