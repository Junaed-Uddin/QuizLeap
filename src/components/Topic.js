import React from 'react';
import {useNavigate } from 'react-router-dom';

const Topic = ({ topic }) => {
    const { id, name, logo, total } = topic;
    const quizNavigate = useNavigate();
    const quizBtnHandler = () => {
        quizNavigate(`/quiz/${id}`);
    }
    return (
        <div className="max-w-xs rounded-md shadow-md dark:bg-gray-900 dark:text-gray-100 border border-gray-500">
            <img src={logo} alt="logo" className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500" />
            <div className="flex flex-col justify-between p-6 space-y-6">
                <div className="space-y-4">
                    <h2 className="text-2xl font-semibold tracking-wide">Topic: <span>{name}</span></h2>
                    <p className="dark:text-gray-100">Questions: {total}</p>
                </div>
                <button onClick={quizBtnHandler} type="button" className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md dark:bg-indigo-400 text-black">
                    Start Quiz
                </button>
            </div>
        </div>
    );
};

export default Topic;