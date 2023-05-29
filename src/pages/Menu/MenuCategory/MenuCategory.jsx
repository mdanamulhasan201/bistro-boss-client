import { Link } from "react-router-dom";
import Cover from "../../Shared/Cover/Cover";
import MenuItems from "../../Shared/MenuItems/MenuItems";

const MenuCategory = ({ items, title, img }) => {
    return (
        <div className="">
            {title && <Cover img={img} title={title}></Cover>}
            <div className="grid md:grid-cols-2 p-2 mt-16 gap-10">
                {
                    items.map(item => <MenuItems key={item._id}
                        item={item}
                    ></MenuItems>)
                }

            </div>
            <Link to={`/order/${title}`}>
                <div className="flex  justify-center my-16">
                     <button className="btn btn-outline  text-[#BB8506] bg-slate-100 hover:border-[#BB8506] hover:text-[#BB8506] border-0 border-b-4 ">ORDER YOUR FAVOURITE FOOD</button></div>
            </Link>
        </div>
    );
};

export default MenuCategory;