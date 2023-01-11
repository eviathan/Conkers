import { useState } from 'react';
import { IconType } from 'react-icons';
import './style.scss';

interface IProps {
	icon: IconType;
	title: string;
	subTitle?: string;
	label: (state: boolean) => string;
	children?: React.ReactNode;
	onClick?: (state: boolean) => void;
}

export default function ConfigurationItem(props: IProps) {
	const { icon, title, subTitle, label, children, onClick } = props;
	const [state, setState] = useState(false);

	const handleClick = () => {
		setState(!state);
		if (onClick) onClick(!state); // NOTE: Why isnt the state updating here?
	};

	return (
		<div className="toggle" onClick={handleClick} aria-hidden>
			<div className="header">
				<props.icon size={20} />
				<div className="title">
					<span>{title}</span>
					<span>{subTitle}</span>
				</div>
			</div>
			<div className="switch">
				<span>{label(state)}</span>
				{children}
			</div>
		</div>
	);
}
