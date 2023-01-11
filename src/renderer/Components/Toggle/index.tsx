/* eslint-disable react/no-unused-prop-types */
import { useState } from 'react';
import { IconType } from 'react-icons';
import ToggleSwitch from './ToggleSwitch';
import './style.scss';

interface IProps {
	icon: IconType;
	title: string;
	label: (state: boolean) => string;
	onClick: (state: boolean) => void;
}

export default function Toggle(props: IProps) {
	const { title, label, onClick } = props;
	const [state, setState] = useState(false);

	const handleClick = () => {
		setState(!state);
		onClick(!state); // NOTE: Why isnt the state updating here?
	};

	return (
		<div className="toggle" onClick={handleClick} aria-hidden>
			<div className="header">
				<props.icon size={20} />
				<span>{title}</span>
			</div>
			<div className="switch">
				<span>{label(state)}</span>
				<ToggleSwitch state={state} />
			</div>
		</div>
	);
}
