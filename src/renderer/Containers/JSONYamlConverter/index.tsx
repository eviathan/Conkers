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

	api.jwtEncoderApi.encode('');
	api.jwtEncoderApi.decode('');

	const didSettingsUpdate = (settings: ISettings) => {
		console.log('Settings: ', settings);
	};

	return (
		<div className="json-yaml-converter">
			<HeaderedSection title="Configuration">
				<JSONYamlSettings
					onUpdate={(settings: ISettings) => didSettingsUpdate(settings)}
				/>
			</HeaderedSection>
			<div className="form">
				<HeaderedSection title="Input">
					<TextArea />
				</HeaderedSection>
				<HeaderedSection title="Output">
					<TextArea />
				</HeaderedSection>
			</div>
		</div>
	);
}
