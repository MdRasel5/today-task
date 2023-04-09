import React from "react";

const Taskinfo = ({ taskinfo, handelBreakTime }) => {
  const { breaktime } = taskinfo;
  return (
    <>
      <button
        onClick={() => handelBreakTime(taskinfo)}
        className="font-semibold bg-[#F2F4FA] text-[#5D5FEF] rounded-full h-[50px] w-[50px] inline-block m-2"
      >
        {breaktime}
      </button>
    </>
  );
};

export default Taskinfo;
