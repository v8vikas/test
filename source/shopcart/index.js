import {connect} from 'deku-redux';
import {fetch} from './actions';
import Component from './components';

// Connect "Component" to the redux state
export default connect(
	state => ({
		articles: state.shopcart.articles
	}),
	dispatch => ({
		// Creates an action and dispatch it it so it can be caught by a reducer
		fetch: () => dispatch(fetch())
	})
)(Component);

