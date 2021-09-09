function ProductItem(props){

    // var product = {
    //     productName,
    //     productId,
    //     price,
    //     imageUrl,
    //     productCategory
    //   }
    return (
        
        <li>
            <div><img src={props.imageUrl } alt = {props.productName} /></div>
            <div>{props.productName}</div>
            <div>{props.price}</div>
        </li>

    )
}

export default ProductItem;