import { useState } from 'react';
import HeaderedSection from 'renderer/Components/HeaderedSection';
import TextArea from 'renderer/Components/TextArea';
import { useApi } from '../../../Contexts/ApiContext';
import JSONYamlSettings, { ISettings } from './JSONYamlSettings';
import './style.scss';

export default function JWTEncoder() {
	const api = useApi();
	const [json, setJSON] = useState('');
	const [yaml, setYaml] = useState('');
	const [settings, setSettings] = useState({} as ISettings);

	const didSettingsUpdate = (value: ISettings) => {
		setSettings(value);
	};

	const didInputUpdate = (text: string) => {
		const output = api.jsonYamlConverterApi.convert(
			text,
			settings.conversion,
			settings.indent
		);

		switch (settings.conversion) {
			default:
			case 'JSONToYaml':
				setJSON(text);
				setYaml(output);
				break;
			case 'YamlToJSON':
				setYaml(text);
				setJSON(output);
				break;
		}
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
						onChange={(text: string) => didInputUpdate(text)}
					/>
				</HeaderedSection>
				<HeaderedSection title="Output">
					<TextArea text={getOutput()} disabled />
				</HeaderedSection>
			</div>
		</div>
	);
}
