import React from "react";

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
	const Products = () => {



		return (
			<section>
				<h2 className= "title">Best Selling</h2>
				<div className="product-card">
					{productsArray.map((item) => <Product name={item.name} img={item.id} price={item.price}/>)}
	
	
				</div>
			</section>
		)
	}
}
	
	export default Products;