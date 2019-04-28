/** @jsx dom */
import dom from 'magic-virtual-element';

const render = component => {
	const {props} = component;
	const {id, price, quantity, title, increasesQuantity, decreasesQuantity} = props;

	return (

		<div class='ShopcartRow'>
			<h1 class='ShopcartRow-title'>{title}</h1>
			<div class='ShopcartRow-quantity'>Quantity: {quantity}</div>
			<div class='ShopcartRow-unitPrice'>Unit price: {price} kr</div>
			<div class='ShopcartRow-totalPrice'>Total price {price * quantity} kr</div>
			<button onClick={() =>{decreasesQuantity(id)}}>Decreases</button>
			<button onClick={() =>{increasesQuantity(id)}}>increases</button>
		</div>
	);
};

export default {render};
