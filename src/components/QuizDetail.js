import React from 'react';
import { useLoaderData } from 'react-router-dom';
import QuizTopic from './QuizTopic/QuizTopic';

const QuizDetails = () => {
    const quizTopics = useLoaderData();
    const { total, name, logo } = quizTopics.data;
    return (
        <div>
            <div className='flex justify-center flex-wrap items-center mt-14 gap-4'>
                <img className='w-28 rounded-lg border bg-slate-200' src={logo} alt="" />
                <div>
                    <h2 className='text-2xl sm:text-3xl font-bold text-violet-600'>Quiz of {name}</h2>
                    <p className='text-start mt-3 text-lg sm:text-lg font-bold'>Total Questions: {total}</p>
                </div>
            </div>
            <div className='mt-10'>
                {
                    quizTopics.data.questions.map(quizTopic => <QuizTopic
                        key={quizTopic.id}
                        quizTopic={quizTopic}
                    ></QuizTopic>)
                }
            </div>
        </div>
    );
};

export default QuizDetails;