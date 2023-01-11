import { Route, Routes } from 'react-router-dom';
import Main from './Main';
import './Layout.scss';
import Settings from './Settings';

export default function Layout() {
	return (
		<div className="layout">
			<header>Conkers</header>
			<Routes>
				<Route path="/*" element={<Main />} />
				<Route path="/settings" element={<Settings />} />
			</Routes>
			<footer>Footer</footer>
		</div>
	);
}
