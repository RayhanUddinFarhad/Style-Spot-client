import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { AuthContext } from '../../Providers/AuthProvider';
import { updateProfile } from 'firebase/auth';


const Register = () => {

  const {registerUser} = useContext(AuthContext)
  const location = useLocation()
  const navigate = useNavigate()
  const from = location.state?.from?.pathname || '/';

  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = data => {


    registerUser (data.email, data.password)
    .then ((res) => {
      const registered = res.user
      console.log(registered);

      updateProfile (registered, {

        displayName : data.name
      })

      navigate (from, { replace: true })



     })
     .catch ((err) => { 

      console.log(err);
     })
    
    
    
    console.log(data)
  
  
  
  };







    return (
        <div>
<div className="hero min-h-screen ">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Register now!</h1>
      <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handleSubmit(onSubmit)} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input {...register("name")} type="text" placeholder="Name" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" className="input input-bordered" {...register("email")} />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" className="input input-bordered" {...register("password")}/>
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>

        <p>Already have an account? <Link className='btn-link' to =  "/logIn">LogIn Now</Link></p>
      </form>
    </div>
  </div>
</div>        </div>
    );
};

export default Register;