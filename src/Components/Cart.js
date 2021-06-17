import React from 'react';

function Cart(props) {
	let { cartItems, setShowCart } = props.data;

	const handleClick = () => {
		setShowCart(true);
	};
	return (
		<div className='cart-wrapper'>
			<button onClick={handleClick}>
				<i className='fas fa-cart-plus cart-btn'></i>
				<span className='cart-batch'>{cartItems.total}</span>
			</button>
		</div>
	);
}

export default Cart;
