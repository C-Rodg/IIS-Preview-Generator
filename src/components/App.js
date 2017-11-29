import React, { Component } from "react";
import axios from "axios";

import Header from "./Header";
import Card from "./Card";

class App extends Component {
	createPreview = () => {
		// send to node backend
	};

	render() {
		return (
			<div className="app">
				<Header />
				<main className="container">
					<Card onCreatePreview={this.createPreview} />
				</main>
			</div>
		);
	}
}

export default App;
