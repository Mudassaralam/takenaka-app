import axios from 'axios';
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import OTP from '../Login/OTP';

function Forgetpassword(){
    
    let history = useHistory();

    const [forget,setForget] = useState();

    const savData = ()=>{
        console.log(forget);
        axios.put(`${process.env.REACT_APP_BASE_URL}/takenaka/forgetPassword`,{
            email:forget,
        }).then((response)=>{
            setForget(response.forget);
            // console.log(response);
            if(response.status === 200){
                alert('Check Your Email');
                history.push('/login')
            }else{
                alert('Reset Again')
            }
        }).catch((error)=>{
            // console.log('Put Erros',error)
        })
    }
    const onFormsubmit = (e)=>{
        e.preventDefault();
    }
    return(
        <>
        <div className="main">
        <div className="fomDiv">
          <div className="content">
            <h2>Reset Password</h2>
          </div>
          <form onSubmit={onFormsubmit}>
            <input type="email" placeholder="example@mail.com" id='email' value={forget} onChange={(e)=>setForget(e.target.value)}/>
            <button onClick={savData}>Reset Password</button>
          </form>
        </div>
      </div>
        </>
    )
}
export default Forgetpassword;