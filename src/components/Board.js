import React, { useState, useEffect } from 'react';
import DrumButton from './DrumButton';
import { bankOne, bankTwo } from './helper/banks';

const Board = () => {
	const [bank, setBank] = useState([]);

	useEffect(() => {
		setBank(bankOne);
	});

	return (
		<div className='drumpad-container'>
			<DrumButton bank={bank} />
		</div>
	);
};

export default Board;
