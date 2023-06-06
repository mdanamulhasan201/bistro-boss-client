import { Helmet } from "react-helmet-async";
import { BiTrash } from "react-icons/bi";
import useCart from "../../../hooks/useCart";
// import SectionTitle from "../../../components/sectionTitle/SectionTitle";
import Swal from "sweetalert2";
import Total from "./Total";

const MyCart = () => {
    const [cart, refetch] = useCart();
   
    const handleDelete = item => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/carts/${item._id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            refetch();
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                        }
                    })
            }
        })
    }

    return (
        <div className="w-full">
            <div className="md:px-40">
               
                <Helmet>
                    <title>Bistro Boss | My Cart </title>
                </Helmet>
                
                <Total></Total>

                <div className="overflow-x-auto overflow-y-hidden  pt-8">
                    <table className="table w-full">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>ITEM IMAGE</th>
                                <th>ITEM NAME</th>
                                <th>PRICE</th>
                                <th>ACTION</th>
                            </tr>
                        </thead>
                        <tbody>
                            {cart.map((item, index) => (
                                <tr key={item._id}>
                                    <td className="sticky  left-0 bg-white">{index + 1}</td>
                                    <td>
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={item.image} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                    </td>
                                    <td>{item.name}</td>
                                    <td className="text-end">{item.price.toFixed(2)}</td>
                                    <td>
                                        <button onClick={() => handleDelete(item)} className="btn btn-ghost bg-[#B91C1C] btn-sm">
                                            <BiTrash className="text-xl text-white" />
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default MyCart;
