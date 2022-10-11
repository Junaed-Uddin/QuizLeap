import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const Statistics = () => {
    const statistics = useLoaderData().data;
    return (
        <div className='flex justify-center mt-10'>
            <div>
                <h2 className='mb-5 text-2xl'>Statistics Data</h2>
                <LineChart
                    width={500}
                    height={300}
                    data={statistics}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line
                        type="monotone"
                        dataKey="name"
                        stroke="#8884d8"
                        activeDot={{ r: 8 }}
                    />
                    <Line type="monotone" dataKey="total" stroke="#82ca9d" />
                </LineChart>
            </div>
        </div>
    );
};

export default Statistics;