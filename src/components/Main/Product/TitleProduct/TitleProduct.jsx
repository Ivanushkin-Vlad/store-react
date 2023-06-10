import './TitleProduct_style.css';
import {useNavigate, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";


const TitleProduct = (props) => {
    let [product, setProduct] = useState({});
    let {productId} = useParams();
    useEffect(() => {
        axios.get(`https://fakestoreapi.com/products/${productId}`)
            .then(response => {
                setProduct(response.data)
            })
    });
    const navigate = useNavigate();
    const BackHandler = () => {
        navigate(`/Product`);
    }
    console.log(product)
    return(
        <div className='container-card-title'>
            <button onClick={BackHandler} className='btn-handler'>Back</button>
            <div className='container-card'>
                <img src={product.image} alt="product"/>
                <div className='title-product-div'>
                    <h2>{product.title}</h2>
                    <h3>Price: {product.price}$</h3>
                    <h4>Category: {product.category}</h4>
                    <p>{product.description}</p>
                    <button className='btn-basket'>add Basket</button>
                </div>
            </div>
        </div>
    )
}

export default TitleProduct;