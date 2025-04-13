import React, { useContext } from 'react';
import { Link } from 'react-router';
import { AuthContext } from '../contexts/AuthContext';

const SignUp = () => {
    const { createUser, updateUserProfile } = useContext(AuthContext);

    const handleSignUp = (event) => {
        event.preventDefault();
        const form = event.target;

        const email = form.email.value;
        const password = form.password.value;
        const name = form.name.value;
        const photo = form.photo.value;

        const newUserInfo = { 
            displayName: name,
            photoURL: photo
         }

        createUser(email, password)
            .then(userCredential => {
                console.log(userCredential);
                updateUserProfile(newUserInfo)
                    .then(() => {
                        console.log('profile updated');
                    }).catch(error => {
                        console.log(error.code, error.message);
                    })
            }).catch(error => {
                console.log(error.code, error.message);
            })
    }

    return (
        <div className='w-full min-h-dvh form-bg p-20'>
            <div className='w-1/2 p-10 mx-auto bg-ash-100 rounded-2xl'>
                <h2 className='text-5xl text-black font-medium font-rancho text-center'>Sign Up</h2>
                <form onSubmit={handleSignUp} className="fieldset w-full bg-ash-100 p-10 space-y-2">
                    <label className="fieldset-label text-black text-xl font-semibold">Name</label>
                    <input type="text" name='name' className="w-full input" placeholder="Name" />

                    <label className="fieldset-label text-black text-xl font-semibold">Photo URL</label>
                    <input type="text" name='photo' className="w-full input" placeholder="Photo URL" />
                    
                    <label className="fieldset-label text-black text-xl font-semibold">Email</label>
                    <input type="email" name='email' className="w-full input" placeholder="Email" />

                    <label className="fieldset-label text-black text-xl font-semibold">Password</label>
                    <input type="password" name='password' className="w-full input" placeholder="Password" />

                    <button className="btn btn-neutral mt-4">Sign Up</button>
                </form>
                <p className='text-black text-center'>Already have an account? <Link className='link link-hover' to='/signIn'>Sign In</Link></p>
            </div>
        </div>
    );
};

export default SignUp;