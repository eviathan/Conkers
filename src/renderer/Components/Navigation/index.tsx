/* eslint-disable react/require-default-props */
import { tools } from 'state';
import { groupBy } from 'Utilities/ArrayUtilities';
import NavigationLink from './NavigationLink';
import NavigationGroup from './NavigationGroup';
import './style.scss';

export default function Navigation() {
	const toolGroups = groupBy(tools, (tool) => tool.type ?? '');

	return (
		<nav>
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
