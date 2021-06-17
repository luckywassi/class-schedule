import React, { useState, useEffect } from 'react';
import Cart from './Components/Cart';
import Timer from './Components/Timer';
import { scheduleFor30Days } from './assets/createSchedule';
import { data } from './assets/data';

function App() {
	const [freeSeats, setFreeSeats] = useState(Math.floor(Math.random() * (15 - 5 + 1)) + 5);
	const scheduleArr = scheduleFor30Days();
	const [available, setAvailable] = useState(data);

	const [cartItems, setCartItems] = useState(0);

	const handleClick = (e, index, sub) => {
		let clickedItem = available[`week${index + 1}`];
		if (cartItems >= 3) {
			alert('You can only book max of 3 classes');
			return;
		}
		setCartItems(cartItems + 1);
		let seats = clickedItem[sub];
		seats -= 1;
		clickedItem = {
			...clickedItem,
			[sub]: seats,
		};
		setAvailable({
			...available,
			[`week${index + 1}`]: clickedItem,
		});
	};

	return (
		<div className='wrapper'>
			<div className='header'>
				<Timer />
				<Cart data={cartItems} />
			</div>
			<div className='content-header'>
				<h3>Class Schedule</h3>
				<h4>Free Seats Left: {freeSeats}</h4>
			</div>
			<div className='content'>
				<table>
					<tbody>
						<tr>
							<th>Subject</th>
							<th>Date</th>
							<th>Time</th>
							<th>Availability</th>
							<th>Action</th>
						</tr>
						{scheduleArr.map((week, index) => (
							<React.Fragment key={index}>
								<tr>
									<td>python</td>
									<td>{week.python}</td>
									<td>4pm</td>
									<td>{available[`week${index + 1}`].python}</td>
									<td>
										<input
											type='button'
											value='Book'
											disabled={available[`week${index + 1}`].python === 0 ? true : false}
											onClick={e => handleClick(e, index, 'python')}
										/>
									</td>
								</tr>
								<tr>
									<td>java</td>
									<td>{week.java}</td>
									<td>5pm</td>
									<td>{available[`week${index + 1}`].java}</td>
									<td>
										<input
											type='button'
											disabled={available[`week${index + 1}`].java === 0 ? true : false}
											value='Book'
											onClick={e => handleClick(e, index, 'java')}
										/>
									</td>
								</tr>
								<tr>
									<td>html class 1</td>
									<td>{week.html1}</td>
									<td>9pm</td>
									<td>{available[`week${index + 1}`].html1}</td>
									<td>
										<input
											disabled={available[`week${index + 1}`].html1 === 0 ? true : false}
											type='button'
											value='Book'
											onClick={e => handleClick(e, index, 'html1')}
										/>
									</td>
								</tr>
								<tr>
									<td>html class 2</td>
									<td>{week.html2}</td>
									<td>9pm</td>
									<td>{available[`week${index + 1}`].html2}</td>
									<td>
										<input
											disabled={available[`week${index + 1}`].html2 === 0 ? true : false}
											type='button'
											value='Book'
											onClick={e => handleClick(e, index, 'html2')}
										/>
									</td>
								</tr>
							</React.Fragment>
						))}
					</tbody>
				</table>
			</div>
		</div>
	);
}

export default App;
