import './Home.css';
import main from "../Main";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../../../App.css";
import { Autoplay, Pagination, Navigation } from "swiper";
import FAQ from "./FAQ/FAQ";
import Subscribe from "./Subscribe/Subscribe";
import {NavLink} from "react-router-dom";

const Home = ({data}) => {
    console.log(data.listSlider.items)
    return(
        <div className='home-container'>
            <div className='home'>
                <div className="main_slider slider">
                    <>
                        <Swiper
                            spaceBetween={30}
                            centeredSlides={true}
                            autoplay={{
                                delay: 3500,
                                disableOnInteraction: false,
                            }}
                            pagination={{
                                clickable: true,
                            }}
                            navigation={true}
                            modules={[Autoplay, Pagination, Navigation]}
                            className="mySwiper"
                        >
                            {data.listSlider.items.map(slide =>{
                                return (
                                    <SwiperSlide>
                                        <div className="slider__container" key={slide.id} >
                                            <div className="slider__titleBox">
                                                <h1 className="slider__title">
                                                    {slide.title}<span> {slide.description}</span>
                                                </h1>
                                                <button className="slider_btn" type="button">
                                                    <NavLink to='/Product'>{slide.button}</NavLink>
                                                    <span> <FontAwesomeIcon icon={faArrowRight}/></span>
                                                </button>
                                            </div>
                                            <div className="slider_imgBox">
                                                <img
                                                    src={slide.image}
                                                    alt={slide.name}
                                                />
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                )
                            })}
                        </Swiper>
                    </>
                    <FAQ data = {data.FAQ}/>
                </div>
            </div>

            <Subscribe/>
        </div>
    );
}

export default Home;