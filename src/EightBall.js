import React, { useState } from "react";
import ballMessages from "./ballMessages";
import "./EightBall.css";
const EightBall = (props) => {
	const [msg, updateMsg] = useState("Think of a Question");
	const [color, updateColor] = useState("Black");
	const [colorCount, updateCount] = useState({
		green: 0,
		red: 0,
		goldenrod: 0,
	});

	const shake = () => {
		let rand = Math.floor(Math.random() * props.answers.length);
		let answer = props.answers[rand];
		updateColor(answer.color);
		updateMsg(answer.msg);
		let temp = { ...colorCount };
		temp[answer.color] = colorCount[answer.color] + 1;
		updateCount(temp);
	};

	const reset = () => {
		updateColor("black");
		updateMsg("Think of a Question");
		updateCount({ green: 0, red: 0, goldenrod: 0 });
	};

	return (
		<div>
			<div id="ball" onClick={shake} style={{ backgroundColor: color }}>
				<span className="message">{msg}</span>
			</div>
			<div>
				<p>Green: {colorCount.green}</p>
				<p>Red: {colorCount.red}</p>
				<p>Gold: {colorCount.goldenrod}</p>
			</div>
			<button id="reset" onClick={reset}>
				Reset
			</button>
		</div>
	);
};

EightBall.defaultProps = { answers: ballMessages };
export default EightBall;
