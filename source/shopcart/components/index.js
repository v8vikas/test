/** @jsx dom */
import dom from 'magic-virtual-element';
import Row from './row';

const renderRows = (articles,decreasesQuantity,increasesQuantity) => articles.map(article => (
	<Row quantity={article.quantity} price={article.price} title={article.name}
								decreasesQuantity={decreasesQuantity} increasesQuantity={increasesQuantity} id={article.id}/>
));

const render = component => {

	const {props,state,setState} = component;

  function decreasesQuantity(id) {
			console.log(props.articles,id);
			const articles = props.articles.map((article)=>{
					if(article.id === id && article.quantity) {
						article.quantity--
					}
					return article
				})
				console.log(state);
	}
	function increasesQuantity(id) {
			console.log(props.articles,id);

			props.articles = props.articles.map((article)=>{
				if(article.id === id) {
				article.quantity++
				}
				return article
			})

	}

	function beforeRender (component) {
		let {props, state, id} = component

				console.log(props, state)
		}

	return (
		<div class='Shopcart'>
			<button onClick={props.fetch}>Load shopcart</button>
			{renderRows(state.articles || [], decreasesQuantity,increasesQuantity)}
		</div>
	);
};

export default {render};
