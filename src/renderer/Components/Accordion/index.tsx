/* eslint-disable react/require-default-props */

interface IProps {
	children?: React.ReactNode;
}

export default function Accordion({ children }: IProps) {
	return (
		<div className="accordion">
			<h1>Accordion</h1>
			{children}
		</div>
	);
}
