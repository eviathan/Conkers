import { useState } from 'react';
import ConfigurationItem, { IProps as IConfigurationItemProps } from './index';
import './style.scss';

type IProps =
	| {
			test: string;
	  }
	| IConfigurationItemProps;

export default function SwitchConfigurationItem(props: IProps) {
	const [state, setState] = useState(false);
	const { icon, title, subTitle, label, noMargin, children, onClick } = props;

	return (
		<ConfigurationItem
			icon={icon}
			title={title}
			subTitle={subTitle}
			label={label}
			noMargin={noMargin}
			onClick={onclick}
		>
			<div className="switch">
				<span>{label ? label(state) : null}</span>
			</div>
		</ConfigurationItem>
	);
}
