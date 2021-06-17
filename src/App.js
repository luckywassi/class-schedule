import React, { useState, useEffect } from 'react';
import Cart from './Components/Cart';
import Timer from './Components/Timer';
import { scheduleFor30Days } from './assets/createSchedule';
import { data } from './assets/data';
import CartContent from './Components/CartContent';

function App() {
	const [freeSeats, setFreeSeats] = useState(Math.floor(Math.random() * (15 - 5 + 1)) + 5);
	const scheduleArr = scheduleFor30Days();
	const [available, setAvailable] = useState(data);
	const [cartItems, setCartItems] = useState({ total: 0, items: [] });
	const [showCart, setShowCart] = useState(false);

	const handleClick = (e, index, sub, time) => {
		if (cartItems.total >= 3) {
			alert('You can only book max of 3 classes');
			return;
		}
		let availableSeats = available[`week${index + 1}`];
		let seats = availableSeats[sub];
		seats -= 1;
		let cartItem = { subject: sub, time, date: scheduleArr[index][sub], week: `week${index + 1}`, seats };
		setCartItems({ items: [...cartItems.items, cartItem], total: cartItems.total + 1 });
		availableSeats = {
			...availableSeats,
			[sub]: seats,
			[`booked${sub}`]: true,
		};
		setAvailable({
			...available,
			[`week${index + 1}`]: availableSeats,
		});
	};

	return (
		<div className='wrapper'>
			<div className='header'>
				<Timer />
				<Cart data={{ cartItems, setShowCart }} />
			</div>

			<div className='content-header'>
				<h3>Class Schedule</h3>
				<h4>Free Seats Left: {freeSeats}</h4>
			</div>
			{showCart ? (
				<CartContent cartData={{ cartItems, setShowCart, setCartItems, available, setAvailable }} />
			) : (
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
										<td>{available[`week${index + 1}`].python} seats available</td>
										<td>
											<input
												type='button'
												value='Book'
												disabled={
													available[`week${index + 1}`].python === 0 || available[`week${index + 1}`].bookedpython
														? true
														: false
												}
												onClick={e => handleClick(e, index, 'python', '4pm')}
											/>
										</td>
									</tr>
									<tr>
										<td>java</td>
										<td>{week.java}</td>
										<td>5pm</td>
										<td>{available[`week${index + 1}`].java} seats available</td>
										<td>
											<input
												type='button'
												disabled={
													available[`week${index + 1}`].java === 0 || available[`week${index + 1}`].bookedjava
														? true
														: false
												}
												value='Book'
												onClick={e => handleClick(e, index, 'java', '5pm')}
											/>
										</td>
									</tr>
									<tr>
										<td>html class 1</td>
										<td>{week.html1}</td>
										<td>9pm</td>
										<td>{available[`week${index + 1}`].html1} seats available</td>
										<td>
											<input
												disabled={
													available[`week${index + 1}`].html1 === 0 || available[`week${index + 1}`].bookedhtml1
														? true
														: false
												}
												type='button'
												value='Book'
												onClick={e => handleClick(e, index, 'html1', '9pm')}
											/>
										</td>
									</tr>
									<tr>
										<td>html class 2</td>
										<td>{week.html2}</td>
										<td>9pm</td>
										<td>{available[`week${index + 1}`].html2} seats available</td>
										<td>
											<input
												disabled={
													available[`week${index + 1}`].html2 === 0 || available[`week${index + 1}`].bookedhtml2
														? true
														: false
												}
												type='button'
												value='Book'
												onClick={e => handleClick(e, index, 'html2', '9pm')}
											/>
										</td>
									</tr>
								</React.Fragment>
							))}
						</tbody>
					</table>
				</div>
			)}
		</div>
	);
}

export default App;
