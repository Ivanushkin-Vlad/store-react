import './Main_style.css';
import Home from "./Home/Home";
import {Route, Routes} from "react-router-dom";
import Product from "./Product/Product";
import TitleProduct from "./Product/TitleProduct/TitleProduct";


const  Main = ({data}) => {
    return(
        <div>
            <Routes>
                <Route path='/' element={<Home data = {data}/>}/>
                <Route path='/Product' element={<Product data = {data}/>}/>
                <Route path='/Product/:productId' element={<TitleProduct/>}/>

            </Routes>

        </div>
    )
}
export default Main;