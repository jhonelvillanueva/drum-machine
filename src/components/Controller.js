import './Controller.css';
import React from 'react';

const Controller = ({ onBank, isPowerOn, volume, adjustVolume, display }) => {
	return (
		<>
			<div className='display controls'>
				<h1>{display}</h1>
			</div>
			<div className='power-control-container controls'>
				<button className='power-control' onClick={isPowerOn}>
					Power
				</button>
			</div>
			<div className='bank-control-container controls'>
				<div className='bank-control' onClick={onBank}>
					Bank
				</div>
			</div>
			<div className='volume-control-container controls'>
				<input
					type='range'
					className='volume-control'
					max='1'
					min='0'
					step='0.01'
					value={volume}
					onChange={adjustVolume}
				/>
			</div>
		</>
	);
};

export default Controller;
