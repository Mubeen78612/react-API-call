import React from "react";
import first from "../assets/images/first.jpg";

function Clicky(props) {
  return (
    <>
      <div className=" bg-red-400 p-5 rounded my-3">
        <div className=" h-[200px] ">
        <img className=" h-full object-cover" src={props.item?.thumbnail} />
        </div>
        <p className="">{props.item?.title}</p>
        <h2 className="">
          <span className="line-through">950RS </span>
          {props.item?.price}
        </h2>
      </div>
    </>
  );
}

export default Clicky;
