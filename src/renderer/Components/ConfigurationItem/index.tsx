import { useState } from 'react';
import { IconType } from 'react-icons';
import './style.scss';

interface IProps {
	icon: IconType;
	title: string;
	subTitle?: string;
	label?: (state: boolean) => string;
	noMargin?: boolean;
	children?: React.ReactNode;
	onClick?: (state: boolean) => void;
}

export default function ConfigurationItem(props: IProps) {
	const { icon, title, subTitle, label, noMargin, children, onClick } = props;
	const [state, setState] = useState(false);

	const handleClick = () => {
		const newState = !state;
		setState(newState);
		if (onClick) onClick(newState);
	};

	return (
		<div
			className={`configuration-item ${noMargin ? 'no-margin' : ''}`}
			onClick={handleClick}
			aria-hidden
		>
			<div className="header">
				<props.icon size={20} />
				<div className="title">
					<span>{title}</span>
					<span>{subTitle}</span>
				</div>
			</div>
			<div className="switch">
				<span>{label ? label(state) : null}</span>
				{children}
			</div>
		</div>
	);
}
