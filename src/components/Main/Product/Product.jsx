import './Product_style.css';


const Product = () => {
    return(
        <div className='products-container'>
            <div className='products'>
                <div className='filter-products'>
                    <div className='filter-category'>
                        <div className='category'>
                            <h2>Category:</h2>
                            <div>
                                <input type="checkbox" name='smartphones' id='1'/>
                                <label htmlFor="1">Smartphones</label>
                            </div>
                            <div>
                                <input type="checkbox" name='laptops' id='2'/>
                                <label htmlFor="2">Laptops</label>
                            </div>
                            <div>
                                <input type="checkbox" name="men's clothing" id='3'/>
                                <label htmlFor="3"></label>
                            </div>
                        </div>
                        <div className='price'>
                            <h2>Price:</h2>
                            <div>
                                <input type="checkbox" name="max" id='4'/>
                                <label htmlFor="4">maxprice</label>
                            </div>
                            <div>
                                <input type="checkbox" name="min" id='5'/>
                                <label htmlFor="5">minprice</label>
                            </div>
                        </div>



                    </div>
                </div>
                <div className='card-products'>
                    sdfsdf
                </div>
            </div>
        </div>
    )
}

export default Product;