import React from 'react';

import { useContext } from 'react';
import { FaGoogle,FaGithub } from "react-icons/fa";
import { useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';

const Login = () => {
    const {googleSignIn,emailSignIn,githubSignIn}=useContext(AuthContext)
    const navigate = useNavigate()
    const location = useLocation()
const from = location.state?.from?.pathname || '/'
 

    const handleSignIn=event=>{
      event.preventDefault()
      const form = event.target;
      const email = form.email.value;
      const password = form.password.value;

      emailSignIn(email,password)
      .then((data)=>{
        console.log(data)
        form.reset()
     
      })
      
      navigate(from , {replace:true})
      .catch(e=>console.error(e))

    }

    const handleGoogleSignIn=()=>{
        googleSignIn()
        .then((data)=>{
          console.log(data)
          navigate('/')
        }) 
        .catch(e=>console.error(e))
    }
    const handleGithubSignIn=()=>{
        githubSignIn()
        .then((data)=>{
          console.log(data)
          navigate('/')
        })
        .catch(e=>console.error(e))
    }
    return (
      <>
     
        <div className="hero min-h-screen bg-base-200">
         
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
        
      <h1 className="text-5xl font-bold">Login now!</h1>
      <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>


      <div className="divider">OR</div>
      <button onClick={handleGoogleSignIn} className="btn btn-outline btn-secondary  rounded-full ml-40"><FaGoogle className='mr-3'></FaGoogle>Sign in with Google</button>
      <button onClick={handleGithubSignIn} className="btn btn-outline btn-warning  rounded-full ml-32"><FaGithub className='mr-3'></FaGithub>Sign in with Github</button>
    </div>
   
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handleSignIn} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="text" name='email' placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name='password' placeholder="password" className="input input-bordered" required />
          <label className="label">
            <a href="/" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
            <input className="btn btn-primary" type="submit" value="Login" />
          
        </div>
      </form>
    </div>
  </div>
</div></>
    );
};

export default Login;