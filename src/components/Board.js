import './Board.css';
import React, { useState, useEffect } from 'react';
import DrumButton from './DrumButton';
import { bankOne, bankTwo } from './helper/banks';
import Controller from './Controller';

const Board = () => {
	const [bank, setBank] = useState([]);
	const [power, setPower] = useState(false);
	const [volume, setVolume] = useState(0.3);
	const [display, setDisplay] = useState(' ');

	const chooseBank = () => {
		setBank(bank === bankOne ? bankTwo : bankOne);
		console.log(bank);
	};

	const isPowerOn = () => {
		setPower(power ? false : true);
		console.log(power);
	};

	const adjustVolume = (e) => {
		setVolume(e.target.value);
		setDisplay(Math.round(e.target.value * 100));
	};

	const displayOn = (item) => {
		setDisplay(item);
	};

	useEffect(() => {
		chooseBank();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	//* Need to clear display
	useEffect(() => {
		const clearDisplay = setTimeout(() => setDisplay(' '), 1000);
		return () => clearTimeout(clearDisplay);
	}, [display]);

	return (
		<div className='board-container'>
			<div className='controller-container'>
				<Controller
					onBank={chooseBank}
					isPowerOn={isPowerOn}
					volume={volume}
					adjustVolume={adjustVolume}
					display={display}
				/>
			</div>
			<div className='drumpad-container'>
				{bank.map((item) => {
					return (
						<DrumButton
							key={item.id}
							drum={item}
							displayOn={displayOn}
							volume={volume}
							power={power}
						/>
					);
				})}
			</div>
		</div>
	);
};

export default Board;
