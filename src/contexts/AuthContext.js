import React, { useContext, useEffect, useState } from 'react'
import { auth } from '../firebase'
import {
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	signOut,
	sendPasswordResetEmail,
	updateEmail,
	updatePassword
} from 'firebase/auth'

const AuthContext = React.createContext()

let authError

export function getAuthError() {
	return authError
}

export function useAuth() {
	return useContext(AuthContext)
}

function changeEmail(email) {
	updateEmail(auth.currentUser, email)
}

function changePassword(password) {
	updatePassword(auth.currentUser, password)
}

async function signup(email, password) {
	try {
		await createUserWithEmailAndPassword(auth, email, password)
	} catch (error) {
		throw error.message
	}
}

async function login(email, password) {
	try {
		await signInWithEmailAndPassword(auth, email, password)
	} catch (error) {
		throw error.message
	}
}

function logout() {
    try {
        signOut(auth)
    }
    catch (error) {
		console.error(error)
	}
}

function resetPassword(email) {
	sendPasswordResetEmail(auth, email)
}

export function AuthProvider({ children }) {
	const [currentUser, setCurrentUser] = useState()
	const [loading, setLoading] = useState(true)

	useEffect(() => {
		const unsubscribe = auth.onAuthStateChanged((user) => {
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
