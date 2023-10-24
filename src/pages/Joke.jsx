import { Link } from "react-router-dom";
import { useState } from "react";
import PropTypes from "prop-types";

export default function Joke() {
	const [selectedRadio, setSelectedRadio] = useState("Any");

	function handleRadioChange(e) {
		setSelectedRadio(e.target.id);
	}

	function Input({
		id,
		name,
		type,
		onChange,
		checked,
		disabled,
		classNameLabel,
		classNameInput,
	}) {
		return (
			<label
				htmlFor={id}
				className={`select-none ${classNameLabel} ${
					selectedRadio === "Any" && name === "check"
						? "text-gray-500"
						: ""
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
	};

	return (
		<div className="w-full mx-auto p-5">
			<h1 className="font-bold text-3xl text-center">Jokes API</h1>
			<Link
				to={"/"}
				className="rounded-md border border-blue-500 hover:bg-blue-500 hover:text-white p-2 "
			>
				Back
			</Link>
			<h1 className="font-bold text-xl text-center m-6 underline text-red-500">
				Generate a Joke
			</h1>
			<div className="flex gap-5">
				<div className="bg-gray-200 w-fit inline-block p-2 rounded-lg border-2 border-black">
					<div className="font-medium text-lg">
						Select Category/Categories:
					</div>
					<div className="rounded-lg border-2 border-gray-400 p-2 my-2">
						<Input
							type="radio"
							id="Any"
							onChange={handleRadioChange}
							checked={selectedRadio === "Any"}
							classNameLabel="block"
							classNameInput="m-2"
						/>
						<Input
							type="radio"
							id="Custom"
							onChange={handleRadioChange}
							checked={selectedRadio !== "Any"}
							classNameLabel=""
							classNameInput="m-2"
						/>
						{":"}
						<Input
							id="Programming"
							name="check"
							type="checkbox"
							disabled={selectedRadio === "Any"}
							state={selectedRadio}
							classNameLabel="ml-10"
							classNameInput="mx-1"
						/>
						<Input
							id="Misc"
							name="check"
							type="checkbox"
							disabled={selectedRadio === "Any"}
							classNameLabel="ml-4"
							classNameInput="mx-1"
						/>
						<Input
							id="Dark"
							name="check"
							type="checkbox"
							disabled={selectedRadio === "Any"}
							classNameLabel="ml-4"
							classNameInput="mx-1"
						/>
						<Input
							id="Pun"
							name="check"
							type="checkbox"
							disabled={selectedRadio === "Any"}
							classNameLabel="ml-4"
							classNameInput="mx-1"
						/>
						<Input
							id="Spooky"
							name="check"
							type="checkbox"
							disabled={selectedRadio === "Any"}
							classNameLabel="ml-4"
							classNameInput="mx-1"
						/>
						<Input
							id="Christmas"
							name="check"
							type="checkbox"
							disabled={selectedRadio === "Any"}
							classNameLabel="ml-4"
							classNameInput="mx-1"
						/>
					</div>
					<div className="font-medium text-lg">Select Language:</div>
					<div className="rounded-lg border-2 border-gray-400 p-2 my-2">
						<select id="lang" className="rounded-md p-2">
							<option value="cs">Czech</option>
							<option value="en" selected>
								English
							</option>
							<option value="fr">French</option>
							<option value="de">German</option>
							<option value="pt">Portuguese</option>
							<option value="es">Spanish</option>
						</select>
					</div>
					<div className="font-medium text-lg">
						Select Flags to Blacklist{" "}
						<span className="font-normal text-sm">(optional)</span>:
					</div>
					<div className="rounded-lg border-2 border-gray-400 p-2 my-2">
						<Input
							id="nsfw"
							type="checkbox"
							classNameLabel="ml-4"
							classNameInput="mx-1"
						/>
						<Input
							id="religious"
							type="checkbox"
							classNameLabel="ml-4"
							classNameInput="mx-1"
						/>
						<Input
							id="political"
							type="checkbox"
							classNameLabel="ml-4"
							classNameInput="mx-1"
						/>
						<Input
							id="racist"
							type="checkbox"
							classNameLabel="ml-4"
							classNameInput="mx-1"
						/>
						<Input
							id="sexist"
							type="checkbox"
							classNameLabel="ml-4"
							classNameInput="mx-1"
						/>
						<Input
							id="explicit"
							type="checkbox"
							classNameLabel="ml-4"
							classNameInput="mx-1"
						/>
					</div>
					<div className="font-medium text-lg">
						Select Response Format:
					</div>
					<div className="rounded-lg border-2 border-gray-400 p-2 my-2">
						<Input
							id="json(default)"
							name="response"
							type="radio"
							classNameLabel="ml-4"
							classNameInput="mx-1"
						/>
						<Input
							id="xml"
							name="response"
							type="radio"
							classNameLabel="ml-4"
							classNameInput="mx-1"
						/>
						<Input
							id="yaml"
							name="response"
							type="radio"
							classNameLabel="ml-4"
							classNameInput="mx-1"
						/>
						<Input
							id="plaintext"
							name="response"
							type="radio"
							classNameLabel="ml-4"
							classNameInput="mx-1"
						/>
					</div>
					<div className="font-medium text-lg">
						Select at least one Joke Type:
					</div>
					<div className="rounded-lg border-2 border-gray-400 p-2 my-2">
						<Input
							id="single"
							type="checkbox"
							classNameLabel="ml-4"
							classNameInput="mx-1"
						/>
						<Input
							id="twopart"
							type="checkbox"
							classNameLabel="ml-4"
							classNameInput="mx-1"
						/>
					</div>
					<div className="font-medium text-lg">Amount of Jokes:</div>
					<div className="rounded-lg border-2 border-gray-400 p-2 my-2">
						<input
							type="number"
							min="0"
							max="10"
							defaultValue="1"
						/>
					</div>
				</div>
				<div className="bg-gray-200 grow inline-block p-2 rounded-lg border-2 border-black"></div>
			</div>
		</div>
	);
}
