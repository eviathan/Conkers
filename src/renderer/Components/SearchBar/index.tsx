import { ImSearch } from 'react-icons/im';
import './style.scss';

export default function SearchBar() {
	return (
		<div className="search-bar">
			<div className="wrapper">
				<input type="text" placeholder="Type to search for tools..." />
				<ImSearch size={12} />
			</div>
		</div>
	);
}
