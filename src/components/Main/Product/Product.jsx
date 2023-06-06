import './Product_style.css';
import {useEffect, useState} from "react";
import axios from "axios";
import Card from "./Card/Card";
import iconGoods from '../../../assets/icon_plus_goods.png'


const Product = () => {
    const [filCategory, setFilCategory] = useState(undefined);
    const [product, setProduct] = useState([]);
    const [price, setPrice] = useState(undefined);
    const [sliceProd, setSliceProd] = useState(9);


    useEffect(() => {
        axios('https://fakestoreapi.com/products')
            .then(response => setProduct(response.data))

    }, [])

    let filterCategory = (e) => {
        let flag = e.target;
        if (flag.checked) {
            setFilCategory(flag.name);
        } else {
            setFilCategory(undefined)
        }
    }
    let filterPrice = (e) => {
        if (e.target.checked){
            setPrice(e.target.name)
        }
        else {
            setPrice(undefined)
        }

    }

    let filteredProduct = filCategory ? product.slice(0, sliceProd).filter((item) => item.category === filCategory) : product.slice(0, sliceProd);

    filteredProduct = price ? filteredProduct.slice(0, sliceProd).sort((a, b) => {
        return price === 'max'? b.price - a.price:a.price - b.price
    }) : filteredProduct.slice(0, sliceProd);

    return (
        <div className='products-container'>
            <div className='products'>
                <div className='filter-products'>
                    <div className='filter-category'>
                        <div className='category' onClick={filterCategory}>
                            <h2>Brand:</h2>
                            <div>
                                <input type="checkbox" name='electronics' id='1'/>
                                <label htmlFor="1">Electronics</label>
                            </div>
                            <div>
                                <input type="checkbox" name='jewelery' id='2'/>
                                <label htmlFor="2">Jewelery</label>
                            </div>
                            <div>
                                <input type="checkbox" name="men's clothing" id='3'/>
                                <label htmlFor="3">Men's clothing</label>
                            </div>
                            <div>
                                <input type="checkbox" name="women's clothing" id='3'/>
                                <label htmlFor="3">Women's clothing</label>
                            </div>
                        </div>
                        <div className='price' onClick={filterPrice}>
                            <h2>Price:</h2>
                            <div>
                                <input type="checkbox" name="max" id='4'/>
                                <label htmlFor="4">MaxPrice</label>
                            </div>
                            <div>
                                <input type="checkbox" name="min" id='5'/>
                                <label htmlFor="5">MinPrice</label>
                            </div>
                        </div>

                    </div>
                </div>
                <div className='cards-products'>
                    <div className='card-product'>
                        {
                            filteredProduct.map((item) => {
                                return (
                                    <Card title={item.title} img={item.image} price={item.price}
                                          category={item.category} rewievs={item.rating}/>
                                )
                            })
                        }
                    </div>
                    <div className='icon-goods'>
                        <img src={iconGoods} alt="logo" onClick={() => {setSliceProd(sliceProd + 3)}}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Product;