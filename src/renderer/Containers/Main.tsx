import { Route, Routes } from 'react-router-dom';
import Navigation from 'renderer/Components/Navigation';
import SearchBar from 'renderer/Components/SearchBar';
import ToolLayout from 'renderer/Components/ToolLayout';
import ApiContextProvider from '../../Contexts/ApiContext';
import { tools } from '../../state';
import AllTools from './AllTools';

export default function Main() {
	return (
		<main>
			<div className="sidebar">
				<SearchBar />
				<Navigation />
			</div>
			<div className="content">
				<ApiContextProvider>
					<Routes>
						<Route path="/" element={<AllTools />} />
						{tools.map((tool) => (
							<Route
								key={tool.path}
								path={tool.path}
								element={<ToolLayout tool={tool}>{tool.element}</ToolLayout>}
							/>
						))}
					</Routes>
				</ApiContextProvider>
			</div>
		</main>
	);
}
