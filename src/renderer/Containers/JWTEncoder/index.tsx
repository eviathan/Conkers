import { useState } from 'react';
import HeaderedSection from 'renderer/Components/HeaderedSection';
import TextArea from 'renderer/Components/TextArea';
import EncodingSettings from './EncodingSettings';
import TokenValidationSettings from './TokenValidationSettings';
import { useApi } from '../../../Contexts/ApiContext';
import './style.scss';

export default function JWTEncoder() {
	const [encodingSettings, setEncodingSettings] = useState({
		isEncoding: false,
	});
	const [tokenValidationSettings, setTokenValidationSettings] = useState({});
	const api = useApi();

	api.jwtEncoderApi.encode('');
	api.jwtEncoderApi.decode('');

	return (
		<div className="jwt-encoder">
			<HeaderedSection title="Configuration">
				<EncodingSettings
					onUpdate={(settings) => setEncodingSettings(settings)}
				/>
				{encodingSettings.isEncoding ? null : (
					<TokenValidationSettings
						onUpdate={(settings) => setTokenValidationSettings(settings)}
					/>
				)}
			</HeaderedSection>
			<HeaderedSection title="Token">
				<h5>TODO: Token validator config</h5>
				<TextArea />
			</HeaderedSection>
			<div>
				<HeaderedSection title="Header">
					<h5>TODO: Text area goes here</h5>
				</HeaderedSection>
				<HeaderedSection title="Payload">
					<h5>TODO: Text area goes here</h5>
				</HeaderedSection>
			</div>
		</div>
	);
}
