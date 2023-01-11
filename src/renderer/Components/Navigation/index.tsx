import { Tool, tools } from 'state';
import { groupBy } from 'Utilities/ArrayUtilities';
import { ImHome3 } from 'react-icons/im';
import NavigationLink from './NavigationLink';
import NavigationGroup from './NavigationGroup';
import './style.scss';

export default function Navigation() {
	const toolGroups = groupBy(tools, (tool) => tool.type ?? '');

	const allTools: Tool = {
		path: '/',
		title: 'All Tools',
		icon: ImHome3,
	};

	return (
		<nav>
			<NavigationLink tool={allTools} />
			<div className="navigation">
				<div className="items">
					{Object.entries(toolGroups).map(([type, toolGroup]) => (
						<NavigationGroup type={type} key={type}>
							{toolGroup.map((tool) => (
								<NavigationLink tool={tool} key={tool.path} />
							))}
						</NavigationGroup>
					))}
				</div>
			</div>
		</nav>
	);
}
