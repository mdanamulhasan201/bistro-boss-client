import SectionTitle from "../../../components/sectionTitle/SectionTitle";
import featuredImg from '../../../assets/home/featured.jpg';
import  './Featured.css'

const Featured = () => {
    return (
        <div className="mt-28 featured-item bg-fixed text-white pt-8">
            <SectionTitle
                heading={'FROM OUR MENU'}
                subHeading={'Check it out'}
            ></SectionTitle>
            <div className="md:flex justify-center items-center md:pb-20 md:pt-12 md:px-36 p-5">
                <div>
                    <img src={featuredImg} alt="" />
                </div>
                <div className="md:ml-10 ">
                    <p className="text-xl">March 20, 2023</p>
                    <p className="uppercase text-xl">WHERE CAN I GET SOME?</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.</p>
                    <button className="btn btn-outline mt-6 text-white border-0 border-b-4 ">Order Now</button>
                </div>
            </div>
        </div>
    );
};

export default Featured;