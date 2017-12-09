import React, {Component} from 'react';
import {Link} from 'react-router-dom'

import Users from './containers/Users'
import Pizza from './containers/Pizza'
import asyncComponent from './hoc/asyncComponent'

//lazy lodaing
const AsyncPizza = asyncComponent(() => {
	return import('./containers/Pizza');
})

class App extends Component {
	render() {
		return (
			<div>
				<div>
					<Link to={'/'}>Users</Link>
					<Link to={'/pizza'}>Pizza</Link>
				</div>
				<div>
					<Route path={'/'} exact component={Users}/>
					<Route path={'/pizza'} component={AsyncPizza}/>
				</div>
			</div>
		);
	}
}


export default App;
