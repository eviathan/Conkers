import './style.scss';

interface IProps {
	text?: string;
	disabled?: boolean;
	height?: string;
	onChange?: (text: string) => void;
}

const TextArea: React.FC<IProps> = ({
	text,
	disabled,
	height,
	onChange,
}: IProps) => {
	const style = { height: height ?? '100%' };

	return (
		<div className="text-area" style={style}>
			<textarea
				value={text}
				disabled={disabled}
				onChange={(event) => (onChange ? onChange(event.target.value) : null)}
			/>
		</div>
	);
};

export default TextArea;
