import { ReactNode } from 'react';
import { IconType } from 'react-icons';
import './style.scss';

interface IHeaderSectionItem {
	label?: string;
	icon?: IconType;
	action: () => void;
}

interface IProps {
	title: string;
	items?: Array<IHeaderSectionItem>;
	children?: ReactNode;
}

export default function HeaderedSection({ title, items, children }: IProps) {
	return (
		<div className="headered-section">
			<div className="header">
				<h4>{title}</h4>
				<div className="items">
					{items?.map((item) => (
						<button key={item.label} type="button" onClick={item.action}>
							{item.icon ? <item.icon /> : null}
							{item.label}
						</button>
					))}
				</div>
			</div>
			{children}
		</div>
	);
}
