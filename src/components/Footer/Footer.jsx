import './Footer_style.css';

const Footer = ({data}) => {
    console.log(data)
    return (
        <div className='footer-container'>
            <footer>
                <div className='logo-footer-box'>
                    <div className='logo-footer'>
                        <img src={data.logoBox.img} alt="logo"/>
                    </div>
                    <div className='description-footer'>
                        <p>{data.logoBox.description}</p>
                    </div>
                </div>
                {
                    data.informationMenu.map((item) => {
                        return (
                            <div key={item.id} className='information-menu'>
                                <div>
                                    <h2>{item.name}</h2>
                                </div>
                                <div>
                                    {
                                        item.link.map((el) => {
                                            return(
                                                <div className='block-info'>{el}</div>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                        )
                    })
                }
                <div className='the-store'>
                    <div className='about-footer'>
                        <h2>{data.aboutTheStore.name}</h2>
                    </div>
                    <div className='description-about'>
                        <p>{data.aboutTheStore.description}</p>
                    </div>
                    <div>
                        <p>{data.aboutTheStore.website}</p>
                    </div>
                    <div className='icons-sociable'>
                        {
                            data.aboutTheStore.icons.map((element) => {
                                return(
                                    <img src={element} alt="logo"/>
                                )
                            })
                        }
                    </div>
                    <div className="lang">
                        <img src={data.aboutTheStore.languare} alt="logo"/>
                    </div>
                </div>

            </footer>
        </div>
    )
}

export default Footer;