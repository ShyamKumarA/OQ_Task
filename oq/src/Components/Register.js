import React, { useEffect, useState } from 'react'
import axios from "axios"
import toast from 'react-hot-toast'

function Register() {
  let [workshopData,setWorkshopData] = useState()


  let [name,setName] = useState("")
  let [mobile,setMobile] = useState("")
  let [email,setEmail] = useState("")
  let [company,setCompany] = useState("")
  let [workshop,setWorkshop] = useState("")

  useEffect(()=>{
    const response = axios.get("http://localhost:4000/getCount",{})

    response.then((data)=>{

      setWorkshopData(data.data.data)
    }).catch((err)=>console.log(err))

  },[])

  let sendData = () => {
    try {
      let response = axios.post("http://localhost:4000/register",{
        name,mobile,email,companyName:company,workshop
      })

      

      response.then((data)=>{
        if(data.data.success){
          toast.success("done")
        }else{
          toast.error(data.data.message) 
        }
      }).catch((err)=>{
        console.log(err);
      })

    } catch (error) {
      console.log(error);
    }
  }




  return (
    <div className='register_container'>
        <h1>Register to Attend</h1>
        <div style={{width:"80%"}}>
        <input class="inp" placeholder="Full Name" size={"50"} onChange={e=>setName(e.target.value)} />
        <input class="inp" placeholder="Mobile" onChange={e=>setMobile(e.target.value)}/>
        <input class="inp" placeholder="Email" onChange={e=>setEmail(e.target.value)}/>
        <input class="inp" placeholder="Company Name" onChange={e=>setCompany(e.target.value)}/>
        <select class="inp" style={{width:"260px" }} onChange={e=>setWorkshop(e.target.value)}>
  <option value="" disabled selected hidden>Select Workshop</option>
  {workshopData?.map((value)=>{
  if(value.count > 0){
    return (<option value={value.workshop} >{value.workshop}</option>)
  }else{
    return (<option value={value.workshop} disabled>{value.workshop}</option>)
  }
  })}
 
</select>


        </div>

        <button onClick={()=>sendData()} style={{padding: "8px 42px" , borderRadius: "29px" , border: "none" , backgroundColor:"#FF8200" ,color: "white"}}>Submit</button>
    </div>
  )
}

export default Register