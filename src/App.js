import { useState } from 'react';
import './App.css';
import NewProduct from './components/NewProduct';
import ProductList from './components/ProductList';

function App() {
 
  const  [showProductList, setShowProductList] = useState(true);
  function addProductHandler(){
    setShowProductList(false)
  }
  return (
    <div>
      {showProductList && <ProductList/> } 
      {!showProductList && <NewProduct/> }
      <button  onClick = {addProductHandler}>Add Product</button>
    </div> 

  );
}

export default App;

// Product name, Product category, imageUrl, price, productId, and a add product button