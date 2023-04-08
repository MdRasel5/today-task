import React from 'react';
import Tasks from '../components/home/Tasks';
import AdminInfo from '../components/home/AdminInfo';
import './Home.css';

const Home = () => {
    return (
        <div className=' bg-[#F2F4FA] relative'>
            <div className="task-wrapperr grid  sm:grid-cols-[3fr_2fr] md:grid-cols-[3fr_2fr] lg:grid-cols-[3fr_2fr] xl:grid-cols-[4fr_1fr]">
                <Tasks></Tasks>
                <AdminInfo></AdminInfo>
            </div>
        </div>
    );
};

export default Home;