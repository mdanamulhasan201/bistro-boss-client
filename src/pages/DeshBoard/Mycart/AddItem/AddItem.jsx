import SectionTitle from "../../../../components/sectionTitle/SectionTitle";


const AddItem = () => {
    return (
        <div className="w-full">
            <SectionTitle
                subHeading="What's New"
                heading="Add an Item"
            ></SectionTitle>

            <form>

                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text font-semibold">Recipe Name*</span>
                    </label>
                    <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Pick the best fantasy franchise</span>
                        <span className="label-text-alt">Alt label</span>
                    </label>
                    <select className="select select-bordered">
                        <option disabled selected>Pick one</option>
                        <option>Star Wars</option>
                        <option>Harry Potter</option>
                        <option>Lord of the Rings</option>
                        <option>Planet of the Apes</option>
                        <option>Star Trek</option>
                    </select>
                   
                </div>
            </form>
        </div>
    );
};

export default AddItem;