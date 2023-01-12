/* eslint-disable react/require-default-props */
import { useState } from 'react';
import { GoSettings } from 'react-icons/go';
import { HiChevronDown, HiChevronUp } from 'react-icons/hi';
import Button from '../Button';
import ConfigurationItem from '../ConfigurationItem';

import './style.scss';

interface IProps {
	children?: React.ReactNode;
}

export default function Accordion({ children }: IProps) {
	const [isExpanded, setIsExpanded] = useState(false);

	return (
		<div className="accordion">
			<ConfigurationItem
				icon={GoSettings}
				title="Settings"
				subTitle="Select token parameters"
				onClick={(state) => setIsExpanded(state)}
				noMargin
			>
				<Button>
					{isExpanded ? (
						<HiChevronDown size={16} color="white" />
					) : (
						<HiChevronUp size={16} color="white" />
					)}
				</Button>
			</ConfigurationItem>
			{isExpanded ? <div className="drawer">{children}</div> : null}
		</div>
	);
}
