import React from 'react';
import { Link } from 'react-router';

const HomePage = () => (
	<div>
		<div className="app-header">
			<div className="app-title">
				<h1>Welcome</h1>
				<h2>EMPLOYEE-MANAGER-PROJECT</h2>
				<h2>Application</h2>
			</div>
		</div>
		<Link className="app-title" to="/login">Login</Link>
	</div>
);

export default HomePage;
