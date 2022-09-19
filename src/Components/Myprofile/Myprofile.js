import axios from "axios";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "./myprofile.css";

function Myprofile() {
  let history = useHistory();
  const localdata = localStorage.getItem("data");
  const parseData = JSON.parse(localdata);
  // const data = [parseData];
  // console.log(parseData)

  let takId = parseData.data.user.id;


  const [takanaidenable, setTakanaidenable] = useState(true);
  const [disname, setDisname] = useState(true);
  const [disuname, setDisuname] = useState(true);
  const [disemail, setDisemail] = useState(true);
  const [disphone, setDisphone] = useState(true);
  const [disroleId, setRoleId] = useState(true);
  const [discity, setDiscity] = useState(true);
  const [discountry, setDiscountry] = useState(true);
  const [disaddress, setDisaddress] = useState(true);
  const [editBtn, setEditBtn] = useState(true);
  const [submitBtn, setSubmitBtn] = useState(false);
  const [cancelBtn, setCancelBtn] = useState(true);
  const [city,setCity] = useState();
  const [num,setNum] = useState();
  const [country,setCountry] = useState();
  const [address,setAddress] = useState();
  

  // const [takenaka_id,setTaka] = useState(parseData.data.signInUser.takenaka_id);

  const [savdata, setSavedata] = useState({
    //  "name":parseData.data.user.name,
    takenaka_id: parseData.data.user.takenaka_id,
    user_name: parseData.data.user.user_name,
    email: parseData.data.user.email,
    password: "",
    branchId: parseData.data.user.branchId,
    roleId: parseData.data.role,
    city: parseData.data.user.city,
    phone: parseData.data.user.phone,
    country: parseData.data.user.country,
    address: parseData.data.user.address,
    // "token":parseData.data.token,
  });

  // console.log(savdata.token)
  const inputHandler = (e) => {
    if (e.target.id === "takenaka_id") {
      setSavedata({ ...savdata, takenaka_id: e.target.value });
    }
    if (e.target.id === "name") {
      setSavedata({ ...savdata, name: e.target.value });
    }
    if (e.target.id === "username") {
      setSavedata({ ...savdata, user_name: e.target.value });
    }
    if (e.target.id === "email") {
      setSavedata({ ...savdata, email: e.target.value });
    }
    if (e.target.id === "city") {
      setSavedata({ ...savdata,city: e.target.value });
    }

    if (e.target.id === "roleid") {
      setSavedata({ ...savdata, roleId: e.target.value });
    }
    
  };

  const onFormSubmit = (e) => {
    e.preventDefault();
  };

  const saveData = () => {
    // console.log(city);
    // console.log(num);
    // console.log(country);
   
    axios
      .post(
        `${process.env.REACT_APP_BASE_URL}/takenaka/updateUser/${takId}`,
        {
          phone: num,
          address: address,
          country: country,
          city: city,
        },
        {
          headers: {
            token: parseData.data.token,
          },
        }
      )
      .then((response) => {
        setSavedata(response.savdata);
        console.log(response);
        if (response.status === 200) {
          history.push("/");
          alert("Profile Updated");
          localStorage.setItem("data", JSON.stringify(response));
        } else {
          alert("Profile is not Updated");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const editClick = (e) => {
    setTakanaidenable(true);
    setDisname(true);
    setDisuname(true);
    setDisemail(true);
    setDiscity(false);
    setDisphone(false);
    setRoleId(true);
    setDiscountry(false);
    setDisaddress(false);
    setEditBtn(false);
  };

  const OnCancelBtn = () => {
    setCancelBtn(false);
    setEditBtn(true);
    setTakanaidenable(true);
    setDisname(true);
    setDisuname(true);
    setDisemail(true);
    setDiscity(true);
    setDisphone(true);
    setRoleId(true);
    setDiscountry(true);
    setDisaddress(true);
  };

  return (
    <>
      <div>
        <h3>User Name : {parseData.data.user.name}</h3>

        <form onSubmit={onFormSubmit}>
          <div className="FormDiv1">
            <div className="mb-3">
              <label className="form-label">Takenake id</label>
              <input
                type="text"
                id="takenaka_id"
                className="form-control"
                placeholder="Takenaka id"
                value={savdata?.takenaka_id}
                disabled={takanaidenable}
                onChange={inputHandler}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">User Name</label>
              <input
                type="text"
                id="username"
                className="form-control"
                placeholder="Username"
                disabled={disuname}
                value={savdata?.user_name}
                onChange={inputHandler}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Email</label>
              <input
                type="email"
                id="email"
                className="form-control"
                placeholder="Email"
                disabled={disemail}
                value={savdata?.email}
                onChange={inputHandler}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">City</label>
              <input
                type="text"
                id="city"
                className="form-control"
                placeholder="City"
                disabled={discity}
                value={editBtn?savdata.city:city}
                onChange={(e)=>setCity(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Contact No</label>
              <input
                type="text"
                // id="phone"
                className="form-control"
                placeholder="Contact No"
                disabled={disphone}
                value={editBtn?savdata.phone:num}
                onChange={(e)=>setNum(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Role </label>
              <input
                type="text"
                id="roleid"
                className="form-control"
                placeholder="Role"
                disabled={disroleId}
                value={savdata?.roleId}
                onChange={inputHandler}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Name</label>
              <input
                type="text"
                id="name"
                className="form-control"
                placeholder="Name"
                disabled={disname}
                value={savdata?.name}
                onChange={inputHandler}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Country</label>
              <input
                type="text"
                // id="country"
                className="form-control"
                placeholder="Country"
                disabled={discountry}
                value={editBtn?savdata.country:country}
                onChange={(e)=>setCountry(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Address</label>
              <input
                type="text"
                // id="address"
                className="form-control"
                placeholder="Address"
                disabled={disaddress}
                value={editBtn?savdata.address:address}
                onChange={(e)=>setAddress(e.target.value)}
              />
            </div>
          </div>
          <div className="button">
            {editBtn ? (
              <button className="btn btn-primary" onClick={editClick}>
                Edit
              </button>
            ) : (
              <>
                <button
                  className="btn btn-primary"
                  type="submit"
                  onClick={saveData}
                >
                  Update
                </button>
                <button
                  className="btn btn-primary"
                  style={{ marginLeft: "10px" }}
                  onClick={OnCancelBtn}
                >
                  Cancel
                </button>
              </>
            )}
          </div>
        </form>
      </div>
    </>
  );
}
export default Myprofile;
