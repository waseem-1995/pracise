import React, { useEffect, useState } from 'react';
import useRef from "react";

const Form = () => {
   
    const [form,setForm]=useState(
        {
            // username:"",
            // email:"",
            // password:"",
            // Age:0,
            // isIndian:false,
        }
    );
    const onChange=(e)=>{
     let {type,name,value,checked,files}=e.target;
     console.log(type,name,value,checked,files);
    if(type==="checkbox"){
        setForm({
            ...form,
            [name]:checked,
        })
    }
   else if(type==="file"){
        setForm({
            ...form,
            [name]:files,
        })
    }
    else{
        setForm({
            ...form,
            [name]:value,
        })
    }
    
    }
    const handleOnSubmit=(e)=>{
        e.preventDefault();
        console.log(form);
    }
   
  return (
    <div>
        Form
        <form onSubmit={handleOnSubmit}>
            <div>
                <label htmlFor="">Name:</label>
                <input type="text"  placeholder="Enter Name..." value={form.name} onChange={onChange}
                 name="username"/>
            </div>
            <div>
                <label htmlFor="">Email:</label>
                <input type="text"  placeholder="Enter Email..." value={form.email} onChange={onChange} name="email"/>
            </div>
            <div>
                <label htmlFor="">Password:</label>
                <input type="text"  placeholder="Enter password..." value={form.password} onChange={onChange} name="password"/>
            </div>
            <div>
                <label htmlFor="">Age:</label>
                <input type="text"  placeholder="Enter Age..." value={form.Age} onChange={onChange} name="Age"/>
            </div>
            <div>
            <label htmlFor="">City:</label>
                <select name="city" value={form.city} onChange={onChange}>
                    <option value="Delhi">Delhi</option>
                    <option value="Mumbai">Mumbai</option>
                    <option value="hyderabad">hyderabad</option>
                    <option value="Bangaluru">Bangaluru</option>
                </select>
               
            </div>
            <div>
                <input type="checkbox"  onChange={onChange} name="isIndian" checked={form.isIndian} />
                <label htmlFor="">:Is Indian</label>
            </div>
            <div>
                
                <input type="radio"   onChange={onChange} name="gender" value="Male"/>
                <label htmlFor="">Male</label>
            </div>
            <div>
                
                <input type="radio"    onChange={onChange} name="gender" value="Female"/>
                <label htmlFor="">Female</label>
            </div>
            <div>
                <label htmlFor="">User resume</label>
                <input type="file"  name="resume" checked={form.resume} accept="image/png,image/jpeg,application/pdf"/ >
            </div>
            <button type="submit">Submit</button>
        </form>
    </div>
  )
}

export default Form