import React from 'react'

const AuthContext = React.createContext()

export default function AuthContext() {
  return (
    <AuthContext.Provider>
        {children}
        </AuthContext.Provider>
  )
}
