import { NavLink, Outlet } from "react-router-dom";
import { FaShoppingCart, FaUtensils, FaCalendarAlt, FaSitemap, FaBook, FaUsers } from 'react-icons/fa';
import { GiWallet } from "react-icons/gi";
import { AiFillHome, AiTwotoneShopping } from "react-icons/ai";
import { FiMenu } from "react-icons/fi";
import { MdMessage } from "react-icons/md";
import { Helmet } from "react-helmet-async";
import useCart from "../hooks/useCart";
import useAdmin from "../hooks/useAdmin";


const DeshBorad = () => {
    const [cart] = useCart()
    // TODO: load data from the server to have dynamic is Admin base on data
    // const isAdmin = true;
    const [isAdmin] = useAdmin()

    return (

        <div>
            <Helmet>
                <title>Bistro Boss | DashBoard </title>
            </Helmet>

            <div className="drawer drawer-mobile">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col items-center justify-center">
                    <Outlet></Outlet>
                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 bg-[#D1A054] text-base-content">


                        {
                            isAdmin ? <>
                                <li><NavLink to='/deshboard/adminhome'> <AiFillHome className="text-2xl"></AiFillHome> Admin Home </NavLink></li>
                                <li><NavLink to='/deshboard/addItem'> <FaUtensils className="text-2xl"></FaUtensils> Add Items </NavLink></li>
                                <li><NavLink to='/deshboard/manageitems'> <FaSitemap className="text-2xl"></FaSitemap> Manage Items </NavLink></li>
                                <li><NavLink to='/deshboard/booking'> <FaBook className="text-2xl"></FaBook> Manage Booking </NavLink></li>
                                <li><NavLink to='/deshboard/allusers'> <FaUsers className="text-2xl"></FaUsers> All Users </NavLink></li>


                            </> : <>
                                <li><NavLink to='/deshboard/home'> <AiFillHome className="text-2xl"></AiFillHome> HOME </NavLink></li>
                                <li><NavLink to='/deshboard/reservation'> <FaCalendarAlt className="text-2xl"></FaCalendarAlt> RESERVATION </NavLink></li>
                                <li><NavLink to='/deshboard/payment'> <GiWallet className="text-2xl"></GiWallet> PAYMENT HISTORY </NavLink></li>
                                <li>
                                    <NavLink to='/deshboard/mycart'><FaShoppingCart className="text-2xl"></FaShoppingCart>MY CART
                                        <div className="badge badge-secondary">+{cart?.length || 0}</div>
                                    </NavLink>

                                </li>
                            </>
                        }



                        <div className="divider"></div>
                        <li><NavLink to='/'> <AiFillHome className="text-2xl"></AiFillHome> HOME </NavLink></li>
                        <li><NavLink to='/deshboard/menu'> <FiMenu className="text-2xl"></FiMenu> MENU </NavLink></li>
                        <li><NavLink to='/order/salad'> <AiTwotoneShopping className="text-2xl"></AiTwotoneShopping> SHOP </NavLink></li>
                        <li><NavLink to='/contact'> <MdMessage className="text-2xl"></MdMessage> CONTACT US</NavLink></li>
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default DeshBorad;