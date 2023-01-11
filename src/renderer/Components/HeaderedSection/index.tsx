/* eslint-disable react/require-default-props */
import './style.scss';

interface IProps {
	title: string;
	children?: React.ReactNode;
}

export default function HeaderedSection({ title, children }: IProps) {
	return (
		<div className="headered-section">
			<h4>{title}</h4>
			{children}
		</div>
	);
}
