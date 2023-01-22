import './style.scss';

interface IProps {
	items: { [key: string]: string };
	onSelect: (value: string) => void;
}

const DropDown: React.FC<IProps> = ({ items, onSelect }: IProps) => {
	return (
		<select
			className="dropdown"
			onChange={(event) => onSelect(event.target.value)}
		>
			{Object.entries(items).map(([key, value]) => (
				<option value={key}>{value}</option>
			))}
		</select>
	);
};

export default DropDown;
