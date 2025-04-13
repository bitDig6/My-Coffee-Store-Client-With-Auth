import React, { useContext, useState } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import auth from "../firebase/firebase.init";

const AuthProvider = ({children}) => {
    let userInfo = useContext(AuthContext);

    const [user, setUser] = useState(null);

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }
    
    const signInUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }

    const updateUserProfile = (newUserInfo) => {
        return updateProfile(auth.currentUser, newUserInfo);
    }

    onAuthStateChanged(auth, (user) => {
        if(user){
            console.log('user id', user);
            setUser(user);
        }else{
            console.log('user is signed out');
        }
    })

    const signOutUser = () => {
        return signOut(auth);
    }

    userInfo = {
        user,
        setUser,
        createUser,
        signInUser,
        signOutUser,
        updateUserProfile
    }

    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;