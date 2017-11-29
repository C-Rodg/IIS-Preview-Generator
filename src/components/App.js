import React, { Component } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

import Header from "./Header";
import Card from "./Card";
import Loading from "./Loading";
import { setTimeout } from "timers";

const successToast = {
	className: "success-toast",
	bodyClassName: "toast-msg"
};

const errorToast = {
	className: "error-toast",
	bodyClassName: "toast-msg"
};

class App extends Component {
	state = {
		loading: false
	};
	createPreview = () => {
		// Set loading = true

		this.setState({ loading: true }, () => {
			// Call backend node service
			// OnSuccess =>
			//toast.success("Preview created successfully!", successToast);
			//this.setState({ loading: false });
			// OnError =>
			//toast.success("Unable to create preview..", errorToast);
			//this.setState({ loading: false });
		});
	};

	render() {
		return (
			<div className="app">
				<ToastContainer autoClose={100000000} />
				<Header />
				<main className="container">
					{!this.state.loading ? (
						<Card onCreatePreview={this.createPreview} />
					) : (
						<Loading />
					)}
				</main>
			</div>
		);
	}
}

export default App;
