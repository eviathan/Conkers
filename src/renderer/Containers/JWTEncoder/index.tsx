import { useState } from 'react';
import HeaderedSection from 'renderer/Components/HeaderedSection';
import EncodingSettings from './EncodingSettings';
import './style.scss';
import TokenValidationSettings from './TokenValidationSettings';

export default function JWTEncoder() {
	const [encodingSettings, setEncodingSettings] = useState({
		isEncoding: false,
	});
	const [tokenValidationSettings, setTokenValidationSettings] = useState({});

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
