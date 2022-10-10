import React from 'react';
import { toast } from 'react-toastify';

const QuizTopic = ({ quizTopic }) => {
    let count = 0;
    const { id, options, question, correctAnswer } = quizTopic;
    const correctAnswerHandler = (option) => {
        if (option === correctAnswer) {
            toast.success('Correct Answer.!', { autoClose: 500 })
        }
        else {
            toast.error('Wrong Answer.!!', { autoClose: 500 })
        }
    }

    return (
        <div className="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-8 border shadow-lg mt-5 rounded-lg">
            <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
                <p className="text-2xl font-bold text-violet-600">
                    {question}
                </p>
            </div>
            <div className="grid gap-8 row-gap-5 mb-8 md:row-gap-8 lg:grid-cols-4 sm:grid-cols-2">
                {
                    options.map(option => <div key={id + `${count++}`} className="duration-300 transform bg-white border-l-4 border-deep-purple-accent-400 className">
                        <div className="p-5 h-full flex items-center border border-l-0 rounded-r shadow-sm">
                            <input type="radio" name='myRadio' className='mr-2 mt-1' onClick={() => correctAnswerHandler(option)} color="blue" />
                            <p className=''>{option}</p>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default QuizTopic;