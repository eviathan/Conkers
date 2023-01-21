import { useState } from 'react';
import HeaderedSection from 'renderer/Components/HeaderedSection';
import { useApi } from '../../../Contexts/ApiContext';
import './style.scss';

export default function JWTEncoder() {
	const api = useApi();

	api.jwtEncoderApi.encode('');
	api.jwtEncoderApi.decode('');

	return (
		<div className="json-yaml-comnverter">
			<HeaderedSection title="Configuration">
				{/* <EncodingSettings
					onUpdate={(settings) => setEncodingSettings(settings)}
				/> */}
				{/* {encodingSettings.isEncoding ? null : (
					<TokenValidationSettings
						onUpdate={(settings) => setTokenValidationSettings(settings)}
					/>
				)} */}
			</HeaderedSection>
			<div>
				<HeaderedSection title="Input">
					<h5>TODO: Text area goes here</h5>
				</HeaderedSection>
				<HeaderedSection title="Output">
					<h5>TODO: Text area goes here</h5>
				</HeaderedSection>
			</div>
		</div>
	);
}
