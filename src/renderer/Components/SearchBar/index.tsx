import Fuse from 'fuse.js';
import { tools } from 'state';

export default function SearchBar() {
	return (
		<div className="search-bar">
			<div className="wrapper">
				<input type="text" placeholder="Type to search for tools..." />
			</div>
		</div>
	);
}
