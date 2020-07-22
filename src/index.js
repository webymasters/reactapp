import React from "react";
import ReactDOM from "react-dom";
import Greeting from "./js/components/Greeting";
import './css/index.css';

// const App = () => {
// 	return <Greeting name="World" />
// }

//ReactDOM.render(<App />, document.getElementById('root'));

const App = () => {
	
	// Fetch all the users from the database
	// Returns with X users
	const productsArray = [
		{id: 1, name: 'iPhone X', price: '899$'},
		{id: 2, name: 'iPhone 8', price: '699$'},
        {id: 3, name: 'iPhone 11', price: '999$'},
        {id: 4, name: 'iPhone Pro Max', price: '1199$'},
		{id: 5, name: 'Apple Watch', price: '499$'}
	]

	// The return is your view
	return (
		<>
			{/* This is an example comment */}
			<Header />
			<GreetingMachine data={productsArray} />
			<Footer />
		</>
	)
}

ReactDOM.render(<App />, document.getElementById('application'))