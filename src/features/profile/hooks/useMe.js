import { useQuery } from "@tanstack/react-query"
import { useContext } from "react";
import { getLoggedUserApi } from "../services/api";
import AuthContext from "../../../app/Context/AuthContext";

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