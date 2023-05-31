import { Helmet } from "react-helmet-async";
import img from '../../assets/others/authentication2.png'
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import Swal from "sweetalert2";



const SignUp = () => {

    const { createUser, updateUserProfile } = useContext(AuthContext)
    const { register, handleSubmit, formState: { errors }, setValue } = useForm();
    const navigate = useNavigate();

    const onSubmit = data => {
        console.log(data)
        resetFields();
        createUser(data.email, data.password)
            .then(result => {
                const loggedUser = result.user
                console.log(loggedUser)
                updateUserProfile(data.name, data.photoURL)
                    .then(() => {
                        console.log('user profile info updated ')
                        Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: 'User created successfully',
                            showConfirmButton: false,
                            timer: 1500
                        });
                        navigate('/')
                    })
                    .catch(error => console.log(error))
            })

    };

    const resetFields = () => {
        setValue("name", "");
        setValue("email", "");
        setValue("password", "");
        setValue("photo", "");
    };

    return (
        <div>
            <Helmet>
                <title>Bistro Boss | SignUp </title>
            </Helmet>
            <div className="hero lg:mt-12 shadow-2xl md:p-8  bg-[image:var('../../assets/others/authentication.png')]">
                <div className="hero-content grid grid-cols-1 md:grid-cols-2">
                    <div className="card flex-shrink-0 w-full max-w-sm p-5 ">
                        <h1 className="text-3xl text-center font-bold">Sign Up</h1>
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body">

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" {...register("name", { required: true, pattern: /[A-Za-z]+$/ })} name="name" placeholder="Name" className="input input-bordered border-[#BB8506]" />

                                {errors.name?.type === 'pattern' && <p className="text-red-600 mt-2" role="alert">Type Letters Only</p>}
                                {errors.name?.type === 'required' && <p className="text-red-600 mt-2" role="alert">Name is required</p>}
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input type="text" {...register("photo", { required: true })} name="photo" placeholder="Photo URL" className="input input-bordered border-[#BB8506]" />

                                {errors.photo?.type === 'required' && <p className="text-red-600 mt-2" role="alert">Photo URL is required</p>}

                            </div>


                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" {...register("email", { required: true })} name="email" placeholder="Email" className="input input-bordered border-[#BB8506]" />
                                {errors.email?.type === 'required' && <p className="text-red-600 mt-2" role="alert">Email is required</p>}
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" {...register("password",
                                    {
                                        required: true,
                                        minLength: 6,
                                        maxLength: 15,
                                        pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/

                                    })}
                                    name="password" placeholder="Password" className="input input-bordered border-[#BB8506]" />
                                {errors.password?.type === 'required' && <p className="text-red-600 mt-2" role="alert">Password is required</p>}
                                {errors.password?.type === 'minLength' && <p className="text-red-600 mt-2" role="alert">Password must be 6 characters</p>}
                                {errors.password?.type === 'maxLength' && <p className="text-red-600 mt-2" role="alert">Password must be less then 15 characters</p>}

                                {errors.password?.type === 'pattern' && <p className="text-red-600 mt-2" role="alert">Password must one upper case, one lower case, one number, and one special characters </p>}

                            </div>



                            <div className="form-control mt-6">
                                <input className="btn btn-outline  text-[#BB8506] bg-slate-100 hover:border-[#BB8506] hover:text-[#BB8506] border-0 border-b-4 " type="submit" value="Sign Up" />
                            </div>
                        </form>
                        <p className='text-center'><small>Already registered? <Link to='/login'> <span className='text-[#BB8506] font-bold'>Go to log in</span> </Link> </small></p>
                    </div>
                    <div className="text-center lg:text-left">

                        <img src={img} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;