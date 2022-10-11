import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Header from './Header';
import Topic from './Topic';
import cover from '../assets/cover.jpg';

const Topics = () => {
    const topics = useLoaderData();
    return (
        <div style={{
            backgroundImage: `url(${cover})`, backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
        }}>
            <Header></Header>
            <div className='grid lg:grid-cols-4 gap-8 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 pb-10 sm:mx-10 mx-5'>
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