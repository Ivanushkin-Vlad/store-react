import './Card_style.css';
import {useNavigate} from "react-router-dom";

const Card = (props) =>{
    console.log(props)
    let navigate = useNavigate()

    let titleProductView = (id) => {

        navigate(`/Product/${id}`)

    }
    return(
        <div className='card-container'>
            <div className='card-image'>
                <img src={props.img} alt="logo"/>
            </div>
            <div className='card-description'>
                <div className='card-title'>
                    <h2>{props.title}</h2>
                    <h3>{props.price}$</h3>
                </div>
                <div className='btn-container-view'>
                    <button onClick={()=>{titleProductView(props.id)}} className='btn-view'>View product</button>
                </div>
            </div>
        </div>
    )
}

export default Card;