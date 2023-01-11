/* eslint-disable react/require-default-props */
import { HiChevronDown, HiChevronUp } from 'react-icons/hi';
import './style.scss';
import { Children, useState } from 'react';

interface INavigationGroupProps {
	type: string;
	children?: React.ReactNode;
}

export default function NavigationGroup({
	type,
	children,
}: INavigationGroupProps) {
	const [isCollapsed, setIsCollapsed] = useState(false);
	const hasMultipleChildren = Children.count(children) > 1;
	const navigationClasses = `nav-group ${
		hasMultipleChildren ? 'with-children' : ''
	}`;
	return (
		<div className={navigationClasses}>
			{hasMultipleChildren ? (
				<div
					className="header"
					onClick={() => setIsCollapsed(!isCollapsed)}
					aria-hidden
				>
					<h1>{type}</h1>
					{isCollapsed ? (
						<HiChevronDown size={24} />
					) : (
						<HiChevronUp size={24} />
					)}
				</div>
			) : null}
			{isCollapsed ? null : <>{children}</>}
		</div>
	);
}
