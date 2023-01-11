/* eslint-disable react/require-default-props */
import { Link } from 'react-router-dom';
import { Tool } from 'state';
import './style.scss';

interface INavigationLinkProps {
	tool: Tool;
}

export default function NavigationLink({ tool }: INavigationLinkProps) {
	return (
		<Link className="navigation-link" to={tool.path}>
			<tool.icon size={18} title={tool.title} />
			<span>{tool.title}</span>
		</Link>
	);
}
