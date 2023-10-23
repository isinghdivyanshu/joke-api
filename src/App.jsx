import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Joke from "./pages/Joke";
import Info from "./pages/Info";
import "./App.css";

function App() {
	return (
		<>
			<Router>
				<Routes>
					<Route path="/" element={<Info />}></Route>
					<Route path="/jokes" element={<Joke />}></Route>
				</Routes>
			</Router>
		</>
	);
}

export default App;
