import './DrumButton.css';
import React, { useEffect } from 'react';

const DrumButton = ({ drum, displayOn, volume, power }) => {
	const audio = new Audio(drum.url);

	const playSound = () => {
		audio.play();
		audio.volume = volume;
		displayOn(drum.id);

		console.log(power);
	};

	const handleKeyDown = (e) => {
		if (e.keyCode === drum.keyCode) {
			playSound();
		}
	};

	useEffect(() => {
		document.addEventListener('keydown', handleKeyDown, true);

		return () => document.removeEventListener('keydown', handleKeyDown, true);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<div className='btn-drum-container'>
			<button
				className='btb-drum'
				onClick={playSound}
				onKeyDown={handleKeyDown}>
				{drum.keyTrigger}
			</button>
		</div>
	);
};

export default DrumButton;
