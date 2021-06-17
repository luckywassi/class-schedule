import React, { useState } from 'react';
import Cart from './Components/Cart';
import Timer from './Components/Timer';
import { scheduleForNWeeks } from './assets/createSchedule';
import { data } from './assets/data';
import CartContent from './Components/CartContent';

function App() {
	const freeSeats = Math.floor(Math.random() * (15 - 5 + 1)) + 5;
	//const scheduleArr = scheduleFor30Days();
	const scheduleArr = scheduleForNWeeks(8);
	const [available, setAvailable] = useState(data);
	const [cartItems, setCartItems] = useState({ total: 0, items: [] });
	const [showCart, setShowCart] = useState(false);

	const handleClick = (e, index, sub, time) => {
		let availableSeats = available[`week${index + 1}`];
		if (availableSeats.bookedThisWeek >= 3) {
			alert('You can only book max of 3 classes per week');
			return;
		}
		let seats = availableSeats[sub];
		seats -= 1;
		let cartItem = { subject: sub, time, date: scheduleArr[index][sub], week: `week${index + 1}`, seats };
		setCartItems({ items: [...cartItems.items, cartItem], total: cartItems.total + 1 });
		availableSeats = {
			...availableSeats,
			[sub]: seats,
			[`booked${sub}`]: true,
			bookedThisWeek: availableSeats.bookedThisWeek + 1,
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
			{showCart ? (
				<CartContent cartData={{ cartItems, setShowCart, setCartItems, available, setAvailable }} />
			) : (
				<div className='content'>
					<div className='content-header'>
						<h1>Class Schedule</h1>
						<h3>Free Seats Left: {freeSeats}</h3>
					</div>
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
									<tr className='week-row'>
										<td>-----------</td>
										<td>------------------</td>
										<td>---Week {index + 1} from today---</td>
										<td>------------------</td>
										<td>------------</td>
									</tr>
									<tr>
										<td>python</td>
										<td>{week.python}</td>
										<td>4pm</td>
										<td>{available[`week${index + 1}`].python} seats available</td>
										<td>
											<input
												type='button'
												className={available[`week${index + 1}`].python === 0 ? 'full' : ''}
												value={available[`week${index + 1}`].python === 0 ? '-Full-' : 'Book'}
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
												className={available[`week${index + 1}`].java === 0 ? 'full' : ''}
												disabled={
													available[`week${index + 1}`].java === 0 || available[`week${index + 1}`].bookedjava
														? true
														: false
												}
												value={available[`week${index + 1}`].java === 0 ? '-Full-' : 'Book'}
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
												className={available[`week${index + 1}`].html1 === 0 ? 'full' : ''}
												disabled={
													available[`week${index + 1}`].html1 === 0 || available[`week${index + 1}`].bookedhtml1
														? true
														: false
												}
												type='button'
												value={available[`week${index + 1}`].html1 === 0 ? '-Full-' : 'Book'}
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
												className={available[`week${index + 1}`].html2 === 0 ? 'full' : ''}
												disabled={
													available[`week${index + 1}`].html2 === 0 || available[`week${index + 1}`].bookedhtml2
														? true
														: false
												}
												type='button'
												value={available[`week${index + 1}`].html2 === 0 ? '-Full-' : 'Book'}
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
