
const FoodCard = ({ item }) => {
    const { name, image, price, recipe } = item;
    return (
        <div className="card w-[365px] bg-base-100 shadow-xl">
            <figure><img src={image} alt="Shoes" /></figure>
            <p className="bg-[#111827] text-white absolute mr-4 mt-4 px-5 py-1 right-0">${price}</p>
            <div className="card-body ">
                <h2 className="text-center text-xl font-bold ">{name}</h2>
                <p>{recipe}</p>
                <div className="card-actions justify-center">
                <button className="btn btn-outline mt-6 text-[#BB8506] bg-slate-100 hover:border-[#BB8506] hover:text-[#BB8506] border-0 border-b-4 ">Order Now</button>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;