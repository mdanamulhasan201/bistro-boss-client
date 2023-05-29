import SectionTitle from "../../../components/sectionTitle/SectionTitle";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import { useEffect, useState } from "react";
import { Rating } from "@smastrom/react-rating";
import '@smastrom/react-rating/style.css'
import img from '../../../assets/quote.png'

const Testimonials = () => {
    const [reviews, setReviews] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/reviews')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    return (
        <section className="my-20">
            <SectionTitle
                heading={'TESTIMONIALS'}
                subHeading={'What Our Clients Say'}
            ></SectionTitle>



            {/* swiper */}

            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">

                {
                    reviews.map(review => <SwiperSlide
                        key={review._id}
                    >
                        <div className="flex flex-col items-center my-16 md:mx-72 mx-14 text-center">
                            <Rating

                                style={{ maxWidth: 180 }}
                                value={review.rating}
                                readOnly
                            />
                            <img className="w-20 h-20 my-5" src={img} alt="" />
                            <p>{review.details}</p>
                            <h3 className="text-2xl font-bold text-[#CD9003]">{review.name}</h3>
                        </div>

                    </SwiperSlide>)
                }

            </Swiper>
        </section>
    );
};

export default Testimonials;