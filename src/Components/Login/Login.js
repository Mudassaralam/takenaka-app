import React, { useEffect, useState } from "react";
import "./login.css";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { Redirect, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import Forgetpassword from "../ForgetPassword/Forgetpassword";

function Login() {
  let history = useHistory();

// console.log(process.env.REACT_APP_BASE_URL)

  useEffect(()=>{
    if(localStorage.getItem('data')){
      history.push('/')
    }
  },[]);  
 

  const [data, setData] = useState({
    email: "",
    password: "",
    
  });
  const [showPasswd,setShowPasswd] = useState(false);

  const inputHander = (e) => {
    if (e.target.id === "email") {
      setData({ ...data, email: e.target.value });
    }
    if (e.target.id === "password") {
      setData({ ...data, password: e.target.value });
    }
    // console.log(data)
  };
  // useEffect(() => {
  //   localStorage.setItem("data", JSON.stringify(data));
  //   // history.push('/otp');
  // }, [data]);
  // http://192.168.1.180:5001/takenaka/project

    const SaveData = ()=>{
      axios
      .post(`${process.env.REACT_APP_BASE_URL}/takenaka/login`, {
        email: data.email,
        password: data.password,
      })
      .then((response) => {
        setData(response.data);
        console.log(response.status);
        if(response.status === 200){
          history.push('/otp')
          console.log('SUCCUSS');
          localStorage.setItem("data", JSON.stringify(response.data));
          alert('SUCCUSSFULLY LOGGEDIN')
        }else{
          console.log('Password not Matched')
          alert('PASSWORD OR EMAIL NOT MATCHED.')
        }
      });
    }
  const onFormSubmit = (e) => {
    e.preventDefault();

  };

  const showPassword = ()=>{
    setShowPasswd(!showPasswd);
  }

  return (
    <>
      <div className="main">
        <div className="fomDiv">
          <div className="content">
            <h2>Welcome to Takenaka</h2>
            <span>Start your business easily</span>
          </div>
          <form onSubmit={onFormSubmit}>
            <input
              type="text"
              placeholder="Username"
              id="email"
              value={data.email}
              onChange={inputHander}
            />
            <input
              type={showPasswd?'text':'password'}
              placeholder="Password"
              id="password"m 
              value={data.password}
              onChange={inputHander}
            />
            <button onClick={showPassword}>{showPasswd?'Hide':'Show'}</button>
            <button type="submit" onClick={SaveData}>Sign In</button>
            <p ><Link style={{color:'black'}} to='/forgetpassword'>Forget Password?</Link> </p>
          </form>
        </div>
      
      </div>
    </>
  );
}
export default Login;
