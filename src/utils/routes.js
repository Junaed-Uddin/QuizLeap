import { createBrowserRouter } from "react-router-dom";
import Questionnaire from "../components/Questionnaire";
import QuizDetail from "../components/QuizDetail";
import Root from "../components/Root";
import Statistics from "../components/Statistics";
import Topics from "../components/Topics";
import { quizData } from "../loader/quizData";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        children: [
            {
                path: '/',
                loader: quizData,
                element: <Topics></Topics>,
            },
            {
                path: 'topics',
                loader: quizData,
                element: <Topics></Topics>
            },
            {
                path: '/quiz/:quizId',
                loader: ({ params }) => fetch(`https://openapi.programming-hero.com/api/quiz/${params.quizId}`),
                element: <QuizDetail></QuizDetail>
            },
            {
                path: 'statistics',
                loader:quizData,
                element: <Statistics></Statistics>
            },
            {
                path: 'questionnaires',
                element: <Questionnaire></Questionnaire>
            },
        ]
    }
])

export default router;