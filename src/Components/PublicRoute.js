import React, {  useContext } from 'react'

import AuthContext from '../Context/AuthContext'
import { Navigate } from 'react-router-dom'

export default function PublicRoute({children}) {
   
    const {Me,isMeLoading}=useContext(AuthContext)

if(Me)
    { 
return <Navigate to="/" replace/>
    } 
  return children
}
