import React, { useState } from "react";
import Myprofile from "../Myprofile/Myprofile";
import UpdatePassword from "../Myprofile/UpdatePassword";
import "./mainprofile.css";
function MainProfile(){

    const [myprofile, setMyprofile] = useState(true);
    const [updatepassword,setUpdatePassword] = useState(false);

    const MyProfileFun = ()=>{
        setMyprofile(true);
        setUpdatePassword(false);
    }
    const MyPasswordFun = ()=>{
        setMyprofile(false);
        setUpdatePassword(true);
    }
    return(
        <>
             <div id="mainprofile">
                    <div>
                        <div>
                            <button className="btn btn danger tabsbutton" onClick={MyProfileFun}>My Profile</button>
                            <button className="btn btn danger tabsbutton" onClick={MyPasswordFun}>Update Password</button>
                        </div>
                        <div>
                            {myprofile && 
                            <Myprofile />
                            }
                            {
                                updatepassword && 
                                <UpdatePassword />
                            }
                        </div>
                    </div>
             </div>

        </>
    )
}
export default MainProfile;