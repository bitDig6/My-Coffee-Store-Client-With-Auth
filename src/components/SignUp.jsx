import React from 'react';

const SignUp = () => {
    return (
        <div className='m-20 w-3/5 mx-auto'>
            <form className="fieldset w-1/2 mx-auto">
                <label className="fieldset-label">Email</label>
                <input type="email" className="w-full input" placeholder="Email" />
                <label className="fieldset-label">Password</label>
                <input type="password" className="w-full input" placeholder="Password" />
                <div><a className="link link-hover">Forgot password?</a></div>
                <button className="btn btn-neutral mt-4">SignUp</button>
            </form>
        </div>
    );
};

export default SignUp;