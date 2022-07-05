import './DrumButton.css';
import React from 'react';

const DrumButton = ({ bank, power, volume }) => {
	const drum = bank.map((item) => {
		const playSound = () => {
			let audio = new Audio(item.url);
			audio.play();
			audio.volume = volume;
		};

		if (power) {
			return (
				<button className='btn-drum' key={item.id} onClick={playSound}>
					<p>{item.keyTrigger}</p>
					<p>{item.id}</p>
				</button>
			);
		} else {
			return (
				<button className='btn-drum' key={item.id}>
					<p>{item.keyTrigger}</p>
					<p>{item.id}</p>
				</button>
			);
		}
	});

	return <div className='btn-drum-container'>{drum}</div>;
};

export default DrumButton;
