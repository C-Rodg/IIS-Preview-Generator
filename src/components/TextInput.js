import React from "react";
import styled from "styled-components";

const StyledInput = styled.div`
	position: relative;
	margin-bottom: 25px;

	input {
		outline: none;
		position: relative;
		background: none;
		width: 100%;
		height: 45px;
		border: 0;
		color: #212121;
		font-size: 1.1rem;
		font-weight: 400;
	}

	label {
		position: absolute;
		top: 0;
		left: 0;
		color: #757575;
		font-size: 1.1rem;
		font-weight: 300;
		line-height: 45px;
		transition: all 0.2s ease;
		pointer-events: none;
	}

	input:focus ~ label {
		color: #9d9d9d;
		transform: translate(-12%, -50%) scale(0.75);
	}

	.bar {
		position: absolute;
		left: 0;
		bottom: 0;
		background: #c5c5c5;
		width: 100%;
		height: 1px;
	}

	.bar::before,
	.bar::after {
		content: "";
		position: absolute;
		background: #22635c;
		width: 0;
		height: 2px;
		transition: width 0.2s ease;
	}

	.bar::before {
		left: 50%;
	}

	.bar::after {
		right: 50%;
	}

	input:focus ~ .bar::before,
	input:focus ~ .bar::after {
		width: 50%;
	}

	input:valid ~ label {
		color: #9d9d9d;
		transform: translate(-12%, -50%) scale(0.75);
	}
`;

const TextInput = ({ val, tag, valChange, label, type }) => {
	return (
		<StyledInput>
			<input
				required
				type={type ? type : "text"}
				value={val}
				onChange={ev => valChange(tag, ev)}
			/>
			<label htmlFor={label}>{label}</label>
			<div className="bar" />
		</StyledInput>
	);
};

export default TextInput;
