import  {  useContext } from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import AuthContext from '../../Context/AuthContext'

export default function ProtectedRoute() {

    const {Me,isMeLoading}=useContext(AuthContext)
    if (isMeLoading) return "heelo"
if(!Me) 
    {
        return <Navigate to="/login" replace/>
    }
  return <Outlet></Outlet> 
}
