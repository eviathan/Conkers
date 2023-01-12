import './style.scss';

interface IProps {
	children?: React.ReactNode;
}

export default function Button({ children }: IProps) {
	return <button type="button">{children}</button>;
}
