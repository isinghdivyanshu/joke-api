import { Link } from "react-router-dom";

export default function Joke() {
	return (
		<div className="max-w-5xl mx-auto p-4">
			<Link
				to={"/"}
				className="rounded-md border border-blue-500 hover:bg-blue-500 hover:text-white p-2 "
			>
				Back
			</Link>
		</div>
	);
}
