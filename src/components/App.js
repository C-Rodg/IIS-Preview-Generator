import React, { Component } from "react";
import axios from "axios";

import Header from "./Header";

class App extends Component {
	render() {
		return (
			<div className="app">
				<Header />
				<div>Config</div>
			</div>
		);
	}
}

export default App;
