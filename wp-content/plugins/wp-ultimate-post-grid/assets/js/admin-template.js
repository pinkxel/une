if (!global._babelPolyfill) { require('babel-polyfill'); }
import ReactDOM from 'react-dom';
import React from 'react';
import App from './admin-template/App';

let appContainer = document.getElementById( 'wpupg-template' );

if (appContainer) {
	ReactDOM.render(
		<App/>,
		appContainer
	);
}