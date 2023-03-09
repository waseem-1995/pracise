import React, { useContext, useState } from 'react'
import { AuthContext } from '../context/Authcontext';

const Login = () => {
     
    const {login}=useContext(AuthContext);

    const [logindata,setlogindata]=useState({});

    const  handleonChange=(e)=>{
        let {name,value}=e.target;

        setlogindata({...logindata,[name]:value})
    }

    const handleSubmit=(e)=>{
        e.preventDefault();
        //TODO
        login();
        console.log(logindata)
    }

  return (
    <div>Login

        <form onSubmit={handleSubmit}>

            <input name="email" type="text" placeholder='email' onChange={handleonChange} />
            <input name="password" type="password"  placeholder='Enter passoword ...' onChange={handleonChange} />
            <button type='submit'> login</button>
        </form>
    </div>
  )
}

export default Login