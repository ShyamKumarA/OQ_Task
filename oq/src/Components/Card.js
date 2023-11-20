import React from 'react'

function Card({id,desc,image,functio}) {
  return (
    <>
    <div className='card_container'>
        <div className='card_icon'>
            <img src={image} alt='card_logo'></img>
        </div>
        <div className='card_text'>
            <h3 style={{color:"#808080"}}>{desc}</h3>
        </div>
        <div className='card_btn'>
        <button className='card-button' type="button"  onClick={()=>functio(id)}>Read More</button>
        </div>
    </div>
    </>
  )
}

export default Card