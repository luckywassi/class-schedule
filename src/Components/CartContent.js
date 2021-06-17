import React from 'react';

function CartContent(props) {
	const { cartItems, setShowCart, setCartItems, available, setAvailable } = props.cartData;
	const handleClick = item => {
		let restItems = cartItems.items.filter(eachItem => !(eachItem.subject === item.subject && eachItem.week === item.week));
		setCartItems({ items: restItems, total: cartItems.total - 1 });
		let availableSeats = available[item.week];
		let seats = availableSeats[item.subject];
		seats += 1;
		availableSeats = {
			...availableSeats,
			[item.subject]: seats,
			[`booked${item.subject}`]: false,
			bookedThisWeek: availableSeats.bookedThisWeek - 1,
		};
		setAvailable({
			...available,
			[item.week]: availableSeats,
		});
	};
	return (
		<>
			<div className='content'>
				<div className='content-header'>
					<h1>Cart</h1>
				</div>
				<br />
				{cartItems.total === 0 ? (
					<h3>Cart is empty...!</h3>
				) : (
					<table>
						<tbody>
							<tr>
								<th>Subject</th>
								<th>Date</th>
								<th>Time</th>
								<th>Availability</th>
								<th>Action</th>
							</tr>
							{cartItems.items.map((item, index) => (
								<tr key={index}>
									<td>{item.subject}</td>
									<td>{item.date}</td>
									<td>{item.time}</td>
									<td>{item.seats} seats available</td>
									<td>
										<input type='button' value='Cancel' onClick={e => handleClick(item)} />
									</td>
								</tr>
							))}
						</tbody>
					</table>
				)}
				<br />
				<div style={{ textAlign: 'center' }}>
					<input type='button' value='Go Back' onClick={() => setShowCart(false)} />
				</div>
			</div>
		</>
	);
}

export default CartContent;
