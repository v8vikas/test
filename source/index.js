/** @jsx dom */ // We need this for all files containing JSX
import dom from 'magic-virtual-element';  // We need this for all files containing JSX
import {render, tree} from 'deku'; // Don't worry about this
import {storePlugin} from 'deku-redux'; // Don't worry about this
import {applyMiddleware, createStore} from 'redux'; // Don't worry about this
import {createLogger} from 'redux-logger'; // Don't worry about this
import App from './app'; // The main component
import reducer from './reducer'; // The main reducer for the redux state

// Don't worry about this. Just some logging to devtools for your convinience. Check out your browser dev tools
const reduxLogger = createLogger({
	collapsed: (getState, action, logEntry) => !logEntry.error,
	diff: true,
	duration: true
});

// Don't worry about this. Creates a redux store for the state
const reduxStore = createStore(reducer, applyMiddleware(reduxLogger));

// Create the initial Deku component and apply Redux to it
const app = tree(<App/>).use(storePlugin(reduxStore));

// Render the component to the browser
render(app, document.body);
