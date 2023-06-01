import './Header_style.css';
import {NavLink} from "react-router-dom";

const Header = ({data}) => {
    console.log(data)


    return(
        <div className='header-container'>
            <header>
                <div className='image-box'>
                    <img src={data.image} alt="logo"/>
                </div>
                <div className='nav-box'>
                    {
                        data.link.map((item) => {
                            return(
                                <NavLink to={item.path} key={item.id}>{item.name}</NavLink>
                            )
                        })
                    }
                </div>
                <div className='user-box'>
                    {
                        data.icons.map((el) => {
                            return(
                                <div className={el.classN}>
                                    <img src={el.img} alt='logo'/>
                                </div>
                            )
                        })
                    }
                </div>
            </header>

        </div>
    )
}

export default Header;