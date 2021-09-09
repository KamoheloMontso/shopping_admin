import { useRef } from 'react';


function NewProduct() {

  const productNameRef = useRef();
  const productIdRef = useRef();
  const priceRef = useRef();
  const imageUrlRef = useRef();
  const productCategoryRef = useRef();



  function addProductHandler(event){
    event.preventDefault();  
    
    const productName = productNameRef.current.value;
    const productId = productIdRef.current.value;
    const price = priceRef.current.value;
    const imageUrl = imageUrlRef.current.value;
    const productCategory = productCategoryRef.current.value;

    var products = JSON.parse(localStorage.getItem("products"));
    var product = {
      productName,
      productId,
      price,
      imageUrl,
      productCategory
    }

    if(products){
      products.push(product) 
    }else{
      products = [];
      products.push(product);
    }
   
    localStorage.setItem("products", JSON.stringify(products));
  
    //...
    
    // localstorage.names = JSON.stringify(names);
    // var storedNames = JSON.parse(localStorage.names);
  }
  return ( 

    <form>
      <div>
        <label htmlFor = 'productName'>Product Name</label>
        <input id='productName' type='text' ref={productNameRef}></input>
      </div>

      <div>
        <label htmlFor = 'productCategory'>Product category</label>
        <input id='productCategory' type='text' ref={productCategoryRef}></input>
      </div>

      <div>
        <label htmlFor = 'imageUrl'>imageUrl</label>
        <input id='imageUrl'  type='text' ref={imageUrlRef}></input>
      </div>

      <div>
        <label htmlFor = 'price'>price</label>
        <input id='price' type='text' ref={priceRef}></input>
      </div>

      <div>
        <label htmlFor = 'productId'>productId</label>
        <input id='productId' type='text' ref={productIdRef}></input>
      </div>

      <button  onClick = { addProductHandler}>Submit</button>
    </form>



  );
}

export default NewProduct;

// Product name, Product category, imageUrl, price, productId, and a add product button