import React, { useContext, useState } from "react";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider/AuthProvider";
import useToken from "../../hooks/useToken";

const Register = () => {
  const { emailSignUp, googleSignIn, githubSignIn, updateUser } =
    useContext(AuthContext);
    const [createdUserEmail, setCreatedUserEmail] = useState('')
  const [token] = useToken(createdUserEmail)
  const navigate = useNavigate();
  if(token){
  navigate('/')
  }


  const handleSignUp = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    const name = form.name.value;
    const photoURL = form.photoUrl.value;
    console.log(email, password);

    emailSignUp(email, password)
      .then((data) => {
        form.reset();

        handleUpdateProfile(name, photoURL,email);
        console.log(data.user);
      })

      .catch((e) => console.log(e));
  };

  const handleUpdateProfile = (name, photoUrl,email) => {
    const profile = {
      displayName: name,
      photoURL: photoUrl,
    };
    updateUser(profile)
      .then(() => {
        saveUser(name,email)
       
      })
      .catch((e) => console.log(e));
  };

  const saveUser = (name, email) => {
    const user = {
      name,
      email,
     
    };
    fetch("http://localhost:5000/users", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then(() => {
       
        setCreatedUserEmail(email)
        
      })
      .catch((e) => console.log(e));
  };

  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((data) => {
        console.log(data);
        navigate("/");
      })
      .catch((e) => console.error(e));
  };
  const handleGithubSignIn = () => {
    githubSignIn()
      .then((data) => {
        console.log(data);
        navigate("/");
      })
      .catch((e) => console.error(e));
  };
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Register now!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>

          <div className="divider">OR</div>
          <button
            onClick={handleGoogleSignIn}
            className="btn btn-outline btn-secondary  rounded-full ml-40"
          >
            <FaGoogle className="mr-3"></FaGoogle>Sign Up with Google
          </button>
          <button
            onClick={handleGithubSignIn}
            className="btn btn-outline btn-warning  rounded-full ml-32"
          >
            <FaGithub className="mr-3"></FaGithub>Sign Up with Github
          </button>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleSignUp} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Full Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="Enter Full Name"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="Enter Email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo URL</span>
              </label>
              <input
                type="text"
                name="photoUrl"
                placeholder="Enter Photo URL"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="Enter Password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <a href="#!" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <input
                className="btn btn-primary"
                type="submit"
                value="Register"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
