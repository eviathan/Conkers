/* eslint-disable react/require-default-props */
import { Tool, tools } from 'state';
import { ImHome3 } from 'react-icons/im';
import AllTools from 'renderer/Containers/AllTools';
import { groupBy } from 'Utilities/ArrayUtilities';
import './style.scss';
import NavigationLink from './NavigationLink';
import NavigationGroup from './NavigationGroup';

export default function Navigation() {
	const allTools: Tool = {
		path: 'all-tools',
		title: 'All Tools',
		icon: ImHome3,
		element: <AllTools />,
	};

	const toolGroups = groupBy(tools, (tool) => tool.type ?? '');

	return (
		<nav>
			<NavigationLink tool={allTools} />
			{Object.entries(toolGroups).map(([type, toolGroup]) => (
				<NavigationGroup type={type} key={type}>
					{toolGroup.map((tool) => (
						<NavigationLink tool={tool} key={tool.path} />
					))}
				</NavigationGroup>
			))}
		</nav>
	);
}
