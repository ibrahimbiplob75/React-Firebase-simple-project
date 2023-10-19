
import { Link } from "react-router-dom";

import { useContext, useState } from "react";

import { Context } from "../../provider/AuthContext";


const LogIn = () => {

    const [newuser,setNewUser]=useState(null);

    const {user} = useContext(Context);

    console.log(user,newuser)

    const handleLogin=event=>{
        event.preventDefault();
        const email=event.target.email.value;
        const password=event.target.password.value;
        console.log(email,password);

       user(email.password)
         .then((result) => {
           const loggedUser = result.user;
           setNewUser(loggedUser);
         })
         .catch((error) => {
          console.log(error.code);
           console.log(error.massage);
         });

        
    }
    return (
      <div className="hero min-h-screen ">
        <div className="hero-content flex-col ">
            {
                user && <h1 className="text-green-600">You are Looged In</h1>
            }
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleLogin} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  name="password"
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
            </form>
          </div>
          <p className="text-green-600 text-xl mt-6">
            Are you New ?{" "}
            <Link className="text-red-700" to="/register">
              {" "}
              Register
            </Link>{" "}
            Now!{" "}
          </p>
        </div>
      </div>
    );
};

export default LogIn;