import React from 'react'
import Navbar from './components/Navbar'
import Card from './Card'
import list from './Card'

const Shop = ({handleClick}) => {

  return (
    <section>
        {list.map((item)=>{
            return <Card item={item} key={item.id} 
            handleClick={handleClick}/>
        })}
    </section>
  )
}

export default Shop;
