import React, { useEffect, useState } from "react";
import Taskinfo from "./Taskinfo";
const AdminInfo = ({ tasklist }) => {
  let time = 0;

  for (const task of tasklist) {
    time = time + task.time;
  }

  //   breaktime
  const [taskinfos, setTaskinfos] = useState([]);

  const [taskBrkTime, settaskBrkTime] = useState(null);

  useEffect(() => {
    fetch("breaktime.json")
      .then((res) => res.json())
      .then((data) => setTaskinfos(data));
    const stroedData = JSON.parse(localStorage.getItem("task-info"));
    settaskBrkTime(stroedData);
  }, [taskBrkTime]);

  const handelBreakTime = (taskinfo) => {
    const { breaktime } = taskinfo;
    localStorage.setItem("task-info", JSON.stringify(breaktime));
    settaskBrkTime(breaktime);
  };

  return (
    <div className="bg-white p-5 relative">
      <div className="sticky top-[20px]">
        {/* course-info */}
        <div className="course-info">
          <h2 className="text-[23px] font-bold">Course Info</h2>
          <p className="font-semibold bg-[#F2F4FA] text-[#5D5FEF] rounded-lg py-[8px] px-[10px] inline-block m-2">
            Milestone: <span>13</span>
          </p>
          <p className="font-semibold bg-[#F2F4FA] text-[#5D5FEF] rounded-lg py-[8px] px-[10px] inline-block m-2">
            Projects <span>45</span>
          </p>
          <p className="font-semibold bg-[#F2F4FA] text-[#5D5FEF] rounded-lg py-[8px] px-[10px] inline-block m-2">
            Assignments <span>12</span>
          </p>
          <p className="font-semibold bg-[#F2F4FA] text-[#5D5FEF] rounded-lg py-[8px] px-[10px] inline-block m-2">
            Videos <span>950</span>
          </p>
        </div>

        {/* break */}
        <div className="add-break">
          <h2 className="text-[23px] font-bold mt-[30px]">Add a break</h2>
          {/* task-details */}
          {taskinfos.map((taskinfo) => (
            <Taskinfo
              key={taskinfo.breaktime}
              taskinfo={taskinfo}
              handelBreakTime={handelBreakTime}
            ></Taskinfo>
          ))}
        </div>

        {/* task-info */}
        <div className="task-info">
          <h2 className="text-[23px] font-bold mt-[30px]">Task Details</h2>
          <p className="font-semibold bg-[#F2F4FA] text-black rounded-lg py-[8px] px-[10px] m-2">
            Total Time:{" "}
            <span id="totalTime" className="text-[#5D5FEF]">
              {" "}
              {time} hours{" "}
            </span>
          </p>
          <p className="font-semibold bg-[#F2F4FA] text-black rounded-lg py-[8px] px-[10px] m-2">
            Break Time: <span className="text-[#5D5FEF]">{taskBrkTime}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default AdminInfo;
