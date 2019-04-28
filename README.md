## Overview
This is an app that renders the component `Shopcart` and a button that, when clicked, loads some dummy articles into the redux state.

## Some files
```
index.html - Open this in your browser
source/index.js - The entry file that creates the Redux state and initilizes the `app` component. Don't worry too much about this
source/shopcart/actions.js - Contains functions that produce "redux actions"
source/shopcart/components/index.js - A shopcart component. Takes a `fetch` function and an `articles` array.
source/shopcart/index.js - Where we pass redux stuff as props into the shopcart component
source/shopcart/reducer.js - A function that is called when Redux initilizes and when dispatches are made
```

## How to run
1. Run `npm install`
2. Run `npm run build` to (re)build the javascript
3. Open `index.html` in your browser. You should se a heading and a button that shows 2 articles when pressed.

## Your mission
The customer wants a way to change the number of articles in the shopcart.
So you need to add two buttons for each article in the shopcart;
One that decreases the quantity by 1, and one that increases the quantity by 1.

Also, the customer has gone mad – each third click should increase/decrease the quantity by 3.

## Additional notes
- The code is written in ES6, that's why we use `babel`.
- We like code written in ES6 and prefer functional approaches.
- Feel free to style it! :)
- Note that files that has JSX in them needs to be prepended with these lines:

```js
/** @jsx dom */
import dom from 'magic-virtual-element';
```

