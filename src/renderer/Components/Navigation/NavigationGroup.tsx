/* eslint-disable react/require-default-props */
import { HiChevronDown, HiChevronUp } from 'react-icons/hi';
import './style.scss';
import { useState } from 'react';

interface INavigationGroupProps {
  type: string;
  children?: React.ReactNode;
}

export default function NavigationGroup({
  type,
  children,
}: INavigationGroupProps) {
  const [isCollapsed, setIsCollapsed] = useState(false);
  return (
    <div className="nav-group">
      <div
        className="header"
        onClick={() => setIsCollapsed(!isCollapsed)}
        aria-hidden
      >
        <h1>{type}</h1>
        {isCollapsed ? <HiChevronUp size={24} /> : <HiChevronDown size={24} />}
      </div>
      {isCollapsed ? <>{children}</> : null}
    </div>
  );
}
