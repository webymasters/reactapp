import React from "react";
import ReactDOM from "react-dom";
import Greeting from "./js/components/Greeting";
import ProductList from "./components/productList";
import './css/index.css';

const App = () => {
	return (
    < >
  <Header/>
 
   <ProductList/> 
  
  <Footer/>
  </>
  )
}

ReactDOM.render(<App />, document.getElementById('application'));