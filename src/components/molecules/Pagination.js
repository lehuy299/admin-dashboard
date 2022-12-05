import React from "react";

const Pagination = (props) => {
  return (
    <div className="flex gap-2">
      {props.range ? props.range.map((item, index) => (
        <div onClick={() => props.selectPage(item)} className={`${props.selected_page === item && 'bg-blue-500 text-white font-semibold'} rounded-full flex items-center justify-center h-8 w-8 text-lg cursor-pointer hover:bg-blue-400 hover:text-white`} key={index}>
            {item}
        </div>)) : null}
    </div>
  );
};

export default Pagination;
