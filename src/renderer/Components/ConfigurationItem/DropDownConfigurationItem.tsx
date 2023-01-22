import DropDown from '../DropDown';
import ConfigurationItem, { IProps as IConfigurationItemProps } from './index';
import './style.scss';

type IProps = {
	onSelect: (value: string) => void;
	items: { [key: string]: string };
} & IConfigurationItemProps;

export default function DropdownConfigurationItem(props: IProps) {
	const { icon, title, subTitle, items, onSelect } = props;

	return (
		<ConfigurationItem icon={icon} title={title} subTitle={subTitle}>
			<DropDown items={items} onSelect={(value) => onSelect(value)} />
		</ConfigurationItem>
	);
}
