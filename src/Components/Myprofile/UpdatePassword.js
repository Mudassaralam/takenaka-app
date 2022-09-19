import axios from "axios";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";

function UpdatePassword() {

  const history = useHistory();
  const localdata = localStorage.getItem("data");
  const parseData = JSON.parse(localdata);

  // console.log(parseData.data.token);
  // console.log(parseData.data.user.id);
  let userId = parseData.data.user.id

    
    const [data,setData] =  useState({
        password:'',
        newPassword:'',
        confirmPassword:''
    })

    const inputHander = (e)=>{
        if(e.target.id ==='password'){
            setData({...data, password: e.target.value});
        }
        if(e.target.id === 'newpassword'){
          setData({...data, newPassword: e.target.value});
        }
        if(e.target.id === 'confirmpassword'){
          setData({...data, confirmPassword: e.target.value});
        }
    }

    const savData = ()=>{
      console.log(data);
      axios.put(`http://192.168.1.180:5001/takenaka/updatePassword/${userId}`,{
        password:data.password,
        newPassword:data.newPassword,
        confirmPassword:data.confirmPassword
      },{
        headers:{
          token:parseData.data.token,
        },
      }).then((response) => {
        setData(response.data);
        console.log(response);
        if(response.status === 200){
          history.push('/');
          alert('Password Is Updated')
        }else(
          alert('Password is Not Update')
        )
      }).catch((error) => {
        console.log('Errors are:',error)
      })
    }
    const formSubmit = (e)=>{
      e.preventDefault();
    }
  return (
    <>
      <div>
        <form onSubmit={formSubmit}>
          <div className="mb-3">
            <label className="form-label">Password</label>
            <input
              type="text"
              id="password"
              className="form-control"
              placeholder="Password"
              value={data.password}
              onChange={inputHander}

            />
          </div>
          <div className="mb-3">
            <label className="form-label">New Password</label>
            <input
              type="text"
              id="newpassword"
              className="form-control"
              placeholder="Password"
              onChange={inputHander}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Confirm Password</label>
            <input
              type="text"
              id="confirmpassword"
              className="form-control"
              placeholder="Password"
              onChange={inputHander}
            />
          </div>
          <div className="mb-3">
          <button className="btn btn-danger" onClick={savData}>Update Password</button>
          </div>
        </form>
      </div>
    </>
  );
}
export default UpdatePassword;
