import React from 'react';

const Contact = () => {
    return (
        <section className="p-6 bg-gray-800 text-white">
            <div className="container grid gap-6 mx-auto text-center lg:grid-cols-2 xl:grid-cols-5">
                <div className="w-full px-6 py-16 rounded-md sm:px-12 md:px-16 xl:col-span-2 dark:bg-gray-900">
                    <span className="block mb-2 text-lg dark:text-indigo-400">Online Quiz system</span>
                    <h1 className="text-4xl font-bold dark:text-gray-50">Boost Your Experience with QuizLeap</h1>
                    <p className="my-8">
                        <span className="font-medium dark:text-gray-50">Learn about anything and improve your skills with more practices
                        </span> 
                    </p>
                    <form action="" className="self-stretch space-y-3 ng-untouched ng-pristine ng-valid">
                        <div>
                            <label className="text-sm sr-only">Your name</label>
                            <input id="name" type="text" placeholder="Your name" className="w-full py-3 px-3 rounded-md focus:ring focus:ring-indigo-400 dark:border-gray-700" />
                        </div>
                        <div>
                            <label className="text-sm sr-only">Email address</label>
                            <input id="lastname" type="text" placeholder="Email address" className="w-full py-3 px-3 rounded-md focus:ring focus:ring-indigo-400 dark:border-gray-700" />
                        </div>
                        <button type="button" className="w-full py-3 font-semibold rounded dark:bg-indigo-400 dark:text-gray-900">Subscribe</button>
                    </form>
                </div>
                <img src="https://images.unsplash.com/photo-1606326608690-4e0281b1e588?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" alt="" className="object-cover w-full rounded-md xl:col-span-3 dark:bg-gray-500" />
            </div>
        </section>
    );
};

export default Contact;