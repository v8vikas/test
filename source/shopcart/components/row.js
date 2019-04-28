/** @jsx dom */
import dom from 'magic-virtual-element';

const render = component => {
	const {props} = component;
	const {id, price, quantity, title, increase, decrease} = props;
	function decreasesQuantity(id) {
		decrease(id);
	}

	function increasesQuantity(id) {
		increase(id);

	}

	return (

		<div class='ShopcartRow'>
			<h1 class='ShopcartRow-title'>{title}</h1>
			<div class='ShopcartRow-quantity'>Quantity: {quantity}</div>
			<div class='ShopcartRow-unitPrice'>Unit price: {price} kr</div>
			<div class='ShopcartRow-totalPrice'>Total price {price * quantity} kr</div>
			<button onClick={() =>{decreasesQuantity(id)}}>Decreases</button>
			<button onClick={() =>{increasesQuantity(id)}}>Increases</button>
		</div>
	);
};

export default {render};
