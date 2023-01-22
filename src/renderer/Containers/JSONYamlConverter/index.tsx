import { useEffect, useState } from 'react';
import HeaderedSection from 'renderer/Components/HeaderedSection';
import TextArea from 'renderer/Components/TextArea';
import { useDebounce } from 'usehooks-ts';
import { useApi } from '../../../Contexts/ApiContext';
import JSONYamlSettings, { ISettings } from './JSONYamlSettings';
import './style.scss';

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

	useEffect(() => {
		switch (settings.conversion) {
			default:
			case 'JSONToYaml':
				setJSON(input);
				break;
			case 'YamlToJSON':
				setYaml(input);
				break;
		}
	}, [input, settings.conversion, settings.indent]);

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
				<HeaderedSection title="Input">
					<TextArea
						text={getInput()}
						height="500px"
						onChange={(text: string) => setInput(text)}
					/>
				</HeaderedSection>
				<HeaderedSection title="Output">
					<TextArea text={getOutput()} height="500px" disabled />
				</HeaderedSection>
			</div>
		</div>
	);
}
