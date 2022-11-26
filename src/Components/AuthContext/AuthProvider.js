import React, { createContext, useEffect, useState } from 'react';
import app from '../firebase/firebase-init';
import { createUserWithEmailAndPassword,updateProfile, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';


export const AuthContext = createContext();
const auth = getAuth(app);
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [accountType, setAccountType] = useState(null)
    const [loading, setLoading] = useState(true);

    // User registration
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }
    // Social login (Google)
    const loginWithGoogle = (provider) => {
        setLoading(true)
        return signInWithPopup(auth, provider)
    }
    // User login
    const login = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }
    // User Logout
    const logOut = () => {
        setLoading(true)
        return signOut(auth);
    }
    // Update user info
    const updateUserInfo = (userinfo) => {
       return updateProfile(auth.currentUser, userinfo)
    }
    // FInd loggedin account type
    useEffect(() => {
        if(user?.email){
            fetch(`http://localhost:5000/users?email=${user?.email}`)
        .then(res =>  {
            return res.json()
        })
        .then(data => {
            return setAccountType(data)

        })
        .catch(err => console.log(err.message))
        }
    },[user?.email])
    // On State changed
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLoading(false);
        });

        return () => {
            return unsubscribe();
        }
    }, [])


    const authInfo = { createUser,user,loading,loginWithGoogle,updateUserInfo, login, logOut ,accountType}
    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;