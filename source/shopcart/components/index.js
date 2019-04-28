/** @jsx dom */
import dom from 'magic-virtual-element';
import Row from './row';

const renderRows = (props) => props.articles.map(article => (
	<Row quantity={article.quantity} price={article.price} title={article.name}
		decrease={props.decrease} increase={props.increase} id={article.id} />
));

const render = component => {

	const { props } = component;
	
	return (
		<div class='Shopcart'>
			<button onClick={props.fetch}>Load shopcart</button>
			{renderRows(props)}
		</div>
	);
};

export default { render };
