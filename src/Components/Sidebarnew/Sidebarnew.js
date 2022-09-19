import React from 'react';
import { NavLink } from 'react-router-dom'
function Sidebarrnew(){

    return(
        <>
            <div className='container fluid side bg-danger'>
            <div className='row'>
            <div className='col-lg-12'>
                <NavLink>
                    <div className='nav-item'>
                        <li>Dashboard</li>
                    </div>
                </NavLink>
            </div>

            </div>

            </div>
        </>
    )
}
export default Sidebarrnew;