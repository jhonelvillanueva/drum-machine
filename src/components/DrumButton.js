import './DrumButton.css';
import React from 'react';

const DrumButton = ({ bank }) => {
	console.log(bank);
	const drum = bank.map((item) => {
		const playSound = () => {
			let audio = new Audio(item.url);
			audio.play();
		};

		return (
			<button className='btn-drum' key={item.id} onClick={playSound}>
				<p>{item.keyTrigger}</p>
				<p>{item.id}</p>
			</button>
		);
	});

	return <div className='btn-drum-container'>{drum}</div>;
};

export default DrumButton;
