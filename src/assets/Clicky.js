import React from 'react'
import first from '../assets/images/first.jpg'

function Clicky(props) {
  return (
   <>
   <div className='w-[100%]'>
    <div className='w-[25%] '>
        <img className='w-[400px] h-[400px] ml-5 object-cover' src={props.product.image}/>
        <h1 className=' ml-5 font-bold'>WESTLINE</h1>
        <p className='ml-5'>{props.product.name}</p>
        <h2 className='ml-5'><span className='line-through'>950RS  </span>{props.product.price}</h2>
        
    </div>
   </div>
    </>
  )
}

export default Clicky;