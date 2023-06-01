import './Faq_style.css'


const FAQ = ({data}) => {
    console.log(data)
    return(
        <div className='faq-container'>
            <div className='faq'>
                <h2>FAQ</h2>
                <div className='cards-list-info'>
                    {
                     data.cartInfo.map((item) => {
                         return(
                             <div className='card-info'>
                                 <div className='img-Faq'>
                                     <img src={item.img} alt="logo"/>
                                 </div>
                                 <div className='title-info'>
                                     <h2>{item.title}</h2>
                                     <p>{item.desc}</p>
                                 </div>
                             </div>
                         )
                     })   
                    }
                </div>
            </div>

        </div>
    )
}

export default FAQ;