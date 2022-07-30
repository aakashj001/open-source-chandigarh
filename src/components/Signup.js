import axios from "axios";
import React,{useState} from "react";
import { FcGoogle } from "react-icons/fc";

function Signup() {
  const [signupInput, setSignup] = useState({
    email: "",
    password: "",
    rptpass: "",
  });
  const handleInput = (e) => {
    setSignup({ ...signupInput, [e.target.name]: e.target.value });
  };
  const signupSubmit = (e) => {
    e.preventDefault();
    if (signupInput.password === signupInput.rptpass) {
      const data = {
        email: signupInput.email,
        password: signupInput.password,
      };
      // Post Data To Server
      axios.post('api/signup').then(res=>{
        
      })
      console.log(data);
    } else {
      alert('Repeat Password must match!')
    }
  };
  return (
    <div>
      <h2 className="mt-3">SignUp</h2>
      <form
        onSubmit={signupSubmit}
        className="flex flex-col items-center justify-center"
      >
        <input
          className="m-2 outline-none py-3 px-2 md:w-[300px] w-[250px] border-2 border-slate-200"
          name="email"
          type="email"
          onChange={handleInput}
          value={signupInput.email}
          placeholder="Email.."
        />
        <input
          className="m-2 outline-none py-3 px-2 md:w-[300px] w-[250px] border-2 border-slate-200"
          name="password"
          type="password"
          onChange={handleInput}
          value={signupInput.password}
          placeholder="Password.."
        />
        <input
          className="m-2 outline-none py-3 px-2 md:w-[300px] w-[250px] border-2 border-slate-200"
          name="rptpass"
          type="password"
          onChange={handleInput}
          value={signupInput.rptpass}
          placeholder="Repeat Password.."
        />

        <button className="py-2 md:w-[300px] w-[250px] bg-slate-800 text-white mt-5 active:scale-95 transition-all ease-in-out">
          Sign Up
        </button>
        {/* <button className='py-2 w-[300px] bg-red-500 text-white mt-2 active:scale-95 transition-all ease-in-out'>SignUp</button> */}
      </form>
      <div className="py-2 md:w-[300px] w-[250px] m-2 border-2 border-slate-500 flex flex-row items-center justify-center">
        <FcGoogle className="mr-2" size={25} />
        <font>Sign Up With Google</font>
      </div>
    </div>
  );
}

export default Signup;
