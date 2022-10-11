import React from 'react';

const Questionnaire = () => {
    return (
        <section className="dark:bg-gray-800 dark:text-gray-100">
            <div className="container flex flex-col justify-center px-4 py-8 mx-auto md:p-8">
                <h2 className="text-2xl font-semibold sm:text-4xl">Some Questions</h2>
                <p className="mt-4 mb-8 dark:text-gray-400">About React Router, Context API, and useRef</p>
                <div className="space-y-4">
                    <details className="w-full border rounded-lg">
                        <summary className="px-4 py-6 text-xl focus:outline-none focus-visible:ring-indigo-400">What is the Purpose of react router?</summary>
                        <p className="px-4 py-6 pt-0 ml-4 -mt-3 text-gray-300">React Router is a standard library for routing in React. It enables the navigation among views of various components in a React Application, allows changing the browser URL, and keeps the UI in sync with the URL.  When a user types a specific URL into the browser, and if this URL path matches any 'route' inside the router file, the user will be redirected to that particular route. Why will you need a Router for your app? We simply associate a component with a specific root, which makes our root component (usually called an app) clean, maintainable, and readable. Without router, either the root component or state would be messy and hard to maintain.
                        </p>
                    </details>
                    <details className="w-full border rounded-lg">
                        <summary className="px-4 py-6 text-xl focus:outline-none focus-visible:ring-indigo-400">How does context API works?</summary>
                        <p className="px-4 py-6 pt-0 ml-4 -mt-3 text-gray-300">The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. We create a context using React.createContext() and it returns a consumer and a provider. Provider is a component that as it's names suggests provides the state to its children. It will hold the "store" and be the parent of all the components that might need that store. Consumer as it so happens is a component that consumes and uses the state. </p>
                    </details>
                    <details className="w-full border rounded-lg">
                        <summary className="px-4 py-6 text-xl focus:outline-none focus-visible:ring-indigo-400">What is useRef Hook?</summary>
                        <p className="px-4 py-6 pt-0 ml-4 -mt-3 text-gray-300">useRef is a synchronous hook that updates the state immediately and persists its value through the component's lifecycle. It can be used to store a mutable value that does not cause a re-render when updated. It can be used to access a DOM element directly. useRef can be used to store local mutable value in a component. It doesn't participate in rerendering </p>
                    </details>
                </div>
            </div>
        </section>
    );
};

export default Questionnaire;