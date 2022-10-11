import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Statistics = () => {
    const statistics = useLoaderData().data;
    return (
        <div className='mt-10 mb-10'>
                <h2 className='mb-5 text-2xl font-semibold'>Statistics Data</h2>
            <div className='flex justify-start w-full'>
                <ResponsiveContainer width={"96%"} height={400}>
                    <LineChart
                        width={500}
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
                </ResponsiveContainer>
            </div>
        </div >
    );
};

export default Statistics;