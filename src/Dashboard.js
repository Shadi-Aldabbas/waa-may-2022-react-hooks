import axios from "axios";
import { useEffect, useState } from "react";
import Product from "./Product";
import './App.css';
import NewProduct from "./NewProduct";
import ProductDetail from "./ProductDetail";


function Dashboard(props) {


    const [productState, setProductState] = useState([
        { id: 1, name: 'a', price: 100 },
        { id: 2, name: 'b', price: 200 }
    ])

    const [newProductState, setNewProductState] = useState({ name: '', price: 0 });

    const onFieldsChanged = (event) => {
        let copy = { ...newProductState };
        copy[event.target.name] = event.target.value;
        setNewProductState(copy);
    }

    const saveButtonClicked = async () => {
        await axios.post('http://localhost:8080/api/v1/products', newProductState);
        fetchProducts();
    }

    const fetchProducts = async () => {
        const result = await axios.get('http://localhost:8080/api/v1/products')
        setProductState(result.data)
    }

    useEffect(() => {
        fetchProducts();
    }, [])

    const [selectedProductState, setSelectedProductState] = useState(0);

    const divClicked = (id)=>{
            setSelectedProductState(id);
    }

    return (
        <>
            <div>
                My Dashboard
            </div>

            {
                productState.map(item => {
                    return (
                        <div onClick={()=>{divClicked(item.id)}}>
                            <Product
                                key={item.id}
                                name={item.name}
                                price={item.price}
                            ></Product>
                        </div>
                    )
                })
            }

            <NewProduct
                n={newProductState.name}
                p={newProductState.price}
                onFieldsChanged={onFieldsChanged}
                onSave={saveButtonClicked}
            >

            </NewProduct>

            <div> Product Detail</div>

            <ProductDetail id= {selectedProductState}></ProductDetail>


            <h1>{selectedProductState}</h1>

        </>
    )
}

export default Dashboard;