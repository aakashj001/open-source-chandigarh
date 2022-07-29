import React, {useState} from 'react'
import { FcGoogle } from "react-icons/fc";


function Login() {

  const [loginInput,setLogin]= useState({
    email:'',
    password:'',
  })
  const handleInput = (e) =>{
    setLogin({...loginInput,[e.target.name]: e.target.value})
  }
  const loginSubmit = (e)=>{
    e.preventDefault();
    const data ={
      email:loginInput.email,
      password:loginInput.password,
    }
    console.log(data);
  }
  return (
    <div>
        <h2 className='mt-3'>login to continue...</h2>
    <form onSubmit={loginSubmit} className='flex flex-col items-center justify-center'>

        <input className='m-2 outline-none py-3 px-2 md:w-[300px] w-[250px] border-2 border-slate-200'name='email' type='email' placeholder='Email..' onChange={handleInput} value={loginInput.email}/>
        <input className='m-2 outline-none py-3 px-2 md:w-[300px] w-[250px] border-2 border-slate-200'name='password' type='password' placeholder='Password..' onChange={handleInput} value={loginInput.password}/>

        <button className='py-2 md:w-[300px] w-[250px] bg-slate-800 text-white mt-5 active:scale-95 transition-all ease-in-out'>LogIn</button>
        {/* <button className='py-2 w-[300px] bg-red-500 text-white mt-2 active:scale-95 transition-all ease-in-out'>SignUp</button> */}
    </form>
    <div className='py-2 md:w-[300px] w-[250px] m-2 border-2 border-slate-500 flex flex-row items-center justify-center'>
        <FcGoogle className='mr-2' size={25}/>
        <font>Sign In With Google</font>
    </div>
    </div>
  )
}

export default Login