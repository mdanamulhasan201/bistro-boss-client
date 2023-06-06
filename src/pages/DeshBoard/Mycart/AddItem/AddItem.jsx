import SectionTitle from "../../../../components/sectionTitle/SectionTitle";
import { useForm } from 'react-hook-form';
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";


const image_hosting_token = import.meta.env.VITE_Image_Upload_token;
console.log(image_hosting_token)

const AddItem = () => {
    const [axiosSecure] = useAxiosSecure()
    const { register, handleSubmit, reset } = useForm();
    const img_hosting_url = `https://api.imgbb.com/1/upload?key=${image_hosting_token}`

    const onSubmit = data => {
        const formData = new FormData();
        formData.append('image', data.image[0])
        fetch(img_hosting_url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imgResponsive => {
                if (imgResponsive.success) {
                    const imgURL = imgResponsive.data.display_url
                    const { name, price, category, recipe } = data;
                    const newItem = {name, price: parseFloat(price), category, recipe, image: imgURL}
                    console.log(newItem)
                    axiosSecure.post('/menu', newItem)
                    .then(data => {
                        console.log('after posting new menu items', data.data)
                        if(data.data.insertedId){
                            reset();
                            
                            Swal.fire({
                                position: 'top-center',
                                icon: 'success',
                                title: 'Item added successfully',
                                showConfirmButton: false,
                                timer: 1500
                              })
                        }
                    })
                }
            })
    };
  
    return (
        <div className="w-full mx-auto px-10 ms-10 bg-slate-100">
            <SectionTitle
                subHeading="What's New"
                heading="Add an Item"
            ></SectionTitle>

            <form onSubmit={handleSubmit(onSubmit)} className="p-5 md:w-[992px] mx-auto">

                <div className="form-control w-full mb-5">
                    <label className="label">
                        <span className="label-text font-bold">Recipe Name*</span>
                    </label>
                    <input type="text" placeholder="Recipe Name" className="input input-bordered w-full "  {...register("name", { required: true, maxLength: 120 })} />
                </div>


                <div className="flex gap-5">

                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text font-bold">Category*</span>

                        </label>
                        <select defaultValue='Pick One' {...register("category", { required: true })} className="select select-bordered">
                            <option disabled>Pick One</option>
                            <option>Pizza</option>
                            <option>Soup</option>
                            <option>Salad</option>
                            <option>Dessert</option>
                            <option>Drinks</option>

                        </select>

                    </div>


                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text font-bold">Price*</span>
                        </label>
                        <input type="number" placeholder="price" {...register("price", { required: true })} className="input input-bordered w-full " />
                    </div>
                </div>



                <div className="form-control mt-5">
                    <label className="label">
                        <span className="label-text font-bold">Recipe Details*</span>

                    </label>
                    <textarea {...register("recipe", { required: true })} className="textarea textarea-bordered h-72" placeholder="Recipe Details"></textarea>

                </div>


                <div className="form-control w-full mt-5">
                    <label className="label">
                        <span className="label-text font-bold">Item Image*</span>

                    </label>
                    <input  {...register("image", { required: true })} type="file" className="file-input file-input-bordered w-full max-w-xs" />

                </div>

                <input className="btn btn-outline mt-4 text-[#BB8506]  bg-slate-200 hover:border-[#BB8506] hover:text-[#BB8506] border-0 border-b-4" type="submit" value="Add Item" />

            </form>
        </div>
    );
};

export default AddItem;