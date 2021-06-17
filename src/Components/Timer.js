import React, { useState, useEffect } from 'react';

function Timer() {
	const [count, setCount] = useState(Math.floor(Math.random() * (60 - 30 + 1)) + 30);

	useEffect(() => {
		if (count !== 0) {
			setTimeout(() => setCount(count - 1), 1000);
		}
	}, [count]);
	return (
		<div className='timer'>
			<p>Time Left: {count} seconds</p>
			<h1 style={{ color: 'orange' }}>Claim Your Free Trial Class Today</h1>
		</div>
	);
}

export default Timer;
