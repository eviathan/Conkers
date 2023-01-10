import { Link } from 'react-router-dom';
import { Tool, tools } from 'state';
import './style.scss';

interface INavigationLinkProps {
  tool: Tool;
}

export function NavigationLink({ tool }: INavigationLinkProps) {
  return (
    <Link className="navigation-link" to={tool.path}>
      <i />
      <span>{tool.title}</span>
    </Link>
  );
}

export default function Navigation() {
  return (
    <nav>
      {tools.map((tool) => (
        <NavigationLink tool={tool} key={tool.path} />
      ))}
    </nav>
  );
}
