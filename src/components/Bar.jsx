import React from "react";
import "./css/Bar.css";

const Bar = ({
	width,
	height,
	value,
	firstState,
	secondState,
	thirdState,
	fourthState,
	sortedState,
	style
}) => {
	let classNames = "Bar";

	if (sortedState) classNames += " sortedState";
	if (fourthState) classNames += " state_d";
	else if (thirdState) classNames += " state_c";
	else if (secondState) classNames += " state_b";
	else if (firstState) classNames += " state_a";

	let currentBarStyling = { ...style, width: `${width}%`, height: `${height}%` };

	return (
		<div style={currentBarStyling} className={classNames}>
			<span className="InnerBarValue">{value}</span>
		</div>
	);
};

export default Bar;
