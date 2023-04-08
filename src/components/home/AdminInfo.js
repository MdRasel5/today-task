import React from 'react';
const AdminInfo = () => {
    return (
        <div className='bg-white p-5 relative'>
            <div className='sticky top-[20px]'>
                {/* course-info */}
                <div className="course-info">
                    <h2 className='text-[23px] font-bold'>Course Info</h2>
                    <p className='font-semibold bg-[#F2F4FA] text-[#5D5FEF] rounded-lg py-[8px] px-[10px] inline-block m-2'>Milestone: <span>13</span></p>
                    <p className='font-semibold bg-[#F2F4FA] text-[#5D5FEF] rounded-lg py-[8px] px-[10px] inline-block m-2'>Projects <span>45</span></p>
                    <p className='font-semibold bg-[#F2F4FA] text-[#5D5FEF] rounded-lg py-[8px] px-[10px] inline-block m-2'>Assignments <span>12</span></p>
                    <p className='font-semibold bg-[#F2F4FA] text-[#5D5FEF] rounded-lg py-[8px] px-[10px] inline-block m-2'>Videos <span>950</span></p>
                </div>

                {/* break */}
                <div className='add-break'>
                    <h2 className='text-[23px] font-bold mt-[30px]'>Add a break</h2>
                    <button className='font-semibold bg-[#F2F4FA] text-[#5D5FEF] rounded-full h-[50px] w-[50px] inline-block m-2'>10m</button>
                    <button className='font-semibold bg-[#F2F4FA] text-[#5D5FEF] rounded-full h-[50px] w-[50px] inline-block m-2'>20m</button>
                    <button className='font-semibold bg-[#F2F4FA] text-[#5D5FEF] rounded-full h-[50px] w-[50px] inline-block m-2'>30m</button>
                    <button className='font-semibold bg-[#F2F4FA] text-[#5D5FEF] rounded-full h-[50px] w-[50px] inline-block m-2'>45m</button>
                </div>

                {/* task-info */}
                <div className="task-info">
                    <h2 className='text-[23px] font-bold mt-[30px]'>Task Details</h2>
                    <p className='font-semibold bg-[#F2F4FA] text-black rounded-lg py-[8px] px-[10px] m-2'>Total Time:  <span className='text-[#5D5FEF]'>2 Hours</span></p>
                    <p className='font-semibold bg-[#F2F4FA] text-black rounded-lg py-[8px] px-[10px] m-2'>Break Time:  <span className='text-[#5D5FEF]'>10 Minute</span></p>

                </div>
            </div>
        </div>
    );
};

export default AdminInfo;