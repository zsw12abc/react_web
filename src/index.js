import React, {Component} from 'react';
import ReactDom from 'react-dom'
import {BrowserRouter} from 'react-router-dom'
import classes from './index.css';
import App from './App'

const app = (
	<BrowserRouter>
		<App/>
	</BrowserRouter>
);

ReactDom.render(app, document.getElementById('root'));