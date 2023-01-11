/* eslint-disable jsx-a11y/label-has-associated-control */

interface IProps {
	state: boolean;
}

export default function ToggleSwitch({ state }: IProps) {
	return (
		<div className="toggle-switch">
			<input type="checkbox" id="switch" checked={state} disabled />
			<label htmlFor="switch">Toggle</label>
		</div>
	);
}
