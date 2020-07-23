import React from "react";
import Product from "./product"
import img1 from "../../imgs/1.jpg"
import img2 from "../../imgs/2.jpg"
import img3 from "../../imgs/3.jpg"
import img4 from "../../imgs/4.jpg"
import img5 from "../../imgs/5.jpg"


// const App = () => {
	
	// Fetch all the users from the database
	// Returns with X users
	const productsArray = [
		{id: 1, name: 'iPhone X', price: '899$',img:img1},
		{id: 2, name: 'iPhone 8', price: '699$',img:img2},
        {id: 3, name: 'iPhone 11', price: '999$',img:img3},
        {id: 4, name: 'iPhone Pro Max', price: '1199$',img:img4},
		{id: 5, name: 'Apple Watch', price: '499$',img:img5}
	]

	// The return is your view
	const Products = () => {



		return (
			<section>
				<h2 className= "title">Best Selling</h2>
				<div className="product-card">
					{productsArray.map((item) => <Product id={item.id} name={item.name} img={item.img} price={item.price}/>)}
	
	
				</div>
			</section>
		)
	}

	
	export default Products;