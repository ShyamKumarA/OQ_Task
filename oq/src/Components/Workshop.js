import React, { useState } from 'react'
import Card from './Card'
import FloatWindow from './FloatWindow'

function Workshop() {
    let [show,setShow] = useState(false)
    let [workData, setWorkData] = useState()

    let workshopData = [
        {
            id: 1,
            img: "./assets/HSSE/Asset3.png",
            profile: "./assets/HSSE/Asset15.png",
            desc: "Systems, Processes & Assurance – Be Good not Lucky"
        },
        {
            id: 2,
            img: "./assets/HSSE/Asset4.png",
            profile: "./assets/HSSE/Asset16.png",
            desc: "The Leaders Role in Delivering Success – What Type of Leader is Needed"
        },
        {
            id: 3,
            profile: "./assets/HSSE/Asset17.png",
            img: "./assets/HSSE/Asset5.png",
            desc: "Human Reliability – Why Things Go Wrong and What Can We Do?"
        },
        {
            id: 4,
            profile: "./assets/HSSE/Asset18.png",
            img: "./assets/HSSE/Asset6.png",
            desc: "Creating a Learning Culture –The Way We Choose Do Things Around Here"
        },
    ]

    const handleBtn = (id) => {
        if(show){
            setShow(false)
        }else{
            setShow(true)
            let test = workshopData.filter(item => item.id === id)

            setWorkData(test[0])
        }
    }

  return (
    <>
    {show && (<FloatWindow functio = {handleBtn} data= {workData}/>)}
    
    <div className='workshop_container' >

        <div>
            <h2 style={{textAlign: "center" , marginBottom: "60px"}}> 
                Workshop
            </h2>
        </div>
        <div className='cards'> 
            {workshopData.map((data) => {
                return(

                    <Card id={data.id}  desc={data.desc} image={data.img} functio={handleBtn}/>
                )
            })}
            
            
            
        </div>
        
    </div>
    </>
    
  )
}

export default Workshop