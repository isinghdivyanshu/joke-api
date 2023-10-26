import axios from "../axios";
import { Link } from "react-router-dom";
import { useState } from "react";
import Input from "../components/Input";
import GetURL from "../components/GetURL";

export default function Joke() {
	const [selectedAnyRadio, setSelectedAnyRadio] = useState(true);
	const [selectedCategories, setSelectedCategories] = useState([]);
	const [selectedLanguage, setSelectedLanguage] = useState("en");
	const [selectedFlags, setSelectedFlags] = useState([]);
	const [selectedFormat, setSelectedFormat] = useState("json (default)");
	const [selectedTypes, setSelectedTypes] = useState(["single", "twopart"]);
	const [selectedAmount, setSelectedAmount] = useState("1");
	const [URL, setURL] = useState("https://v2.jokeapi.dev/joke/Any?");
	const [joke, setJoke] = useState(
		"Select your choice then click the button below."
	);

	async function handleFetchJoke() {
		let jokes;
		let res;
		try {
			res = await axios.get(URL);
			console.log(res.data);
			if (res.data.error === false && res.data.type === "single") {
				jokes = res.data.joke;
			} else if (
				res.data.error === false &&
				res.data.type === "twopart"
			) {
				jokes = `${res.data.setup} ${res.data.delivery}`;
			} else {
				throw new Error(`Error: ${res.message}`);
			}
			setJoke(jokes);
		} catch (err) {
			const error = res.data.message;
			setJoke(error);
		}
	}

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
				<div className="bg-gray-200 max-w-fit inline-block p-2 rounded-lg border-2 border-black">
					<div className="font-medium text-lg">
						Select Category/Categories:
					</div>
					<div className="rounded-lg border-2 border-gray-400 p-2 my-2">
						<Input
							type="radio"
							id="Any"
							onChange={handleRadioChange}
							checked={selectedAnyRadio}
							classNameLabel="block"
							classNameInput="m-2"
							selectedAnyRadio={selectedAnyRadio}
						/>
						<Input
							type="radio"
							id="Custom"
							onChange={handleRadioChange}
							checked={!selectedAnyRadio}
							classNameLabel=""
							classNameInput="m-2"
							selectedAnyRadio={selectedAnyRadio}
						/>
						{":"}
						<Input
							id="Programming"
							name="check"
							type="checkbox"
							onChange={handleCategoriesChange}
							checked={selectedCategories.includes("Programming")}
							disabled={selectedAnyRadio}
							classNameLabel="ml-10"
							classNameInput="mx-1"
							selectedAnyRadio={selectedAnyRadio}
						/>
						<Input
							id="Misc"
							name="check"
							type="checkbox"
							onChange={handleCategoriesChange}
							checked={selectedCategories.includes("Misc")}
							disabled={selectedAnyRadio}
							selectedAnyRadio={selectedAnyRadio}
							classNameLabel="ml-4"
							classNameInput="mx-1"
						/>
						<Input
							id="Dark"
							name="check"
							type="checkbox"
							onChange={handleCategoriesChange}
							checked={selectedCategories.includes("Dark")}
							disabled={selectedAnyRadio}
							selectedAnyRadio={selectedAnyRadio}
							classNameLabel="ml-4"
							classNameInput="mx-1"
						/>
						<Input
							id="Pun"
							name="check"
							type="checkbox"
							onChange={handleCategoriesChange}
							checked={selectedCategories.includes("Pun")}
							disabled={selectedAnyRadio}
							selectedAnyRadio={selectedAnyRadio}
							classNameLabel="ml-4"
							classNameInput="mx-1"
						/>
						<Input
							id="Spooky"
							name="check"
							type="checkbox"
							onChange={handleCategoriesChange}
							checked={selectedCategories.includes("Spooky")}
							disabled={selectedAnyRadio}
							selectedAnyRadio={selectedAnyRadio}
							classNameLabel="ml-4"
							classNameInput="mx-1"
						/>
						<Input
							id="Christmas"
							name="check"
							type="checkbox"
							onChange={handleCategoriesChange}
							checked={selectedCategories.includes("Christmas")}
							disabled={selectedAnyRadio}
							selectedAnyRadio={selectedAnyRadio}
							classNameLabel="ml-4"
							classNameInput="mx-1"
						/>
					</div>
					<div className="font-medium text-lg">Select Language:</div>
					<div className="rounded-lg border-2 border-gray-400 p-2 my-2">
						<select
							id="lang"
							value={selectedLanguage}
							className="rounded-md p-2"
							onChange={handleLanguageChange}
						>
							<option value="cs">Czech</option>
							<option value="en">English</option>
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
							onChange={handleFlagsChange}
							checked={selectedFlags.includes("nsfw")}
							classNameLabel="ml-4"
							classNameInput="mx-1"
						/>
						<Input
							id="religious"
							type="checkbox"
							onChange={handleFlagsChange}
							checked={selectedFlags.includes("religious")}
							classNameLabel="ml-4"
							classNameInput="mx-1"
						/>
						<Input
							id="political"
							type="checkbox"
							onChange={handleFlagsChange}
							checked={selectedFlags.includes("political")}
							classNameLabel="ml-4"
							classNameInput="mx-1"
						/>
						<Input
							id="racist"
							type="checkbox"
							onChange={handleFlagsChange}
							checked={selectedFlags.includes("racist")}
							classNameLabel="ml-4"
							classNameInput="mx-1"
						/>
						<Input
							id="sexist"
							type="checkbox"
							onChange={handleFlagsChange}
							checked={selectedFlags.includes("sexist")}
							classNameLabel="ml-4"
							classNameInput="mx-1"
						/>
						<Input
							id="explicit"
							type="checkbox"
							onChange={handleFlagsChange}
							checked={selectedFlags.includes("explicit")}
							classNameLabel="ml-4"
							classNameInput="mx-1"
						/>
					</div>
					<div className="font-medium text-lg">
						Select Response Format:
					</div>
					<div className="rounded-lg border-2 border-gray-400 p-2 my-2">
						<Input
							id="json (default)"
							name="response"
							type="radio"
							onChange={handleFormatChange}
							checked={selectedFormat === "json (default)"}
							classNameLabel="ml-4"
							classNameInput="mx-1"
						/>
						<Input
							id="xml"
							name="response"
							type="radio"
							onChange={handleFormatChange}
							checked={selectedFormat === "xml"}
							classNameLabel="ml-4"
							classNameInput="mx-1"
						/>
						<Input
							id="yaml"
							name="response"
							type="radio"
							onChange={handleFormatChange}
							checked={selectedFormat === "yaml"}
							classNameLabel="ml-4"
							classNameInput="mx-1"
						/>
						<Input
							id="plaintext"
							name="response"
							type="radio"
							onChange={handleFormatChange}
							checked={selectedFormat === "plaintext"}
							classNameLabel="ml-4"
							classNameInput="mx-1"
						/>
					</div>
					<div className="font-medium text-lg">
						Select Joke Type{" "}
						<span className="font-normal text-sm">
							(at least 1)
						</span>
						:
					</div>
					<div className="rounded-lg border-2 border-gray-400 p-2 my-2">
						<Input
							id="single"
							type="checkbox"
							checked={selectedTypes.includes("single")}
							onChange={handleTypesChange}
							classNameLabel="ml-4"
							classNameInput="mx-1"
						/>
						<Input
							id="twopart"
							type="checkbox"
							checked={selectedTypes.includes("twopart")}
							onChange={handleTypesChange}
							classNameLabel="ml-4"
							classNameInput="mx-1"
						/>
					</div>
					<div className="font-medium text-lg">
						Amount of Jokes{" "}
						<span className="font-normal text-sm">(1 to 10):</span>
					</div>
					<div className="rounded-lg border-2 border-gray-400 p-2 my-2">
						<input
							id="amount"
							type="number"
							min="1"
							max="10"
							defaultValue={selectedAmount}
							onChange={handleAmountChange}
						/>
					</div>
				</div>
				<div className="bg-gray-200 grow inline-block p-5 rounded-lg border-2 border-black text-lg font-medium text-pink-900">
					<GetURL
						selectedAnyRadio={selectedAnyRadio}
						selectedCategories={selectedCategories}
						selectedLanguage={selectedLanguage}
						selectedFlags={selectedFlags}
						selectedFormat={selectedFormat}
						selectedTypes={selectedTypes}
						selectedAmount={selectedAmount}
						setURL={setURL}
					/>
					{joke}
					<button
						onClick={handleFetchJoke}
						className="block py-2 px-4 my-11 mx-auto border border-blue-500 rounded-lg text-black text-base font-normal hover:bg-blue-500 hover:text-white"
					>
						Generate New Joke
					</button>
				</div>
			</div>
		</div>
	);

	function handleRadioChange(e) {
		setSelectedAnyRadio(!selectedAnyRadio);
		if (e.target.id === "Any") {
			setSelectedCategories([]);
		} else {
			setSelectedCategories(["Programming"]);
		}
	}

	function handleCategoriesChange(e) {
		if (selectedCategories.includes(e.target.id)) {
			setSelectedCategories((prevState) =>
				prevState.filter((category) => category !== e.target.id)
			);
		} else {
			setSelectedCategories((prevState) => [...prevState, e.target.id]);
		}
	}

	function handleLanguageChange(e) {
		setSelectedLanguage(e.target.value);
	}

	function handleFlagsChange(e) {
		if (selectedFlags.includes(e.target.id)) {
			setSelectedFlags((prevState) =>
				prevState.filter((flag) => flag !== e.target.id)
			);
		} else {
			setSelectedFlags((prevState) => [...prevState, e.target.id]);
		}
	}

	function handleFormatChange(e) {
		setSelectedFormat(e.target.id);
	}

	function handleTypesChange(e) {
		if (selectedTypes.includes(e.target.id)) {
			setSelectedTypes((prevState) => {
				return prevState.filter((type) => type !== e.target.id);
			});
		} else {
			setSelectedTypes((prevState) => {
				return [...prevState, e.target.id];
			});
		}
	}

	function handleAmountChange(e) {
		setSelectedAmount(e.target.value);
	}
}
