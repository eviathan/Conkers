import './style.scss';

interface IProps {
	height?: string;
}

const TextArea: React.FC<IProps> = ({ height }: IProps) => {
	const style = { height: height ?? '100%' };

	return (
		<div className="text-area" style={style}>
			<textarea />
		</div>
	);
};

export default TextArea;
