import PropTypes from "prop-types";

export default function Input({
	id,
	name,
	type,
	onChange,
	checked,
	disabled,
	classNameLabel,
	classNameInput,
	selectedAnyRadio,
}) {
	return (
		<label
			htmlFor={id}
			className={`select-none ${classNameLabel} ${
				selectedAnyRadio && name === "check" ? "text-gray-500" : ""
			}`}
		>
			<input
				id={id}
				name={name}
				type={type}
				onChange={onChange}
				checked={checked}
				disabled={disabled}
				className={classNameInput}
			/>
			{id}
		</label>
	);
}

Input.propTypes = {
	id: PropTypes.string.isRequired,
	name: PropTypes.string,
	type: PropTypes.string.isRequired,
	onChange: PropTypes.func,
	checked: PropTypes.bool,
	disabled: PropTypes.bool,
	classNameLabel: PropTypes.string,
	classNameInput: PropTypes.string,
	selectedAnyRadio: PropTypes.bool,
};
