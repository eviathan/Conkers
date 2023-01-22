import { useState } from 'react';
import ConfigurationItem, { IProps as IConfigurationItemProps } from './index';
import './style.scss';

type IProps = {
	label?: (state: boolean) => string;
} & IConfigurationItemProps;

export default function SwitchConfigurationItem(props: IProps) {
	const [state, setState] = useState(false);
	const { icon, title, subTitle, label, noMargin, onClick } = props;

	const handleClick = () => {
		const newState = !state;
		setState(newState);
		if (onClick) onClick();
	};

	return (
		<ConfigurationItem
			icon={icon}
			title={title}
			subTitle={subTitle}
			noMargin={noMargin}
			onClick={handleClick}
		>
			<div className="switch">
				<span>{label ? label(state) : null}</span>
			</div>
		</ConfigurationItem>
	);
}
