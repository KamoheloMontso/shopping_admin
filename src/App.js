import { useRef } from 'react';
import './App.css';
import NewProduct from './components/NewProduct';
import ProductList from './components/ProductList';

function App() {

  return (
    <div>
      <NewProduct/>
      <ProductList/>
    </div> 

  );
}

export default App;

// Product name, Product category, imageUrl, price, productId, and a add product button