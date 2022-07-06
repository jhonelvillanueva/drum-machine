import './DrumButton.css';
import React from 'react';

const DrumButton = ({ bank, power, volume, displayOn }) => {
	const drum = bank.map((item) => {
		let audio = new Audio(item.url);
		const playSound = () => {
			audio.play();
			audio.volume = volume;
			displayOn(item.id.replace(/-/g, ' '));
		};

		const handleKeypress = (e) => {
			if (e.keyCqode === item.keyCode) {
				audio.play();
			}
		};

		if (power) {
			return (
				<button
					className='btn-drum'
					key={item.id}
					onClick={playSound}
					onKeyDown={handleKeypress}>
					<p>{item.keyTrigger}</p>
					<p>{item.id.replace(/-/g, ' ')}</p>
				</button>
			);
		} else {
			return (
				<button className='btn-drum' key={item.id}>
					<p>{item.keyTrigger}</p>
					<p>{item.id.replace(/-/g, ' ')}</p>
				</button>
			);
		}
	});

	return <div className='btn-drum-container'>{drum}</div>;
};

export default DrumButton;
