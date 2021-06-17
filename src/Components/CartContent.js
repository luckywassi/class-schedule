import React from 'react';

function CartContent(props) {
	const { cartItems, setShowCart, setCartItems, available, setAvailable } = props.cartData;
	console.log(cartItems);

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
		};
		setAvailable({
			...available,
			[item.week]: availableSeats,
		});
	};
	return (
		<>
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
			</div>
			<div style={{ textAlign: 'center' }}>
				<input type='button' value='Back' onClick={() => setShowCart(false)} />
			</div>
		</>
	);
}

export default CartContent;
