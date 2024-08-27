import React from 'react'
import '../styles/card.css'

const Card = (item,handleClick) => {

    const {title,author,price,img} = item;
      return (
    <div className='cards'>
        <div className='image-box'>
            <img src={item.ring} alt='image'/>
        </div>
        <div className='details'>
            <p>{item.title}</p>
            <p>{item.author}</p>
            <p>Price- {item.price} Rs</p>
            <button onClick={()=> handleClick(item)}>Add to Cart</button>
        </div>
    </div>
  )
}

export default Card