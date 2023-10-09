import React from 'react'
import {AiOutlineArrowLeft, AiOutlineArrowRight, AiOutlinePhone} from 'react-icons/ai'
const Profile = () => {
  return (
    <>
        
        <div className='mt-5 w-50 ml-5 d-flex flex-column justify-content-center align-items-center mx-auto'>
        <h1>Profile Page</h1>
        <div className="input-group mb-3">
        
  <span className="input-group-text" id="basic-addon1"><AiOutlineArrowRight/></span>
  <input type="text" className="form-control" placeholder="First Name" aria-label="Username" aria-describedby="basic-addon1"/>
</div>
<div className="input-group mb-3">
  <span className="input-group-text" id="basic-addon1"><AiOutlineArrowRight/></span>
  <input type="text" className="form-control" placeholder="Middle Name" aria-label="Username" aria-describedby="basic-addon1"/>
</div>
<div className="input-group mb-3">
  <span className="input-group-text" id="basic-addon1"><AiOutlineArrowRight/></span>
  <input type="text" className="form-control" placeholder="Last Name" aria-label="Username" aria-describedby="basic-addon1"/>
</div>

<div className="input-group mb-3">
  <input type="email" className="form-control" placeholder="Email" aria-label="email" aria-describedby="basic-addon2"/>
  <span className="input-group-text" id="basic-addon2"><AiOutlineArrowLeft/></span>
</div>

<div className="input-group mb-3">
  <span className="input-group-text" id="basic-addon3">Address</span>
  <input type="text" className="form-control" placeholder='Eg. Mumbai...' id="basic-url" aria-describedby="basic-addon3"/>
</div>

<div className="input-group mb-3">
  <span className="input-group-text">+91</span>
  <input type="number" className="form-control" aria-label="Amount (to the nearest dollar)"/>
  <span className="input-group-text"><AiOutlinePhone/></span>
</div>


        </div>
        
    </>
  )
}

export default Profile