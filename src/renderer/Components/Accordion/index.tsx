/* eslint-disable react/require-default-props */

import { GoSettings } from 'react-icons/go';
import ConfigurationItem from '../ConfigurationItem';

interface IProps {
	children?: React.ReactNode;
}

export default function Accordion({ children }: IProps) {
	return (
		<div className="accordion">
			<ConfigurationItem
				icon={GoSettings}
				title="Settings"
				subTitle="Select token parameters"
				// onClick={(state) => {
				// 	didUpdate({ ...settings, isEncoding: state });
				// }}
			>
				<h1>hmm</h1>
			</ConfigurationItem>
			{children}
		</div>
	);
}
