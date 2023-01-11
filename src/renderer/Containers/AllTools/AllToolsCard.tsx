import { Link } from 'react-router-dom';
import { Tool } from '../../../state';
import './style.scss';

interface IAllToolsCardProps {
	tool: Tool;
}

export default function AllToolsCard({ tool }: IAllToolsCardProps) {
	return (
		<Link className="card" to={tool.path}>
			<span className="type">{tool.type}</span>
			<tool.icon className="icon" size={42} color="white" />
			<h4>{tool.title}</h4>
			<p>{tool.description}</p>
		</Link>
	);
}
