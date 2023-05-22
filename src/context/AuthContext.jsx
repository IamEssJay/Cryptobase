import {auth,db} from'../Firebase'
import { createContext } from 'react'
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth'
import { doc, setDoc } from 'firebase/firestore'
import { useState } from 'react'
import { useEffect } from 'react'
import { useContext } from 'react'


const UserContext= createContext()

export const AuthContextProvider= ({children})=>{
    const[user, setuser]=useState({})





    const signUp=(email,password)=>{
        createUserWithEmailAndPassword(auth,email,password);
        return setDoc(doc(db,'users', email),{
            watchList:[],
        })
    };

    const signIn=(email,password)=>{
        return signInWithEmailAndPassword(auth,email,password)
    };

    const logout  =()=>{
        return signOut(auth)
    }

    useEffect(() => {
      const unsubscribe= onAuthStateChanged(auth, (currentUser)=>{
        setuser(currentUser)
      })
      return()=>{
        unsubscribe()
      }
    }, [third])
    
    return(
        <UserContext.Provider value={{signUp, signIn, logout, user}}>
            {children}
        </UserContext.Provider>
    )

};

export const UserAuth =()=>{
    return useContext(UserContext);
};