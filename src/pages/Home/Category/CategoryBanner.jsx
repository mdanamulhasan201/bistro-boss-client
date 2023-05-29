import img from '../../../assets/home/chef-service.jpg'

const CategoryBanner = () => {
    return (

        <div className="hero mx-auto h-48 md:h-[572px] md:max-w-screen-2xl mb-10 p-2">
            <div className="hero-overlay  bg-opacity-60">
                <img className='md:h-[572px] h-full' src={img} alt="" />
            </div>
            <div className="hero-content text-center text-neutral-content h-36  bg-white w-72 md:w-[1096px] md:h-[333px]">
                <div className="max-w-md">
                    <h1 className=" md:text-4xl text-xl uppercase font-[Cinzel] text-black">Bistro Boss</h1>
                    <p className="md:mt-5 text-[#151515]">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    
                </div>
            </div>
        </div>
    );
};

export default CategoryBanner;