import { Helmet } from 'react-helmet-async';
import img from '../../assets/others/authentication2.png';
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2'

const Login = () => {

    const [disable, setDisable] = useState(true);
    const [error, setError] = useState()
    const { signIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/'
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();

    useEffect(() => {
        loadCaptchaEnginge(6);
    }, []);

    const handleLogin = (data) => {
        const { email, password } = data;

        signIn(email, password)
            .then((result) => {
                const user = result.user;
                console.log(user);
                reset(); // Reset the form fields after successful login
                Swal.fire({
                    title: 'User Login Successful',
                    showClass: {
                        popup: 'animate__animated animate__fadeInDown'
                    },
                    hideClass: {
                        popup: 'animate__animated animate__fadeOutUp'
                    }
                });
                navigate(from, {replace: true})
            })
            .catch((error) => {
                setError('Valid email and password', error);
            });
    };

    const handleValidateCaptcha = (e) => {
        const user_captcha_value = e.target.value;
        if (validateCaptcha(user_captcha_value)) {
            setDisable(false);
        } else {
            setDisable(true);
        }
    };

    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Login </title>
            </Helmet>
            <div className="hero  lg:mt-32 shadow-2xl md:p-8  bg-[image:var('../../assets/others/authentication.png')]">
                <div className="hero-content grid grid-cols-1 md:grid-cols-2">
                    <div className="text-center lg:text-left">
                        <img src={img} alt="" />
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm p-5 ">
                        <h1 className="text-3xl text-center font-bold">Login</h1>
                        <form onSubmit={handleSubmit(handleLogin)} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" {...register('email', { required: true })} placeholder="email" className="input input-bordered border-[#BB8506]" />
                                {errors.email && <p className="text-red-600 mt-2" role="alert">Email is required</p>}
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" {...register('password', { required: true })} placeholder="password" className="input input-bordered border-[#BB8506]" />
                                {errors.password && <p className="text-red-600 mt-2" role="alert">Password is required</p>}
                            </div>
                            <p className='text-red-700'>{error}</p>

                            <div className="form-control">
                                <label className="label">
                                    <LoadCanvasTemplate />
                                </label>
                                <input onBlur={handleValidateCaptcha} type="text" name="captcha" placeholder="Type here" className="input input-bordered border-[#BB8506]" />
                                {/* <button  className="btn btn-xs mt-3 text-[#BB8506]">Validate</button> */}
                            </div>

                            <div className="form-control mt-6">
                                <input disabled={disable} className="btn btn-outline text-[#BB8506] bg-slate-100 hover:border-[#BB8506] hover:text-[#BB8506] border-0 border-b-4" type="submit" value="Login" />
                            </div>
                        </form>
                        <p className="text-center">
                            <small>
                                New here? <Link to="/signUp"><span className="text-[#BB8506] font-bold">Create a New Account</span></Link>
                            </small>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
