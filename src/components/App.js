import React from "react";
import Nav from "./Nav";
import PigCards from "./PigCards"

import hogs from "../porkers_data";

function App() {
	return (
		<div className="App">
			<Nav />
			<PigCards pigs={hogs}/>		
		</div>
	);
}

export default App;
