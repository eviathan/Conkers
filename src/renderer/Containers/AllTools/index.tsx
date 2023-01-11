import { Link } from 'react-router-dom';
import { Tool, tools } from '../../../state';
import './style.scss';

interface IAllToolsCardProps {
	tool: Tool;
}

function AllToolsCard({ tool }: IAllToolsCardProps) {
	return (
		<Link className="card" to={tool.path}>
			<span className="type">{tool.type}</span>
			<tool.icon className="icon" size={42} />
			<h4>{tool.title}</h4>
			<p>{tool.description}</p>
		</Link>
	);
}

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
