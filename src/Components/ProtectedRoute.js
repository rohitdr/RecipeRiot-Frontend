import React, { Children, useContext } from 'react'
import { Navigate } from 'react-router-dom'
import AuthContext from '../Context/AuthContext'

export default function ProtectedRoute({children}) {

    const {Me,isMeLoading}=useContext(AuthContext)
    if (isMeLoading) return "heelo"
if(!Me) 
    {
        return <Navigate to="/login" replace/>
    }
  return  children
}
