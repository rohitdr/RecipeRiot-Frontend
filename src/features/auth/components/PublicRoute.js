
import { Navigate } from 'react-router-dom'
import useMe from '../../profile/hooks/useMe'

export default function PublicRoute({children}) {
   
    const {data}=useMe()

if(data)
    { 
return <Navigate to="/" replace/>
    } 
  return children
}
