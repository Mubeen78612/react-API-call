import React from "react";
import first from "../assets/images/first.jpg";

function Clicky(props) {
  return (
    <>
      <div className=" bg-red-400 p-5 rounded my-3">
        <div className=" h-[200px] ">
        <img className=" h-full object-cover" src={props.item?.thumbnail} />
        </div>
        <p className="text-2xl text-white"> Title:{props.item?.title}</p>
        <h2 className="text-xl">
          <span className="line-through text-lg">950RS </span>
        Price:  {props.item?.price}
        </h2>
        <h3 className="text-xl">Rating: {props.item?.rating}</h3>
            <h4 className='text-2xl'>Stock: {props.item?.stock}</h4>
            <h5 className='text-3xl'>Category: {props.item?.category}</h5>
            <h1 className='text-xl'>DiscountPercentage: {props.item?.discountPercentage}</h1>
      </div>
    </>
  );
}

export default Clicky;
