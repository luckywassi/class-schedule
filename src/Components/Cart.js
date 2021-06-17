import React from 'react';

function Cart(props) {
	console.log(props);
	return (
		<div>
			<span style={{ fontSize: '40px' }}>
				<i className='fas fa-cart-plus'></i>
				{props.data}
			</span>
		</div>
	);
}

export default Cart;
