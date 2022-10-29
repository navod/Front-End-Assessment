import React from "react";

const Message = props => {
  return (
    <div className="flex justify-center items-center flex-1 h-60 w-100 px-20 ">
      <div
        className={`${
          props.color ? props.color : "bg-slate-100"
        } w-full p-4 rounded-md`}
      >
        {props.message}
      </div>
    </div>
  );
};

export default Message;
