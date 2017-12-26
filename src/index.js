import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Blog from './Blog';
import registerServiceWorker from './registerServiceWorker';

import { BrowserRouter as Router, Route, Link} from 'react-router-dom';

import { render } from 'react-dom';


ReactDOM.render(
	<Router>
	
	<div>
		<ul>
			<li><Link to="/">Home</Link></li>

			<li><Link to="/about">About</Link></li>
		</ul>

		<hr/>

		<Route exact path="/" component={Home}/>

		<Route exact path="/about" component={About}/>

	</div>
	
	</Router>
	,
	document.getElementById('root'));

registerServiceWorker();
