import React, { useContext } from 'react';
import { Link } from 'react-router';
import { AuthContext } from '../contexts/AuthContext';

const SignIn = () => {
    const { signInUser } = useContext(AuthContext);

    const handleSignIn = (event) => {
        event.preventDefault();

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        
        signInUser(email, password)
            .then( userCredentials => {
                console.log(userCredentials.user);
            }).catch(error => {
                console.log(error.code, error.message);
            })
    }

    return (
        <div className='w-full min-h-dvh form-bg p-20'>
            <div className='w-1/2 p-10 mx-auto bg-ash-100 rounded-2xl'>
                <h2 className='text-5xl text-black font-medium font-rancho text-center'>Sign In</h2>
                <form onSubmit={handleSignIn} className="fieldset w-full bg-ash-100 p-10">
                    <label className="fieldset-label text-black text-xl font-semibold">Email</label>
                    <input type="email" name='email' className="w-full input" placeholder="Email" />

                    <label className="fieldset-label text-black text-xl font-semibold">Password</label>
                    <input type="password" name='password' className="w-full input" placeholder="Password" />

                    <div><a className="link link-hover text-black">Forgot password?</a></div>
                    <button className="btn btn-neutral mt-4">Sign In</button>
                </form>
                <p className='text-black text-center'>Don't have an account? <Link className='link link-hover' to='/signUp'>Sign Up</Link></p>
            </div>
        </div>
    );
};

export default SignIn;

//min-h-dvh form-page-bg


{/*  */ }