import { useEffect } from "react";
import PropTypes from "prop-types";

export default function GetUrl({
	selectedAnyRadio,
	selectedCategories,
	selectedLanguage,
	selectedFlags,
	selectedFormat,
	selectedTypes,
	selectedAmount,
	setURL,
}) {
	const baseURL = "https://v2.jokeapi.dev/joke/";
	const categories = selectedAnyRadio ? "Any?" : selectedCategories + "?";
	const language =
		selectedLanguage === "en" ? "" : "&lang=" + selectedLanguage;
	const flags =
		selectedFlags.length > 0 ? "&blacklistFlags=" + selectedFlags : "";
	const format =
		selectedFormat === "json (default)" ? "" : "&format=" + selectedFormat;
	const type = selectedTypes.length === 2 ? "" : "&type=" + selectedTypes;
	const amount = selectedAmount <= 1 ? "" : "&amount=" + selectedAmount;
	const finalURL =
		baseURL + categories + language + flags + format + type + amount;

	useEffect(() => {
		setURL(finalURL);
	}, [finalURL]);
}

GetUrl.propTypes = {
	selectedAnyRadio: PropTypes.bool.isRequired,
	selectedCategories: PropTypes.array.isRequired,
	selectedLanguage: PropTypes.string.isRequired,
	selectedFlags: PropTypes.array.isRequired,
	selectedFormat: PropTypes.string.isRequired,
	selectedTypes: PropTypes.array.isRequired,
	selectedAmount: PropTypes.string.isRequired,
	setURL: PropTypes.func.isRequired,
};
