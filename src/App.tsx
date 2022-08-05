import { Test } from "./components/Test";
import { Route, Routes } from "react-router-dom";

import "./App.css";
import MainHeader from "./components/Header";
import { Randomizer } from "./components/Randomizer";

function App() {
	return (
		<div className="App">
			<MainHeader />
			<Routes>
				<Route path="/" element={<Test />} />
				<Route path="/randomizer" element={<Randomizer />} />
				<Route path="/markov" element={<div>Markov</div>} />
			</Routes>
		</div>
	);
}

export default App;
