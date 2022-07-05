import './Board.css';
import React, { useState, useEffect } from 'react';
import DrumButton from './DrumButton';
import { bankOne, bankTwo } from './helper/banks';
import Controller from './Controller';

const Board = () => {
	const [bank, setBank] = useState([]);
	const [power, setPower] = useState(false);
	const [volume, setVolume] = useState(0.3);

	const chooseBank = () => {
		setBank(bank === bankOne ? bankTwo : bankOne);
	};

	const isPowerOn = () => {
		setPower(power ? false : true);
	};

	const adjustVolume = (e) => {
		setVolume(e.target.value);
	};

	useEffect(() => {
		chooseBank();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<div className='board-container'>
			<div className='controller-container'>
				<Controller
					onBank={chooseBank}
					isPowerOn={isPowerOn}
					volume={volume}
					adjustVolume={adjustVolume}
				/>
			</div>
			<div className='drumpad-container'>
				<DrumButton bank={bank} power={power} volume={volume} />
			</div>
		</div>
	);
};

export default Board;
