import './Main_style.css';
import Home from "./Home/Home";
import {Route, Routes} from "react-router-dom";
import Product from "./Product/Product";


const  Main = ({data}) => {
    return(
        <div>
            <Routes>
                <Route path='/' element={<Home data = {data}/>}/>
                <Route path='/Product' element={<Product data = {data}/>}/>

            </Routes>

        </div>
    )
}
export default Main;