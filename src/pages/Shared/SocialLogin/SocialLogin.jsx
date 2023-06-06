
import { useContext } from 'react';
import { FaGoogle } from 'react-icons/fa';
import { AuthContext } from '../../../Providers/AuthProvider';
import { useLocation, useNavigate } from 'react-router-dom';
// import Swal from 'sweetalert2';
import { useState } from 'react';

const SocialLogin = () => {
    const { googleSignIn } = useContext(AuthContext)
    const [error, setError] = useState()

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/'

    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                const loggedInUser = result.user;
                console.log(loggedInUser)

                const saveUser = { name: loggedInUser.displayName, email: loggedInUser.email }

                fetch('http://localhost:5000/users', {
                    method: "POST",
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(saveUser)
                })
                    .then(res => res.json())
                    .then( () => {
                        navigate(from, { replace: true })

                    })



                // Swal.fire({
                //     title: 'User Login Successful',
                //     showClass: {
                //         popup: 'animate__animated animate__fadeInDown'
                //     },
                //     hideClass: {
                //         popup: 'animate__animated animate__fadeOutUp'
                //     }
                // });

            })
            .catch((error) => {
                setError('Valid email and password', error);
            });
    }
    return (
        <div>
            <div className="divider"></div>
            <button onClick={handleGoogleSignIn} className="btn btn-circle btn-outline">
                <FaGoogle className='text-lg'></FaGoogle>
            </button>

        </div>
    );
};

export default SocialLogin;