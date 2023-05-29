import SectionTitle from "../../../../components/sectionTitle/SectionTitle";
import img from '../../../../assets/home/slide1.jpg'

const CheRecommend = () => {
    return (
        <section>
            <SectionTitle
                heading={'CHEF RECOMMENDS'}
                subHeading={'Should Try'}
            ></SectionTitle>

            <div className="grid grid-cols-1 md:grid-cols-3 mb-10 p-2 gap-5">
                <div className="md:w-[420px] mx-auto bg-[#F3F3F3]">
                    <figure><img src={img} className="w-[424px] h-[300px]" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Shoes!</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="card-actions justify-center">
                            <button className="btn btn-outline text-[#BB8506] hover:text-[#BB8506] border-0 border-b-4 ">Add to Cart</button>
                        </div>
                    </div>
                </div>
                <div className="md:w-[420px] mx-auto bg-[#F3F3F3]">
                    <figure><img src={img} className="w-[424px] h-[300px]" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Shoes!</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="card-actions justify-center">
                            <button className="btn btn-outline text-[#BB8506] hover:text-[#BB8506] border-0 border-b-4 ">Add to Cart</button>
                        </div>
                    </div>
                </div>
                <div className="md:w-[420px] mx-auto bg-[#F3F3F3]">
                    <figure><img src={img} className="w-[424px] h-[300px]" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Shoes!</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="card-actions justify-center">
                            <button className="btn btn-outline text-[#BB8506] hover:text-[#BB8506] border-0 border-b-4 ">Add to Cart</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CheRecommend;