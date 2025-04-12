import React from 'react';
import { Link } from 'react-router';

const SignUp = () => {
    return (
        <div className='w-full min-h-dvh form-bg p-20'>
            <div className='w-1/2 p-10 mx-auto bg-ash-100 rounded-2xl'>
                <h2 className='text-5xl text-black font-medium font-rancho text-center'>Sign Up</h2>
                <form className="fieldset w-full bg-ash-100 p-10">
                    <label className="fieldset-label text-black text-xl font-semibold">Email</label>
                    <input type="email" className="w-full input" placeholder="Email" />
                    <label className="fieldset-label text-black text-xl font-semibold">Password</label>
                    <input type="password" className="w-full input" placeholder="Password" />
                    <div><a className="link link-hover text-black">Forgot password?</a></div>
                    <button className="btn btn-neutral mt-4">Sign Up</button>
                </form>
                <p className='text-black text-center'>Already have an account? <Link className='link link-hover' to='/signIn'>Sign In</Link></p>
            </div>
        </div>
    );
};

export default SignUp;