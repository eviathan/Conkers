import { tools } from '../../../state';
import AllToolsCard from './AllToolsCard';
import './style.scss';

export default function AllTools() {
	const toolSansAllPage = tools.filter((tool) => tool.path !== '/');

	return (
		<div className="all-tools">
			<h2>All Tools</h2>
			<div className="tools">
				{toolSansAllPage.map((tool) => (
					<AllToolsCard tool={tool} key={tool.path} />
				))}
			</div>
		</div>
	);
}
