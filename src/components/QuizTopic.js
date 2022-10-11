import { faEye } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { toast } from 'react-toastify';

const QuizTopic = ({ quizTopic, correct, setCorrect, wrong, setWrong }) => {

    const { options, question, correctAnswer } = quizTopic;
    const rightAnswerHandler = (option) => {
        if (option === correctAnswer) {
            toast.success('Correct Answer.!', { autoClose: 500 });
            setCorrect(() => correct + 1);
        }
        else {
            toast.error('Wrong Answer.!!', { autoClose: 500 });
            setWrong(() => wrong + 1);
        }
    }

    const correctAnswerHandler = (correctAnswer) => {
        toast.info(`correctAnswer: ${correctAnswer}`, { autoClose: 1000 });
    }

    return (
        <div className="px-4 py-5 mx-3 sm:mx-auto lg:mx-28 md:mx-10 sm:max-w-xl md:max-w-full md:px-12 relative lg:px-8 lg:py-8 border shadow-lg mt-5 rounded-lg">
            <FontAwesomeIcon onClick={() => correctAnswerHandler(correctAnswer)} className='absolute top-3 right-4 text-xl' icon={faEye}></FontAwesomeIcon>
            <div className="mb-10 sm:text-center md:mb-12 bg-slate-100">
                <h2 className="text-xl sm:text-xl font-bold text-violet-600 border sm:p-5 mt-6">
                    {question}
                </h2>
            </div>
            <div className="grid gap-5 row-gap-5 mb-8 md:row-gap-8 lg:grid-cols-4 sm:grid-cols-2">
                {
                    options.map((option, index) => <div key={index} className=" bg-white hover:bg-slate-100 border-l-4 border-violet-600 rounded-md">
                        <div className="p-5 w-full h-full flex items-center border rounded-r shadow-md">
                            <input type="radio" name='myRadio' className='mr-2 mt-1' onClick={() => rightAnswerHandler(option)} color="blue" />
                            <p>{option}</p>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default QuizTopic;