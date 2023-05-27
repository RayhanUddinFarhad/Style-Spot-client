import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProvider';

const LogIn = () => {

  const {logIn} = useContext(AuthContext)

  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const location = useLocation()
    const navigate = useNavigate()
    const from = location.state?.from?.pathname || '/';

  const onSubmit = (data) => { 




    console.log(data);


    logIn (data.email, data.password)
    .then ((res) => { 

      const logged = res.user 
      navigate (from, { replace: true })

      

    })
    .catch ((err) => {

      console.log(err);
     })
  }




    return (
        <div>

<div className="hero min-h-screen ">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Login now!</h1>
      <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handleSubmit(onSubmit)}className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input  {...register("email")} type="text" placeholder="email" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input  {...register("password")} type="text" placeholder="password" className="input input-bordered" />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="button-primary">Login</button>
        </div>

        <p>New to StyleSpot? <Link className='btn-link' to =  "/register">Register Now</Link></p>
      </form>
    </div>
  </div>
</div>
        </div>
    );
};

export default LogIn;