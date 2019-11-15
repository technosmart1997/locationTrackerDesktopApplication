import React from 'react';
import { NavLink } from 'react-router-dom';

const SignedOutLink = () => {
    return (
       <ul className="nav navbar-nav navbar-right">
            <li>
                <NavLink to='/login'>Login</NavLink>
            </li>
            
        </ul> 
    )

}


export default SignedOutLink;