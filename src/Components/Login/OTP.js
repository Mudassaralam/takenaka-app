import React, { useEffect, useState } from "react";
import "./login.css";
import { useHistory } from 'react-router-dom';
import axios from "axios";
function OTP() {
  let history = useHistory();
  const [otp,setOtp] = useState();

  const inputHandler = (e)=>{
     if(e.target.id === 'otp'){
       setOtp(e.target.value);
     }
  }

  

    const SaveData = ()=>{
      console.log(otp);
      const cont = localStorage.getItem('data');
      const ema = JSON.parse(cont);
      console.log(ema.data)
      axios.post(`${process.env.REACT_APP_BASE_URL}/takenaka/otp`,{
        email:ema.data.signInUser.email,
        otp:otp,
      }).then((response)=>{
        setOtp(response.otp);
        console.log(response);
        if(response.status === 200){
          history.push('/dashboard');
          alert('OTP Is Verified');
          localStorage.setItem("data", JSON.stringify(response));

        }else{
          alert('OTP Is Not Verified');
        }
        
      })
    }


    const onFormSubmit = (e)=>{
      e.preventDefault();
    }

  return (
    <>
      <div className="main">
        <div className="fomDiv">
          <div className="content">
            <h2>Enter Your OTP</h2>
          </div>
          <form onSubmit={onFormSubmit}>
            <input type="text" placeholder="OTP" id="otp" onChange={inputHandler} value={otp}/>
            <button onClick={SaveData} >Verify</button>
          </form>
        </div>
      </div>
    </>
  );
}
export default OTP;
