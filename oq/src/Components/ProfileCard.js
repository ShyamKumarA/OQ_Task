import React from 'react'

function ProfileCard({data, functio}) {
  return (
    <div className='profile_card_container'>
    <img src={data.profile} alt='test' width={"150px"} style={{marginBottom: "10px"}}></img>
    <div>
        <div>
            <h3 style={{color:"white",fontSize: "23px"}}>About Workshop</h3>
            <p style={{color:"white" ,fontSize: "14px"}}>
            "Systems, Processes & Assurance – Be Good, Not Lucky" will emphasize the significance of strong systems and processes for ensuring success and minimizing dependence on luck. It will delve into the benefits of prioritizing well-designed and efficient approaches, enabling individuals and organizations to attain consistent and dependable outcomes across diverse fields.
            </p>
        </div>
        <div>
            <h3 style={{color:"white" , fontSize: "23px"}}>Bio - Leslie Cox</h3>
            <p style={{color:"white" , fontSize: "14px"}}>
            Les, a visionary leader, has spent two decades challenging conventional norms in safety and sustainability to achieve sustainable outcomes in complex and demanding projects worldwide. As the Founding Partner of AEP, he advocates operational excellence through effective leadership, promoting a culture of embracing vulnerability as a catalyst for change and implementing purposeful management systems for businesses globally.
            </p>
        </div>
    </div>
    <button style={{padding: "8px 42px" , borderRadius: "29px" , border: "none" , backgroundColor:"#0A1E3C" ,color: "white"}} onClick={()=> functio()}>Close</button>
    </div>
  )
}

export default ProfileCard