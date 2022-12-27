import React from 'react';
import { createContext } from 'react';
import app from '../../firebase/firebase.config';
import {createUserWithEmailAndPassword, getAuth, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from 'firebase/auth'
import { useState } from 'react';
import { useEffect } from 'react';

export const AuthContext = createContext()

const auth = getAuth(app)
const AuthProvider = ({children}) => {

    const googleProvider = new GoogleAuthProvider()
    const githubProvider = new GithubAuthProvider()

    const [user,setUser]=useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth,(currentUser)=>{
            setUser(currentUser)
            setLoading(false)
        })
        return ()=>unsubscribe()
    },[])
   

   const googleSignIn =()=>signInWithPopup(auth,googleProvider)
   const githubSignIn =()=>signInWithPopup(auth,githubProvider)

   const emailSignUp =(email,password)=>{
    setLoading(true)
    return createUserWithEmailAndPassword(auth,email,password)}

   const emailSignIn =(email,password)=>{
    setLoading(true)
    return signInWithEmailAndPassword(auth,email,password)}

    const updateUser =(profile)=>{
       return updateProfile(auth.currentUser,profile)
    }

   const logOut=() =>{
    setLoading(true)
    return signOut(auth)}

    const authInfo = {
        user,
        loading,
        updateUser,
        googleSignIn,
        githubSignIn,
        emailSignUp,
        emailSignIn,
        logOut
    }
    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;