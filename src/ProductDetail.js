import axios from "axios";
import { useEffect, useState } from "react";
import Product from "./Product";


function ProductDetail(props) {

    const fetchProduct = async () => {
        let result = await axios.get('http://localhost:8080/api/v1/products/' + props.id);
        console.log(result.data);
        setProductDetailState(result.data)
    }

    useEffect(() => {
        fetchProduct();
    },[props.id])

    const [productDetailState, setProductDetailState] = useState();

    return (
      <Product name={productDetailState.name} price={productDetailState.price}></Product>
    )
}

export default ProductDetail;