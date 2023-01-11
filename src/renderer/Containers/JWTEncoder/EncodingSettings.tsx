import { useState } from 'react';
import { TbArrowsLeftRight } from 'react-icons/tb';
import Toggle from 'renderer/Components/Toggle';
import './style.scss';

interface EncodingSettings {}

interface IProps {
	onUpdate: (settings: EncodingSettings) => void;
}

export default ({ onUpdate }: IProps) => {
	const [isEncoder, setIsEncoder] = useState(false);

	return (
		<>
			<Toggle
				icon={TbArrowsLeftRight}
				title="Encode / Decode"
				label={(state) => (state ? 'Encode' : 'Decode')}
				onClick={(state) => setIsEncoder(state)}
			/>

			{/* {isEncoder ? (
				<Accordion>
					<Drawer />
				</Accordion>
			) : null} */}
		</>
	);
};
