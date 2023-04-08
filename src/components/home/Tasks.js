import React from 'react';
import image1 from '../../images/1.png';

const Tasks = () => {
    return (
        <div className='bg-[#F2F4FA]'>
            <div className='container mx-auto p-[30px] sm:p-14 lg-[80px] xl:p-28'>
                <h1 className='text-[38px] text-[#5D5FEF] font-bold'>Today Tasks</h1>
                <h2 className='text-black text-[20px] font-semibold mb-7'>Select Today's Task</h2>

                <div className="tasks-wrappers grid sm:grid-cols-1  md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
                    {/* task 1 */}
                    <div className="single-task bg-white p-5 rounded-lg">
                        <img src={image1} className='rounded-2xl' alt="" />
                        <h2 className='mt-7 text-[23px] font-semibold'>Complete Module 51</h2>
                        <p className='text-[16px] font-semibold'>Video: <span className='text-[#5D5FEF]'>1 to 4</span></p>
                        <p className='mb-[30px] font-semibold'>Time Required: <span className='text-[#5D5FEF]'> 3 Hours</span></p>
                        <button className='bg-[#5D5FEF] text-white w-full px-[30px] py-3 rounded-lg font-semibold capitalize'>Add to task</button>
                    </div>
                    {/* task 2 */}
                    <div className="single-task bg-white p-5 rounded-lg">
                        <img src={image1} className='rounded-2xl' alt="" />
                        <h2 className='mt-7 text-[23px] font-semibold'>Complete Module 51</h2>
                        <p className='text-[16px] font-semibold'>Video: <span className='text-[#5D5FEF]'>1 to 4</span></p>
                        <p className='mb-[30px] font-semibold'>Time Required: <span className='text-[#5D5FEF]'> 3 Hours</span></p>
                        <button className='bg-[#5D5FEF] text-white w-full px-[30px] py-3 rounded-lg font-semibold capitalize'>Add to task</button>
                    </div>
                    {/* task 3 */}
                    <div className="single-task bg-white p-5 rounded-lg">
                        <img src={image1} className='rounded-2xl' alt="" />
                        <h2 className='mt-7 text-[23px] font-semibold'>Complete Module 51</h2>
                        <p className='text-[16px] font-semibold'>Video: <span className='text-[#5D5FEF]'>1 to 4</span></p>
                        <p className='mb-[30px] font-semibold'>Time Required: <span className='text-[#5D5FEF]'> 3 Hours</span></p>
                        <button className='bg-[#5D5FEF] text-white w-full px-[30px] py-3 rounded-lg font-semibold capitalize'>Add to task</button>
                    </div>
                    {/* task 3 */}
                    <div className="single-task bg-white p-5 rounded-lg">
                        <img src={image1} className='rounded-2xl' alt="" />
                        <h2 className='mt-7 text-[23px] font-semibold'>Complete Module 51</h2>
                        <p className='text-[16px] font-semibold'>Video: <span className='text-[#5D5FEF]'>1 to 4</span></p>
                        <p className='mb-[30px] font-semibold'>Time Required: <span className='text-[#5D5FEF]'> 3 Hours</span></p>
                        <button className='bg-[#5D5FEF] text-white w-full px-[30px] py-3 rounded-lg font-semibold capitalize'>Add to task</button>
                    </div>
                    {/* task 3 */}
                    <div className="single-task bg-white p-5 rounded-lg">
                        <img src={image1} className='rounded-2xl' alt="" />
                        <h2 className='mt-7 text-[23px] font-semibold'>Complete Module 51</h2>
                        <p className='text-[16px] font-semibold'>Video: <span className='text-[#5D5FEF]'>1 to 4</span></p>
                        <p className='mb-[30px] font-semibold'>Time Required: <span className='text-[#5D5FEF]'> 3 Hours</span></p>
                        <button className='bg-[#5D5FEF] text-white w-full px-[30px] py-3 rounded-lg font-semibold capitalize'>Add to task</button>
                    </div>
                    {/* task 3 */}
                    <div className="single-task bg-white p-5 rounded-lg">
                        <img src={image1} className='rounded-2xl' alt="" />
                        <h2 className='mt-7 text-[23px] font-semibold'>Complete Module 51</h2>
                        <p className='text-[16px] font-semibold'>Video: <span className='text-[#5D5FEF]'>1 to 4</span></p>
                        <p className='mb-[30px] font-semibold'>Time Required: <span className='text-[#5D5FEF]'> 3 Hours</span></p>
                        <button className='bg-[#5D5FEF] text-white w-full px-[30px] py-3 rounded-lg font-semibold capitalize'>Add to task</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Tasks;