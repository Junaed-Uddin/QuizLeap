import React from 'react';

const QuizTopic = ({ quizTopic }) => {
    const { id, options, question, correctAnswer } = quizTopic;
    console.log(quizTopic);
    return (
        <div className="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-8 border shadow-lg mt-5">
            <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
                <p className="text-2xl font-bold text-violet-600">
                    {question}
                </p>
            </div>
            <div className="grid gap-8 row-gap-5 mb-8 md:row-gap-8 lg:grid-cols-4 sm:grid-cols-2">
                <div className="duration-300 transform bg-white border-l-4 border-deep-purple-accent-400 className">
                    <div className="h-full p-5 border border-l-0 rounded-r shadow-sm">
                        <h6 className="mb-2 font-semibold leading-5">The doctor said</h6>
                        <label class="flex items-center">
                            <Checkbox type="checkbox" class="form-checkbox">
                                <span class="ml-2">I agree to the <span class="underline">privacy policy</span></span>
                        </label>
                    </div>
                </div>
                <div className="duration-300 transform bg-white border-l-4 border-deep-purple-accent-400">
                    <div className="h-full p-5 border border-l-0 rounded-r shadow-sm">
                        <h6 className="mb-2 font-semibold leading-5">Skate ipsum dolor</h6>
                    </div>
                </div>
                <div className="duration-300 transform bg-white border-l-4 border-deep-purple-accent-400 className">
                    <div className="h-full p-5 border border-l-0 rounded-r shadow-sm">
                        <h6 className="mb-2 font-semibold leading-5">
                            Baseball ipsum dolor
                        </h6>


                    </div>
                </div>
                <div className="duration-300 transform bg-white border-l-4 border-deep-purple-accent-400 className">
                    <div className="h-full p-5 border border-l-0 rounded-r shadow-sm">
                        <h6 className="mb-2 font-semibold leading-5">They urge you</h6>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default QuizTopic;