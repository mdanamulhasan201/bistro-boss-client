import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";

import slider1 from '../../../assets/home/slide1.jpg'
import slider2 from '../../../assets/home/slide2.jpg'
import slider3 from '../../../assets/home/slide3.jpg'
import slider4 from '../../../assets/home/slide4.jpg'
import slider5 from '../../../assets/home/slide5.jpg'
import SectionTitle from "../../../components/sectionTitle/SectionTitle";
import CategoryBanner from "./CategoryBanner";


const Category = () => {
    return (
        <section className="mt-20 mb-24">

            <SectionTitle
                subHeading={"From 11.00am to 10.00pm"}
                heading={"ORDER ONLINE"}
            ></SectionTitle>

            <Swiper
                slidesPerView={4}
                spaceBetween={30}
                centeredSlides={true}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper mb-14"
            >
                <SwiperSlide className="mb-20 ">
                    <img src={slider1} alt="" />
                    <h3 className="text-2xl text-center text-white  -mt-16 uppercase">Salads</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slider2} alt="" />
                    <h3 className="text-2xl text-white  text-center -mt-16 uppercase">Soups</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slider3} alt="" />
                    <h3 className="text-2xl text-white text-center -mt-16 uppercase">pizzas</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slider4} alt="" />
                    <h3 className="text-2xl text-white  text-center -mt-16 uppercase">desserts</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slider5} alt="" />
                    <h3 className="text-2xl text-white  text-center -mt-16 uppercase">Salads</h3>
                </SwiperSlide>
            </Swiper>
            
            <CategoryBanner></CategoryBanner>
        </section>
    );
};

export default Category;