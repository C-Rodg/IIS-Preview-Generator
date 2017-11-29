import React, { Component } from "react";
import styled from "styled-components";

import TextInput from "./TextInput";

const StyledError = styled.div`
	color: #ed4135;
	font-size: 0.9rem;
	text-align: center;
	margin-bottom: 15px;
`;

const StyledCard = styled.div`
	margin: 0;
	box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
	background-color: #fff;
	max-width: 400px;
	border-radius: 2px;
	box-sizing: border-box;
	position: relative;
	flex: 1;

	.card-title {
		font-size: 1.3rem;
		font-weight: 500;
		padding: 10px 10px 8px 10px;
	}

	.card-body {
		padding: 20px 10px 10px 10px;
	}

	.card-actions {
		display: flex;
		text-transform: uppercase;
		border-top: 1px solid #e7e7e7;

		.action {
			background-color: #fff;
			transition: background-color 0.3s ease;
			padding: 10px 0;
			color: #333;
			font-size: 1.2rem;
			flex: 1;
			text-align: center;
			font-weight: 500;
			border-radius: 2px;
			cursor: pointer;

			&:hover {
				background-color: #e7e7e7;
			}
		}
	}
`;

class Card extends Component {
	state = {
		folderName: "",
		subfolderName: "V4.0",
		error: false
	};

	updateTextValue = (tag, ev) => {
		this.setState({
			[tag]: ev.target.value
		});
	};

	validateConfig = () => {
		if (!this.state.folderName || !this.state.subfolderName) {
			this.setState({
				error: true
			});
		} else {
			this.props.onCreatePreview({
				folderName: this.state.folderName,
				subfolderName: this.state.subfolderName
			});
		}
	};

	render() {
		return (
			<StyledCard>
				<div className="card-title">Create a Preview</div>
				<form>
					<div className="card-body">
						<TextInput
							val={this.state.folderName}
							tag="folderName"
							valChange={this.updateTextValue}
							label="Preview Folder Name"
							type="text"
						/>
						<TextInput
							val={this.state.subfolderName}
							tag="subfolderName"
							valChange={this.updateTextValue}
							label="Subfolder Name"
							type="text"
						/>
					</div>
					{this.state.error && (
						<StyledError>
							There seems to be an issue with your configuration..
						</StyledError>
					)}
					<div className="card-actions">
						<div className="action" onClick={this.validateConfig}>
							Create
						</div>
					</div>
				</form>
			</StyledCard>
		);
	}
}

export default Card;
