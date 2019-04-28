import {combineReducers} from 'redux';
import shopcart from './shopcart/reducer';

// Take reducers from other components and merge them into the redux state
export default combineReducers({
	shopcart
});
