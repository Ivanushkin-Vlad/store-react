import './Subscribe_style.css';

const Subscribe = () => {
    return(
        <div className='subscribe-container'>
            <div className='subscribe'>
                <div className='user-contact'>
                    <h3>User Contact</h3>
                    <h2>Contact Us for those interested.</h2>
                    <p>The standard chunk of Lorem Ipsum used since the is reproduced below for those interested.</p>
                </div>
                <div className='input-user'>
                    <div>
                        <input type="text" placeholder='Enter your email adress'/>
                        <button>SUBSCRIBE</button>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Subscribe;