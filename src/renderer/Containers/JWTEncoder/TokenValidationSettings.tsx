import { useState } from 'react';
import { BsPatchCheckFill } from 'react-icons/bs';
import Toggle from 'renderer/Components/Toggle';
import './style.scss';

interface TokenValidationSettings {}

interface IProps {
	onUpdate: (settings: TokenValidationSettings) => void;
}

export default ({ onUpdate }: IProps) => {
	const [shouldValidate, setShouldValidate] = useState(false);

	return (
		<>
			<Toggle
				icon={BsPatchCheckFill}
				title="Validate Token"
				label={(state) => (state ? 'Yes' : 'No')}
				onClick={(state) => setShouldValidate(state)}
			/>
		</>
	);
};
