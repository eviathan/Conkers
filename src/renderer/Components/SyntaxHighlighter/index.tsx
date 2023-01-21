import SyntaxHighlighter from 'react-syntax-highlighter';
import './style.scss';

export default function Highlighter({ language, theme, children }) {
	return (
		<SyntaxHighlighter language="javascript">{children}</SyntaxHighlighter>
	);
}
