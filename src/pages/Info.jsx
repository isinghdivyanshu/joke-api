import { useEffect, useState } from "react";
import axios from "../axios";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function NavCat({ name, url, dataName }) {
	const [newData, setNewData] = useState([]);

	//using async/await
	useEffect(() => {
		const fetchData = async () => {
			try {
				const res = await axios.get(`${url}`);
				const data =
					name === "Joke Languages"
						? res.data[dataName]
						: res.data[url];
				setNewData(data);
			} catch (err) {
				alert(err);
			}
		};
		fetchData();
	}, []);

	//using .then
	// useEffect(() => {
	// 	axios.get(`/${url}`).then((res) => {
	// 		const data =
	// 			name === "Joke Languages"
	// 				? res.data[dataName]
	// 				: res.data[url];
	// 		setNewData(data);
	// 	});
	// }, []);

	return (
		<div className="flex flex-col bg-gray-50 p-2">
			<div className="font-medium text-lg text-red-400 mb-2 underline">
				{name}
			</div>
			<ul>
				{newData.map((data, index) => {
					return <li key={index}>{data}</li>;
				})}
			</ul>
		</div>
	);
}

export default function Info() {
	return (
		<div className="max-w-5xl mx-auto p-4">
			<h1 className="font-bold text-3xl text-center">Jokes API</h1>
			<div className="flex justify-between my-6">
				<NavCat name="Joke Categories" url="categories" dataName="" />
				<NavCat name="Blacklist Flags" url="flags" dataName="" />
				<NavCat name="Response Formats" url="formats" dataName="" />
				<NavCat
					name="Joke Languages"
					url="languages"
					dataName="jokeLanguages"
				/>
			</div>
			<Link
				to={"/jokes"}
				className="rounded-md border border-blue-500 hover:bg-blue-500 hover:text-white p-2 "
			>
				Generate a Joke
			</Link>
		</div>
	);
}

NavCat.propTypes = {
	name: PropTypes.string.isRequired,
	url: PropTypes.string.isRequired,
	dataName: PropTypes.string.isRequired,
};
