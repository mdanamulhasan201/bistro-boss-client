import SectionTitle from "../../../../components/sectionTitle/SectionTitle";



const AddItem = () => {
    return (
        <div className="w-full mx-auto px-10 bg-slate-100">
            <SectionTitle
                subHeading="What's New"
                heading="Add an Item"
            ></SectionTitle>

            <form className="p-5 md:w-[992px] mx-auto">

                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text font-bold">Recipe Name*</span>
                    </label>
                    <input type="text" placeholder="Recipe Name" className="input input-bordered w-full max-w-xs" />
                </div>


                <div className="flex gap-5">

                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text font-bold">Category*</span>

                        </label>
                        <select className="select select-bordered">
                            <option disabled selected>Category</option>
                            <option>Pizza</option>
                            <option>Soup</option>
                            <option>Salad</option>
                            <option>Dessert</option>
                            <option>Drinks</option>

                        </select>

                    </div>


                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text font-bold">Price*</span>
                        </label>
                        <input type="number" placeholder="price" className="input input-bordered w-full max-w-xs" />
                    </div>
                </div>



                <div className="form-control">
                    <label className="label">
                        <span className="label-text font-bold">Recipe Details*</span>

                    </label>
                    <textarea className="textarea textarea-bordered h-72 md:w-[892px]" placeholder="Recipe Details"></textarea>

                </div>

                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text font-bold">Item Image*</span>

                    </label>
                    <input type="file" className="file-input file-input-bordered w-full max-w-xs" />

                </div>

                <input className="btn btn-outline mt-4 text-[#BB8506] bg-slate-100 hover:border-[#BB8506] hover:text-[#BB8506] border-0 border-b-4" type="submit" value="Add Item" />

            </form>
        </div>
    );
};

export default AddItem;