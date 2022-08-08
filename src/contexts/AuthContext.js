import React, { useContext, useEffect, useState } from 'react'
import { auth } from '../firebase'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, sendPasswordResetEmail, updateEmail, updatePassword } from 'firebase/auth'

const AuthContext = React.createContext()

export function useAuth() {
	return useContext(AuthContext)
}


function changeEmail(email) {
    updateEmail(auth.currentUser, email)
}

function changePassword(password) {
    updatePassword(auth.currentUser, password)
}

    function signup(email, password) {
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in 
          //const user = userCredential.user;
          console.log('User created successfully')
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorMessage, errorCode)
        })
}

function login(email, password) {
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in 
      //const user = userCredential.user;
      console.log('User logged in successfully')
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorMessage, errorCode)
    })
}

function logout() {
    signOut(auth).then(() => {
        console.log('User logged out successfully')
      }).catch((error) => {
        console.log(error)
      })
}

function resetPassword(email) {
    sendPasswordResetEmail(auth, email)
}


export function AuthProvider({ children }) {
	const [currentUser, setCurrentUser] = useState()
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            setCurrentUser(user)
            setLoading(false)
        })
        return unsubscribe
    }, [])

	const value = {
		currentUser,
        signup,
        login,
        logout,
        resetPassword,
        changeEmail,
        changePassword
	}

	return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    )
}
