import ProductItem from "./ProductItem";

function ProductList(){
   
    var products = JSON.parse(localStorage.getItem("products"));

    
    return (
        <div>
            { products && 
                <ul>
                    {products.map((product)=>(
                        <ProductItem key={product.productId}
                            productName = {product.productName}
                            price = {product.price}
                            imageUrl = {product.imageUrl}
                        />
                    ))}
                
                </ul>
            }
            { !products && 
              <div>No products found !!!</div>
            }
        </div>
        
        
    )
}

export default ProductList;