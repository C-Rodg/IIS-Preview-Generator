import React from "react";
import styled from "styled-components";

const StyledHeader = styled.div`
	z-index: 2;
	background: linear-gradient(to right, #44a08d, #093637);
	padding: 20px;
	font-weight: 300;
	box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 6px, rgba(0, 0, 0, 0.12) 0px 1px 4px;
	font-size: 2rem;
	color: rgba(255, 255, 255, 0.83);
	text-align: center;
`;

const Header = () => {
	return (
		<StyledHeader classname="header">Validar Preview Generator</StyledHeader>
	);
};

export default Header;
