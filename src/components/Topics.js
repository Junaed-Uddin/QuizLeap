import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Header from './Header';
import Topic from './Topic';
import cover from '../assets/cover.jpg';

const Topics = () => {
    const topics = useLoaderData();
    return (
        <div className='h-screen' style={{
            backgroundImage: `url(${cover})`, backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
        }}>
            <Header></Header>
            <div className='flex justify-center flex-wrap gap-8 sm:mx-10'>
                {
                    topics.data.map(topic => <Topic
                        key={topic.id}
                        topic={topic}
                    ></Topic>)
                }
            </div>
        </div>
    );
};

export default Topics;