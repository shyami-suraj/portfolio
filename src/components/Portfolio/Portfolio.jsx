import React from 'react'
import './Portfolio.css'
import portfolio from "../../img/portfolio.png"
import cakeshop from "../../img/cakeshopimg.png"
// import Ecommerce from "../../img/ecommerce.png"
import hotelkesu from "../../img/hotelkesu.png"
import gas from "../../img/gas.png"
import marcsolution from "../../img/marcsolution.png"
import{Swiper, SwiperSlide} from 'swiper/react'
import 'swiper/css'
import { themeContext } from '../../Context'
import { useContext } from "react";




const Portfolio = () => {
    const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    
    <div className="portfolio" id='Portfolio'>
        {/* heading */}
        <span style={{color:darkMode?'white':''}}>Recent project </span>
        <span>Porfolio</span>
        <Swiper
            spaceBetween={30}
            slidesPerView={3}
            grabCursor={true}
            className='portfolio-slider'
        >
           
            <SwiperSlide>
                <img src={portfolio} alt="" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={cakeshop  } alt="" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={hotelkesu} alt="" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={gas} alt="" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={marcsolution} alt="" style={} />
            </SwiperSlide>
        </Swiper>
    </div>
  )
} 

export default Portfolio