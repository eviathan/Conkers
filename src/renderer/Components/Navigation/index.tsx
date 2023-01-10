/* eslint-disable react/require-default-props */
import { Link } from 'react-router-dom';
import { Tool, ToolGroup, tools } from 'state';
import { ImHome3 } from 'react-icons/im';
import { HiChevronDown, HiChevronUp } from 'react-icons/hi';
import AllTools from 'renderer/Containers/AllTools';
import { groupBy } from 'Utilities/ArrayUtilities';
import './style.scss';
import { useState } from 'react';

interface INavigationLinkProps {
  tool: Tool;
}

export function NavigationLink({ tool }: INavigationLinkProps) {
  return (
    <Link className="navigation-link" to={tool.path}>
      <tool.icon size={20} title={tool.title} />
      <span>{tool.title}</span>
    </Link>
  );
}

interface INavigationGroupProps {
  type: string;
  children?: React.ReactNode;
}

export function NavigationGroup({ type, children }: INavigationGroupProps) {
  const [isCollapsed, setIsCollapsed] = useState(false);
  return (
    <div className="nav-group">
      <div
        className="header"
        onClick={() => setIsCollapsed(!isCollapsed)}
        aria-hidden
      >
        <h1>{type}</h1>
        {isCollapsed ? <HiChevronUp size={32} /> : <HiChevronDown size={32} />}
      </div>
      {isCollapsed ? <>{children}</> : null}
    </div>
  );
}

export default function Navigation() {
  const allTools: Tool = {
    path: 'all-tools',
    title: 'All Tools',
    icon: ImHome3,
    element: <AllTools />,
  };

  // Export the below programattically
  //groupBy(tools, (tool) => tool.type))
  const toolGroups: ToolGroup = {
    'Encoders/ Decoders': [
      { title: 'JWT', path: '', icon: ImHome3, element: <h1>Wooter</h1> },
    ] as Array<Tool>,
    Converters: [] as Array<Tool>,
  };

  return (
    <nav>
      <NavigationLink tool={allTools} />
      {Object.entries(toolGroups).map(([type, toolGroup]) => (
        <NavigationGroup type={type}>
          {toolGroup.map((tool) => (
            <NavigationLink tool={tool} key={tool.path} />
          ))}
        </NavigationGroup>
      ))}
    </nav>
  );
}
