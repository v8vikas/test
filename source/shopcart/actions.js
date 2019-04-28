// A dummy action for dispatching the action type `SHOPCART_FETCHED` with a payload of dummy articles
export const fetch = () => ({
	type: 'SHOPCART_FETCHED',
	payload: {
		// Dummy articles
		articles: [{
			id: 1,
			name: 'Dummy article 1',
			price: 5,
			quantity: 1
		}, {
			id: 2,
			name: 'Dummy article 2',
			price: 10,
			quantity: 2
		}]
	}
});
