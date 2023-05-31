import contactImg from '../../assets/contact/banner.jpg'
import SectionTitle from '../../components/sectionTitle/SectionTitle';
import Cover from '../Shared/Cover/Cover';
import { ImLocation, ImPhone, ImStopwatch, ImCompass } from "react-icons/im";
import ReCAPTCHA from "react-google-recaptcha";
import { useState } from 'react';
import { Helmet } from 'react-helmet-async';

const Contact = () => {
    // const [name, setName] = useState('');
    // const [email, setEmail] = useState('');
    // const [phone, setPhone] = useState('');
    // const [message, setMessage] = useState('');
    const [captchaResponse, setCaptchaResponse] = useState('');

    // const handleNameChange = (event) => {
    //     setName(event.target.value);
    // };

    // const handleEmailChange = (event) => {
    //     setEmail(event.target.value);
    // };

    // const handlePhoneChange = (event) => {
    //     setPhone(event.target.value);
    // };

    // const handleMessageChange = (event) => {
    //     setMessage(event.target.value);
    // };

    const handleCaptchaChange = (value) => {
        setCaptchaResponse(value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Add your code to handle form submission and reCAPTCHA verification here
    };
    return (
        <div>

            <Helmet>
                <title>Bistro Boss | Contact </title>
            </Helmet>
            <Cover img={contactImg} title={'Contact'} heading={"Would you like to try a dish?"}></Cover>

            <div className='mt-32 mb-12'>
                <SectionTitle
                    heading={"OUR LOCATION"}
                    subHeading={"Visit Us"}
                ></SectionTitle>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-3 p-2'>

                <div className="max-w-sm overflow-hidden rounded-xl bg-white shadow-md duration-200 hover:scale-105 hover:shadow-xl mb-10">
                    <button className="w-full  bg-[#D1A054]  py-2 text-indigo-100 hover:bg-[#D1A040] hover:shadow-md duration-75"><span className='flex justify-center text-2xl'> <ImPhone /> </span> </button>

                    <div className="p-5 text-center">
                        <h2>PHONE</h2>
                        <p>+38 (012) 34 56 789</p>

                    </div>
                </div>
                <div className="max-w-sm overflow-hidden rounded-xl bg-white shadow-md duration-200 hover:scale-105 hover:shadow-xl mb-10">
                    <button className="w-full rounded-md bg-[#D1A054]   py-2 text-indigo-100 hover:bg-[#D1A040]  hover:shadow-md duration-75"> <span className='flex justify-center text-2xl'> <ImLocation /> </span> </button>

                    <div className="p-5 text-center">
                        <h2>ADDRESS</h2>
                        <p>Mirpur-1, Dhaka-1280</p>
                    </div>
                </div>
                <div className="max-w-sm overflow-hidden rounded-xl bg-white shadow-md duration-200 hover:scale-105 hover:shadow-xl mb-10">
                    <button className="w-full rounded-md bg-[#D1A054]  py-2 text-indigo-100 hover:bg-[#D1A040] hover:shadow-md duration-75"><span className='flex justify-center text-2xl'> <ImStopwatch /> </span></button>

                    <div className="p-5 text-center">
                        <h2>WORKING HOURS</h2>
                        <p >Mon - Fri: 08:00 - 22:00</p>
                        <p>Sat - Sun: 10:00 - 23:00</p>

                    </div>
                </div>
            </div>


            <div className='mt-32 mb-12'>
                <SectionTitle
                    heading={"CONTACT FORM"}
                    subHeading={"Send Us a Message"}
                ></SectionTitle>
            </div>

            <div className="w-full">
                <div className="bg-gradient-to-b from-[#D1A054] h-96"></div>
                <div className="max-w-5xl mx-auto px-6 sm:px-6 lg:px-8 mb-12">
                    <div className="bg-white w-full shadow rounded p-8 sm:p-12 -mt-72">

                        <form onSubmit={handleSubmit}>
                            <div className="md:flex items-center mt-12">
                                <div className="w-full md:w-1/2 flex flex-col">
                                    <label className="font-semibold leading-none">Name*</label>
                                    <input type="text" className="leading-none text-gray-900 p-3  focus:border-[#BB8506] mt-4 bg-gray-100 border rounded border-[#BB8506]" />
                                </div>
                                <div className="w-full md:w-1/2 flex flex-col md:ml-6 md:mt-0 mt-4">
                                    <label className="font-semibold leading-none">Email*</label>
                                    <input type="email" className="leading-none text-gray-900 p-3  focus:border-[#BB8506] mt-4 bg-gray-100 border rounded border-[#BB8506]" />
                                </div>
                            </div>
                            <div className="md:flex items-center mt-8">
                                <div className="w-full flex flex-col">
                                    <label className="font-semibold leading-none">Phone*</label>
                                    <input type="number" className="leading-none text-gray-900 p-3  focus:border-[#BB8506] mt-4 bg-gray-100 border rounded border-[#BB8506]" />
                                </div>

                            </div>
                            <div>
                                <div className="w-full flex flex-col mt-8 mb-5">
                                    <label className="font-semibold leading-none">Message*</label>
                                    <textarea type="text" className="h-40 text-base leading-none text-gray-900 p-3  focus:border-[#BB8506] mt-4 bg-gray-100 border rounded border-[#BB8506]"></textarea>
                                </div>

                                <ReCAPTCHA
                                    sitekey="YOUR_RECAPTCHA_SITE_KEY"
                                    onChange={handleCaptchaChange}
                                />

                            </div>

                            <div className="flex items-center justify-center w-full">

                                <button className="btn btn-outline mt-9 text-[#BB8506] bg-slate-100 hover:border-[#BB8506] hover:text-[#BB8506] border-0 border-b-4">
                                    Send Message<span className=' ms-2 flex justify-center text-2xl'> <ImCompass /> </span>
                                </button>
                            </div>


                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;