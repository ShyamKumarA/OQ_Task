import React from 'react'

function DashBoard() {
  return (
    <div className='dashboard_container'>
        <div className='logo'>
            <img src='./assets/HSSE/Asset1.png' width={"90px"} alt='logo'></img>
        </div>
        <div className='description' style={{paddingTop: "20px", width:"600px"}}>
            <h2 style={{color: "white" , fontSize:"21px"}}>
            OQ HSSE SYMPOSIUM 2023
            </h2>
            <h1 style={{color: "white" ,marginBottom: "10px"}}>Enhancing a Safer and Sustainable Future</h1>
            <p style={{color: "white", width: "606px"}}>
            Join us as we embark on a journey to elevate our Health, Safety, Security, and Environment performance at OQ to new heights. At OQ, we are committed to fostering a culture of excellence in HSSE, and this symposium serves as a pivotal platform for reflection, collaboration, and innovation.
            </p>
            <button type="button" style={{padding: "10px 27px" , border: "none" , backgroundColor: "#00AFB9" , color : "white", borderRadius: "20px"}}>Register</button>
        </div>
    </div>
  )
}

export default DashBoard