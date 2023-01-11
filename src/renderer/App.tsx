import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import './App.scss';
import Layout from './Containers/Layout';

export default function App() {
	return (
		<Router>
			<Routes>
				<Route index element={<Layout />} />
			</Routes>
		</Router>
	);
}
