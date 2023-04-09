import React from "react";

const Tasks = ({ task, handelTask }) => {
  const { id, name, video, img, time } = task;

  return (
    <div div className="single-task bg-white p-5 rounded-lg">
      <img
        src={img}
        className="rounded-2xl h-[200px] w-full object-cover"
        alt=""
      />
      <h2 className="mt-7 text-[23px] font-semibold">{name}</h2>
      <p className="text-[16px] font-semibold">
        Video: <span className="text-[#5D5FEF]">{video}</span>
      </p>
      <p className="mb-[30px] font-semibold">
        Time Required: <span className="text-[#5D5FEF]"> {time} hours</span>
      </p>
      <button
        onClick={() => handelTask(task)}
        className="bg-[#5D5FEF] text-white w-full px-[30px] py-3 rounded-lg font-semibold capitalize"
      >
        Add to task
      </button>
    </div>
  );
};

export default Tasks;
