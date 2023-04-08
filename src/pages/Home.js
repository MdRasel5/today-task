import React, { useEffect, useState } from 'react';
import Tasks from '../components/home/Tasks';
import AdminInfo from '../components/home/AdminInfo';
import './Home.css';

const Home = () => {

    const [tasks, setTasks] = useState([]);

    // fetch data
    useEffect(() => {
        fetch("task.json")
            .then(res => res.json())
            .then(data => setTasks(data))
    }, []);

    const handelTask = () => {
        console.log("click porse");
    }

    return (
        <div className=' bg-[#F2F4FA] relative'>
            <div className="task-wrapperr grid  sm:grid-cols-[3fr_2fr] md:grid-cols-[3fr_2fr] lg:grid-cols-[3fr_2fr] xl:grid-cols-[4fr_1fr]">
                {/* tasks */}
                <div className='container mx-auto p-[30px] sm:p-14 lg-[80px] xl:p-28'>
                    {/* titles */}
                    <h1 className='text-[38px] text-[#5D5FEF] font-bold'>Today Tasks</h1>
                    <h2 className='text-black text-[20px] font-semibold mb-7'>Select Today's Task</h2>

                    {/* tasks */}
                    <div className='grid sm:grid-cols-1  md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8'>
                        {
                            tasks.map(task => <Tasks key={task.id} task={task} handelTask={handelTask}></Tasks>)
                        }
                    </div>
                </div>

                {/* Admin Infos */}
                <AdminInfo></AdminInfo>
            </div>
        </div>
    );
};

export default Home;