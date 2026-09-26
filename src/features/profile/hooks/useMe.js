import { useQuery } from "@tanstack/react-query"
import { useContext } from "react";
import AuthContext from './../../../Context/AuthContext';
import { getLoggedUserApi } from "../services/api";

const  useMe=()=>{
    const {isAuthenticated}=useContext(AuthContext)
    return useQuery({
    queryKey:["Me"],
    queryFn:async()=>{
    const response= await getLoggedUserApi()
         
          return response.data.user 
    },
    enabled:isAuthenticated,
    retry:false
    }) 
}
export default useMe;