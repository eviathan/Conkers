import { useState } from 'react';
import { TbArrowsLeftRight } from 'react-icons/tb';
import Accordion from 'renderer/Components/Accordion';
import Drawer from 'renderer/Components/Accordion/Drawer';
import Toggle from 'renderer/Components/Toggle';
import './style.scss';

interface EncodingSettings {
	isEncoding: boolean;
}

interface IProps {
	onUpdate: (settings: EncodingSettings) => void;
}

export default ({ onUpdate }: IProps) => {
	const [settings, setSettings] = useState({
		isEncoding: false,
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
					<Drawer />
				</Accordion>
			) : null}
		</>
	);
};
