import React, {useState} from 'react'
import Login from './Login';
import Signup from './Signup';


function Auth() {
    const [method,setMethod] = useState('login') 
  return (
    <div className='container flex flex-col items-center justify-center m-auto'>
        <div className=' mt-16  shadow-md border border-slate-200 rounded-lg px-12 pb-10 flex flex-col items-center justify-center text-center'>
        <div className='flex flex-row mb-5 border-b border-slate-300'>
            <button className={'py-3 md:w-[150px] w-[100px] text-lg text-black border-r border-slate-300 '+(method==='login'?'font-semibold':'')} onClick={()=>setMethod('login')} >LogIn</button>
            <button className={'py-3 md:w-[150px] w-[100px] text-lg text-black '+(method==='signup'?'font-semibold':'')} onClick={()=>setMethod('signup')}>SignUp</button>
        </div>
        {method==='login'? <Login/>:<Signup/>}
        

        </div>
    </div>
  )
}

export default Auth