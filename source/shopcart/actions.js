let articles = [{
	id: 1,
	name: 'Dummy article 1',
	price: 5,
	quantity: 1
}, {
	id: 2,
	name: 'Dummy article 2',
	price: 10,
	quantity: 2
}];

let incrementHit = 0, decrementHit = 0, timer;

// call the reset Method if you want to reset the count in some time interval.

// const resetHits = () => {
// 	if (timer) clearTimeout(timer);

// 	timer = setTimeout(() => {
// 		incrementHit = 0;
// 		decrementHit = 0;
// 		resetHits();
// 	}, 3000)
// }

export const decrease = (id) => {
	decrementHit++;
	articles = articles.map((article) => {
		if (article.id === id && ((decrementHit % 3) === 0)) {

			if (article.quantity - 3 < 0) {
				article.quantity = 0;
			} else {
				article.quantity = article.quantity - 3
			}

		} else if (article.id === id && article.quantity) {
			article.quantity = article.quantity - 1;
		}
		return article;

	})
	return {
		type: 'SHOPCART_FETCHED',
		payload: {
			articles
		}
	}
}

export const increase = (id) => {
	incrementHit++;
	articles = articles.map((article) => {

		if (article.id === id) {
			article.quantity = (incrementHit % 3) === 0 ? article.quantity + 3 : article.quantity + 1;
		}
		return article;
	})

	return {
		type: 'SHOPCART_FETCHED',
		payload: {
			articles
		}
	}
}

// A dummy action for dispatching the action type `SHOPCART_FETCHED` with a payload of dummy articles
export const fetch = () => ({
	type: 'SHOPCART_FETCHED',
	payload: {
		// Dummy articles
		articles: articles
	},
});
