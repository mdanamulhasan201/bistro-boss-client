import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Providers/AuthProvider";

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.log(error))
    }

    const navOptions = <>
        <li><Link to='/'>OUR MENU</Link></li>
        <li><Link to='/contact'>CONTACT US</Link></li>
        <li><a>DASHBOARD</a></li>
        <li><Link to='/menu'>OUR MENU</Link></li>
        <li><Link to='/order/salad'>OUR SHOP</Link></li>
        <li><Link to='secret'>SECRET</Link></li>

        {
            user ?
                <>
                <span>{user?.displayName}</span>
                    <li onClick={handleLogOut}  className="items-center mr-2 cursor-pointer">LOGOUT</li>
                </> :
                <>
                    <li className="items-center mr-2"><Link to='/login'>LOGIN</Link></li>
                    <li className="items-center"><Link to='/signUp'>REGISTER</Link></li>


                </>
        }

    </>
    return (
        <div className="navbar fixed z-10 bg-opacity-20 max-w-screen-2xl mx-auto bg-black">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost text-white lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact font-bold dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {navOptions}
                    </ul>
                </div>
                <Link to='/' className="btn  btn-ghost normal-case text-white text-xl">Bistro Boss
                    {/* Restaurant */}
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu text-white menu-horizontal px-1 font-bold">
                    {navOptions}
                </ul>
            </div>
          
        </div>
    );
};

export default Navbar;