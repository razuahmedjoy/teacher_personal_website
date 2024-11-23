import React from "react";
import Personal from "../data/personal";
const HeroSection = () => {
    return (
        <div className="flex flex-col md:flex-row items-center min-h-screen px-8 container mx-auto w-full">
            {/* Left Section */}


            <div className="md:w-1/2 text-center md:text-left order-2 md:order-1 mt-12">
                <p className='text-lg mb-2'>Hello I'm</p>
                <h1 className="text-4xl font-bold text-gray-800">
                    Tanvir Anzum Rashed
                </h1>
                <p className="text-base text-gray-800 mt-2">
                    Lecturer, Department of Industrial Engineering & Management <br />
                    Khulna University of Engineering & Technology, Khulna
                </p>
                <div className='mt-5'>
                    <button className="px-4 py-2 bg-secondary text-white rounded-lg transition duration-300 mr-5">
                        Contact Me
                    </button>
                    {/* this link must open in new tab */}
                    
                    <a href={Personal?.cv_link} target="_blank">
                        <button className="px-4 py-2 bg-black text-white rounded-lg transition duration-300">
                            Download CV
                        </button>
                    </a>
                </div>
            </div>

            {/* Right Section */}
            <div className="md:w-1/2 mt-8 md:mt-0 flex justify-center items-center content-center order-1">
                <img

                    src='https://via.placeholder.com/350'
                    alt="Groceries"
                    className="object-cover rounded-ee-xl rounded-ss-xl border-2 border-secondary"
                />
            </div>


        </div>
    );
};

export default HeroSection;
