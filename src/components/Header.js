import React from 'react';
import banner from '../assets/banner.png';

const Header = () => {
    return (
        <div className="bg-deep-purple-accent-700">
            <div className="px-4 pt-10 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 mb-5 lg:pt-20">
                <div className="max-w-xl sm:mx-auto lg:max-w-2xl">
                    <div className="flex flex-col mb-16 sm:text-center sm:mb-0">
                        <div className="max-w-xl sm:mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
                            <img src={banner} alt="" />
                            <h2 className="mb-6 font-sans text-3xl sm:text-5xl font-bold  text-white mt-12">
                                Multi-Step Online Quizzes
                            </h2>
                            <p className="text-base text-indigo-100 sm:text-xl">
                            Learn faster. Stay motivated. Study smarter.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;