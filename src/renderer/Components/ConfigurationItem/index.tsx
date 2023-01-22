import { IconType } from 'react-icons';
import './style.scss';

export interface IProps {
	icon: IconType;
	title: string;
	subTitle?: string;
	noMargin?: boolean;
	children?: React.ReactNode;
	onClick?: () => void;
}

export default function ConfigurationItem(props: IProps) {
	const { icon, title, subTitle, noMargin, onClick, children } = props;

	return (
		<div
			className={`configuration-item ${noMargin ? 'no-margin' : ''}`}
			onClick={() => (onClick ? onClick() : null)}
			aria-hidden
		>
			<div className="header">
				<props.icon size={20} />
				<div className="title">
					<span>{title}</span>
					<span>{subTitle}</span>
				</div>
			</div>
			{children}
		</div>
	);
}
