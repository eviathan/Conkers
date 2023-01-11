import { useState } from 'react';
import { IoBulbSharp, IoFingerPrint } from 'react-icons/io5';
import { TbArrowsLeftRight } from 'react-icons/tb';
import Accordion from 'renderer/Components/Accordion';
import ConfigurationItem from 'renderer/Components/ConfigurationItem';
import Toggle from 'renderer/Components/Toggle';
import './style.scss';

interface EncodingSettings {
	isEncoding: boolean;
	tokenHasDefaultTime: boolean;
}

interface IProps {
	onUpdate: (settings: EncodingSettings) => void;
}

export default ({ onUpdate }: IProps) => {
	const [settings, setSettings] = useState({
		isEncoding: false,
		tokenHasDefaultTime: false,
	} as EncodingSettings);

	const didUpdate = (s: EncodingSettings) => {
		setSettings(s);
		onUpdate(s);
	};

	return (
		<>
			<Toggle
				icon={TbArrowsLeftRight}
				title="Encode / Decode"
				label={(state) => (state ? 'Encode' : 'Decode')}
				onClick={(state) => {
					didUpdate({ ...settings, isEncoding: state });
				}}
			/>

			{settings.isEncoding ? (
				<Accordion>
					<ConfigurationItem
						icon={IoFingerPrint}
						title="Token hashing algorithm"
					/>
					<ConfigurationItem
						icon={IoBulbSharp}
						title="Token has issuer"
						label={(state) => (state ? 'On' : 'Off')}
						onClick={(state) => {
							didUpdate({ ...settings, isEncoding: state });
						}}
					/>
					<ConfigurationItem
						icon={IoBulbSharp}
						title="Token has audience"
						label={(state) => (state ? 'On' : 'Off')}
						onClick={(state) => {
							didUpdate({ ...settings, isEncoding: state });
						}}
					/>
					<ConfigurationItem
						icon={IoBulbSharp}
						title="Token has expirations"
						label={(state) => (state ? 'On' : 'Off')}
						onClick={(state) => {
							didUpdate({ ...settings, isEncoding: state });
						}}
					/>
					<Toggle
						icon={TbArrowsLeftRight}
						title="Token has default time"
						label={(state) => (state ? 'On' : 'Off')}
						onClick={(state) => {
							didUpdate({ ...settings, tokenHasDefaultTime: state });
						}}
					/>
				</Accordion>
			) : null}
		</>
	);
};
