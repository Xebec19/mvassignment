import React,{useEffect,useState} from 'react';
import firebase from 'firebase';
import Nav from '../etc/Nav';
import {auth} from '../../config/firebase';
import {
  Link
} from "react-router-dom";
import 'tachyons';

function Login(){
	const [email,setEmail] = useState('');
	const [password,setPassword] = useState('');
	const [error,setError] = useState('');
	function valdEmail(){
		if(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email))
		{
		return (true)
		}
		return (false)
		}

	function handleSubmit(props){
	if(email==='' || password==='' || !valdEmail()){ 
	setError('Invalid credentials');
	return 0;
	} 
	else{
	auth().signInWithEmailAndPassword(email,password).then((userCredential) => {
	var user = userCredential.user;
	console.log(user);
	console.log(userCredential.user.email);
	setError(null);
	})
	.catch((error) => {
	setError(error.message);
	console.log(error.message);
	})


	}  //else ends here
	}
	return(
		<div>
		<Nav />
	{/*this article makes things centered*/}
		<article className="vh-100 dt w-100">
			<div className="dtc v-mid tc black ph3 ph4-l">
				{/*Form for login/signup*/}
				<main className="pa4 black-80 tc dib br3 pa3 ma2 grow bw shadow-5">
				  <div className="measure center">
				    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
				      <legend className="f4 fw6 ph0 mh0">
				      Sign In
				      </legend>
				      <div className="mt3">
				        <label className="db fw6 lh-copy f6" htmlFor="email-address">
				        Email
				        </label>
				        <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="email" name="email-address"  id="email-address" 
				        onChange={(e) => setEmail(e.target.value)}/>
				      </div>
				      <div className="mv3">
				        <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
				        <input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password" name="password"  id="password" 
				        onChange = {(e) => setPassword(e.target.value)}/>
				      </div>
				      
				    </fieldset>
				    {error && <p style={{color:"red"}}> Invalid </p>}
				    <div className="">
				      <Link 
				      className="b ph3 link pv2 input-reset ba b--black black bg-transparent dim pointer f6 dib" 
				      onClick={() => handleSubmit()}
				      to={`dashboard/${email}`}>
				      Login
				      </Link>
				    </div>
				    <div className="lh-copy mt3">
				      <Link to="register" className="f6 link dim black db">Need an account ?</Link>
				      
				    </div>
				  </div>
				</main>
			</div>
		</article>
		</div>
		)
}

export default Login;
