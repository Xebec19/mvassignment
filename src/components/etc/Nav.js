import React from 'react';
import {
  Link,
  useLocation
} from "react-router-dom";
import 'tachyons';

function Nav(){
  const id = 'asd';
  const location = useLocation();
  console.log(`location is ${location.pathname}`);
  let navLinks;
  if(location.pathname === '/' || location.pathname === '/register'){
  	navLinks = (
  		<div>
  		<Link id="a1" to="/register" 
  		className="link dim white dib mr3">
	      Register
	    </Link>
	    <Link to="/" className="link dim white dib mr3">
	      Login
	    </Link>
	    </div>
  	)
  }
  else if(location.pathname.includes('dashboard')){
  	navLinks = (
  		<div>
  		<Link to="/" className="link dim white dib mr3">
	      Logout
	    </Link>
	    <Link to={`/dashboard/view/${id}`} className="link dim white dib mr3">
	      View
	    </Link>
	    <Link to={`/dashboard/create/${id}`} className="link dim white dib mr3">
	      Create
	    </Link>
	    </div>
	    )
  	}
  	else{
  		console.log('Unknown Link ',location.pathname)
  		navLinks = (
  		  <Link to="/" className="link dim white dib mr3">
	      Logout
	    </Link>
  			)
  	}
  return(
    <header className="bg-black-90 fixed w-100 ph3 pv3 pv4-ns ph4-m ph5-l">
	  <nav className="f6 fw6 ttu tracked">
	    {navLinks}
	  </nav>
	</header>
  	)
}

export default Nav;