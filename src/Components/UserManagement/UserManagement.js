import React, { useEffect, useState } from "react";
import "./Usermanagement.css";
import { Col, Table } from "react-bootstrap";
import { FaCloudDownloadAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import axios from "axios";
import { Modal, Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";

function UserManagement() {
  // Get Data From Localstorage
  const localdata = localStorage.getItem("data");
  const parseData = JSON.parse(localdata);
  // const [userstate, setUserstate] = useState(null);
  let takId = parseData.data.user.id;
   
  let history  = useHistory();

  // Get API to show Users

  const [user, setUser] = useState([]);

  


  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BASE_URL}/takenaka/Users/${takId}`)
      .then((response) => {
        const post = response.data;
        setUser(post);
      });
  }, []);

  // Deacive User Function

  const InactiveUser = (e) => {
    console.log(e.target.value);
    const data = { id: e.target.value };
    const tokenData = parseData.data.token;

    axios
      .delete(`${process.env.REACT_APP_BASE_URL}/takenaka/inactiveUser`, {
        headers: {
          token: tokenData,
        },
        data,
      })
      .then((response) => {
        if (response.status === 200) {
          alert("User is Deactivetd");
        } else {
          alert("User is not Deactivated");
        }
      });
  };

  // Active User Functions

  const ActiveUser = (e) => {
    console.log(e.target.value);
    const data = { id: e.target.value };
    const tokenData = parseData.data.token;

    axios
      .post(`${process.env.REACT_APP_BASE_URL}/takenaka/activeUser`, data, {
        headers: {
          token: tokenData,
        },
      })
      .then((response) => {
        if (response.status === 200) {
          alert("User is Activated");
        } else {
          alert("User is not Activated");
        }
      });
  };

  //For search Filter

  function myFunction() {
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    table = document.getElementById("myTable");
    tr = table.getElementsByTagName("tr");
    for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("td")[2];
      if (td) {
        txtValue = td.textContent || td.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
        }
      }
    }
  }

  //  For Open Modal

  const [showModal, setShow] = useState(false);

  const handleClose = () => setShow(false);

  const handleShow = () => {
    setShow(true);

    for(let i = 0; i<branches.length; i++){
      arr.push(branches[i].value)
    }
    console.log(arr)
    
  };

  //Update Branch Form

  const checkBoxFormSubmit = (e) => {
    e.preventDefault();
    console.log(arr)
  };

  //Get API for Update Branches

  const [branches, setBranches] = useState([]);

  const [arr, setArr] = useState([]);



  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BASE_URL}/takenaka/branches`)
      .then((response) => {
        const TakanBranches = response.data;
        console.log(response)
        setBranches(TakanBranches);
      });
  }, []);

  const checkHandler = (e) => {

    // const value = e.target.value;
    // setPerson((prev) =>
    //   arr.includes(value)
    //     ? prev.filter((cur) => cur !== value)
    //     : [...prev, e.target.value]
    // );

    if(e.target.checked === true){
      arr.push(e.target.value);
    }else{
      var indexVal = arr.indexOf(e.target.value);
      if(indexVal !== -1){
        arr.splice(indexVal,1);
      }
    }

    console.log(arr)
   
  };


  for(let i=0; i<user.length;i++){
     var userids = user[i].userId;
    //  console.log(userids);
  }

  const branchUpdate = ()=>{
    
    const tokenData = parseData.data.token;
    // console.log(tokenData);

    axios.put(`${process.env.REACT_APP_BASE_URL}/takenaka/updateBranches`,{
      userId: userids,
      branches:arr
      
    },{
      headers:{
          token:tokenData
      }
    }).then((response)=>{
      console.log(response);
      setArr(response.arr);
      if(response.status === 200){
        alert('Branch Is Updated');
        history.push('/')
      }else{
        alert("Branch Is Not Updated")
      }
    }).catch((error)=>{
      console.log(error)
    })


  }


  return (
    <>
      <div className="">
        <div id="Usermanagment">
          <div className="d-flex align-items-center">
            <div>
              <h5>User Management</h5>
              <p>Add and check your users here</p>
            </div>
            <div className="button-add">
              <Link className="btn btn-primary">Add User</Link>
            </div>
          </div>
          <div id="table-div">
            <input
              type="text"
              id="myInput"
              // value={query}
              onKeyUp={myFunction}
              placeholder="To find..."
              className="form-control"
              style={{ width: "30%", marginTop: "10px", marginBottom: "10px" }}
            />
            <table className="table" id="myTable">
              <thead>
                <tr>
                  <td>
                    <b>UserId</b>
                  </td>
                  <td>
                    <b>Takanaka ID</b>
                  </td>
                  <td>
                    <b>Name</b>
                  </td>
                  <td>
                    <b>Country</b>
                  </td>
                  <td>
                    <b>Email</b>
                  </td>
                  <td>
                    <b>Branch Id</b>
                  </td>
                  <td>
                    <b>Role</b>
                  </td>
                  <td>
                    <b>Status</b>
                  </td>
                  <td>
                    <b>Update</b>
                  </td>
                  <td>
                    <b>Action</b>
                  </td>
                </tr>
              </thead>
              <tbody>
                {user.map((items, key) => {
                  return (
                    <>
                      <tr>
                        <td>{items.userId}</td>
                        <td>{items.takenaka_id}</td>
                        <td>{items.name}</td>
                        <td>{items.country}</td>
                        <td>{items.email}</td>
                        <td>{items.branch}</td>
                        <td>{items.role}</td>
                        <td>
                          <button
                            className={`${
                              items.active === "yes" ? "Yess" : "No"
                            }`}
                          >
                            {items.active === "yes" ? "Yess" : "No"}
                          </button>
                        </td>
                        <td>
                          <button
                            className="updatebtn"
                            type="button"
                            classname="btn btn-primary"
                            onClick={handleShow}
                          >
                            Update
                          </button>
                        </td>
                        <td>
                          {items.active === "yes" ? (
                            <button
                              value={items.userId}
                              className="Deactive"
                              onClick={InactiveUser}
                            >
                              Deactive
                            </button>
                          ) : (
                            <button
                              value={items.userId}
                              className="Active"
                              onClick={ActiveUser}
                            >
                              Active
                            </button>
                          )}
                        </td>
                      </tr>
                    </>
                  );
                })}
              </tbody>
            </table>
          </div>

          <div id="Modl">
            <Modal show={showModal} onHide={handleClose}>
              <Modal.Body>
                <form onSubmit={checkBoxFormSubmit}>
                  <div className="mainCheckBoxDiv">
                    {branches.map((items, index) => {
                      return (
                        <div className="AllCheckBox">
                          <input
                            id="checkbox"
                            type="checkbox"
                            defaultChecked={true}
                            name="ChekcBox"
                            value={items.value}
                            onChange={checkHandler}
                          />
                          <label>{items.label}</label>
                        </div>
                      );
                    })}
                    <button className="btn btn-outline-info btn-sm mt-2" type="submit" onClick={branchUpdate}>
                      Submit
                    </button>
                  </div>
                </form>
              </Modal.Body>
            </Modal>
          </div>
        </div>
      </div>
    </>
  );
}
export default UserManagement;
