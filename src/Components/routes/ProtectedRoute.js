
import { Navigate, Outlet } from 'react-router-dom'
import useMe from '../../features/profile/hooks/useMe'

export default function ProtectedRoute() {

    const {data,isLoading}=useMe()
    if (isLoading) return "heelo"
if(!data) 
    {
        return <Navigate to="/login" replace/>
    }
  return <Outlet></Outlet> 
}
