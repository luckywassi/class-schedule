import react, { useState, useEffect } from 'react';
import Cart from './Components/Cart';
import Timer from './Components/Timer';
import { scheduleFor30Days } from './assets/createSchedule';

function App() {
	const [freeSeats, setFreeSeats] = useState(Math.floor(Math.random() * (15 - 5 + 1)) + 5);
	const scheduleArr = scheduleFor30Days();
	console.log(scheduleArr);
	return (
		<div className='wrapper'>
			<div className='header'>
				<Timer />
				<Cart />
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
						{scheduleArr.map(week => (
							<>
								<tr>
									<td>python</td>
									<td>{week.python}</td>
									<td>4pm</td>
								</tr>
								<tr>
									<td>java</td>
									<td>{week.java}</td>
									<td>5pm</td>
								</tr>
								<tr>
									<td>html class 1</td>
									<td>{week.html1}</td>
									<td>9pm</td>
								</tr>
								<tr>
									<td>html class 2</td>
									<td>{week.html2}</td>
									<td>9pm</td>
								</tr>
							</>
						))}
					</tbody>
				</table>
			</div>
		</div>
	);
}

export default App;
