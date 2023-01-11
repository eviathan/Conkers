/* eslint-disable react/require-default-props */
import { Tool } from 'state';
import './style.scss';

interface IProps {
	tool: Tool;
	children?: React.ReactNode;
}

export default function ToolLayout({ tool, children }: IProps) {
	return (
		<div className="tool-layout">
			<h2>{tool.title}</h2>
			<div className="content">{children}</div>
		</div>
	);
}
