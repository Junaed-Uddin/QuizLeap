import React, { useEffect, useRef, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import QuizTopic from './QuizTopic';

const QuizDetails = () => {
    const [correct, setCorrect] = useState(0);
    const [wrong, setWrong] = useState(0);
    const topContainer = useRef();
    const quizTopics = useLoaderData();
    const { total, name, logo } = quizTopics.data;
    
    useEffect(() => {
        topContainer.current.scrollIntoView({ block: "end", behavior: 'smooth' });
    }, []);

    return (
        <div>
            <div ref={topContainer} />
            <div className='flex justify-center items-center border mx-3 sm:mx-auto lg:mx-28 md:mx-10 sm:max-w-xl rounded-lg md:max-w-full py-4 flex-wrap mt-14 gap-3 sm:gap-12'>
                <div className='flex justify-center gap-4 flex-wrap items-center'>
                    <img className='w-28 rounded-lg border bg-slate-200' src={logo} alt="" />
                    <div>
                        <h2 className='text-2xl sm:text-3xl font-bold text-violet-600'>Quiz of {name}</h2>
                        <p className='sm:text-start mt-3 text-lg sm:text-lg font-bold'>Total Questions: {total}</p>
                    </div>
                </div>
                <div className='mx-3 sm:text-end text-xl font-mono'>
                    <p className='font-bold'>Correct: {correct}</p>
                    <p className='py-2 font-bold'>Wrong: {wrong}</p>
                    <p className='font-bold'>Total Marks: {correct}</p>
                </div>
            </div>
            <div className='mt-10 mb-10' data-aos="zoom-in">
                {
                    quizTopics.data.questions.map(quizTopic => <QuizTopic
                        key={quizTopic.id} correct={correct}
                        setCorrect={setCorrect}
                        wrong={wrong}
                        setWrong={setWrong}
                        quizTopic={quizTopic}
                        total={total}
                    ></QuizTopic>)
                }
            </div>
        </div>
    );
};

export default QuizDetails;