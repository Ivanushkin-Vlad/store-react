import './Card_style.css';

const Card = (props) =>{
    console.log(props)
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
                <div>
                    <button>View product</button>
                </div>
            </div>
        </div>
    )
}

export default Card;