import React, { useEffect, useState } from "react";
import "./login.css";
import OTP from "./OTP";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { Redirect } from "react-router-dom";

function LoginAgain(){
    let history = useHistory();
    const [email,setEmail] = useState();
    const [password,setPassword]  = useState();

 async function loggIn(){
     console.warn(email,password);
     let data = {email,password};
        // console.log(data);

      let result = await  fetch('http://192.168.1.180:5001/takenaka/login',{
          method:'POST',
          headers:{
            'Accept':'application/json',
            'Content-type':'applicationjson'
          },
          body:JSON.stringify(data)
        });
        result = await result.json();
        localStorage.setItem("data",JSON.stringify(result))
        history.push('/otp');
    }


 const FormSubmit = (e)=>{
     e.preventDefault();
 }
    return(
        <>
            <div className="main">
        <div className="fomDiv">
          <div className="content">
            <h2>Welcome to Takenaka</h2>
            <span>Start your business easily</span>
          </div>
          <form onSubmit={FormSubmit}>
            <input
              type="text"
              placeholder="Username"
              id="email"
              value={email}
              onChange={(e)=>setEmail(e.target.value)}
            />
            <input
              type="text"
              placeholder="Password"
              id="password"
              value={password}
              onChange={(e)=>setPassword(e.target.value)}
            />
            <button type="submit" onClick={loggIn}>Sign In</button>
          </form>
        </div>
      </div>
        </>
    )
}
export default LoginAgain;