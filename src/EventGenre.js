
import React, { useEffect, useState } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';
import './App.css';

const EventGenre = ({ events }) => {
    const [data, setData] = useState([]);
    const COLORS = ['#f8b195', '#f67280', '#c06c87', '#6c5b7b', '#355c7d'];

    const getData = () => {
        const genres = ['React', 'JavaScript', 'Node', 'jQuery', 'AngularJS'];
        let data = genres.map((genre) => {
            const value = events.filter((event) =>
                event.summary.split(' ').includes(genre)).length;
            return { name: genre, value };
        });
        return data;
    };

    useEffect(() => {
        setData(() => getData());
    }, [events]);


    return (
        <ResponsiveContainer height={400} >
            <PieChart width={400} height={400}>
                <Pie
                    data={data}
                    cx={200}
                    cy={200}
                    labelLine={false}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                    label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                >
                    {data.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} name={entry.name} />
                    ))}
                </Pie>
            </PieChart>
        </ResponsiveContainer>
    )

};

export default EventGenre;