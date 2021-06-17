import React from 'react';

function Cart(props) {
	let { cartItems, setShowCart } = props.data;

	const handleClick = () => {
		setShowCart(true);
	};
	return (
		<div>
			<button onClick={handleClick}>
				<i className='fas fa-cart-plus'></i>
				{cartItems.total}
			</button>
		</div>
	);
}

export default Cart;
