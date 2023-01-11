import './style.scss';

interface IProps {
	title: string;
	children?: any;
}

export default function HeaderedSection({ title, children }: IProps) {
	return (
		<div className="headered-section">
			<h4>{title}</h4>
			{children}
		</div>
	);
}
