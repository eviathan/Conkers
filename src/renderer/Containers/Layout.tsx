import { Route, Routes } from 'react-router-dom';
import Navigation from 'renderer/Components/Navigation';
import SearchBar from 'renderer/Components/SearchBar';
import { tools } from '../../state';
import './Layout.scss';

function Main() {
  return (
    <main>
      <div className="sidebar">
        <SearchBar />
        <Navigation />
      </div>
      <div className="content">
        <Routes>
          {tools.map((tool) => (
            <Route key={tool.path} path={tool.path} element={tool.element} />
          ))}
        </Routes>
      </div>
    </main>
  );
}

export default function Layout() {
  return (
    <div className="layout">
      <header>Conkers</header>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/settings" element={<h1>Settings: Not implemented</h1>} />
      </Routes>
      {/* <footer>Footer</footer> */}
    </div>
  );
}
