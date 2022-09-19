import React from 'react';
import { AiOutlineHome , AiOutlineUser} from "react-icons/ai";
import { FaRocket,FaRegFolderOpen} from "react-icons/fa";
import { BsBuilding,BsFillBookmarkHeartFill,BsTablet } from "react-icons/bs";
import './Sidebar.css'
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import { Redirect } from 'react-router-dom';
import Login from '../Login/Login';
function Sidebar(){
    let history = useHistory();
        
    const  removeData = ()=>{
        localStorage.removeItem('data');
        history.push('/login');
        
    }
    return(
        <>
          <div className='sidebar'>
              <div>
              <div>
                  <li className='sidbar-links active '> <AiOutlineHome className='icon-s '/><a href='#' className='activea' to='/dashboards'>Dashboard</a></li>
                  </div>
                  <li className='sidbar-links'> <AiOutlineUser className='icon-s'/><Link to='/usermanagement'>User Management</Link></li>
                  <li className='sidbar-links'> <BsBuilding className='icon-s'/><Link>Role Management</Link></li>
                  <li className='sidbar-links'> <BsBuilding className='icon-s'/><Link to='/projectmanagement'>Project Management</Link></li>
                  <li className='sidbar-links'> <BsBuilding className='icon-s'/><a href='#'><Link to='/'>Issues</Link></a></li>
                  <li className='sidbar-links'> <BsFillBookmarkHeartFill className='icon-s'/><a href='#'>Log Files</a></li>
                  <li className='sidbar-links'> <BsTablet className='icon-s'/><a href='#'>Archive Data</a></li>
                  <li className='sidbar-links'> <BsBuilding className='icon-s'/><a href='#'>Report</a></li>
                  <li className='sidbar-links'> <FaRocket className='icon-s'/><a href='#'>Configurator</a></li>
                  <li className='sidbar-links'> <BsBuilding className='icon-s'/><a href='#'>Themes</a></li>
                  <hr/>
                  <li className='sidbar-links'  onClick={removeData}> <FaRegFolderOpen className='icon-s'/><Link to='/'>Log Out</Link></li>
              </div>
          </div>  
        </>
    )
}
export default Sidebar;