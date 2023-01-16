import React from 'react'


function Next(props) {
  return (
    <>
    <div className="bg-green-400 p-5 rounded my-3">
        <div className=" h-[200px] ">
            <img className="h-full object-cover" src={props.item?.thumbnail}/>
            </div>
            <h1 className="text-3xl text-white">Title: {props.item?.title}</h1>
            <h2 className="text-lg">Price: {props.item?.price}</h2>
            <p className="text-xl"> Description: {props.item?.description}</p>
            <h3 className="text-lg">Rating: {props.item?.rating}</h3>
            <h4 className='text-xl'>Stock: {props.item?.stock}</h4>
            <h5 className='text-2xl'>Category: {props.item?.category}</h5>
            <h1 className='text-lg'>DiscountPercentage: {props.item?.discountPercentage}</h1>
        </div>
 </>
  )
}

export default Next;