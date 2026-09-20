import { keepPreviousData, useQuery } from "@tanstack/react-query"
import {  userRecipesApi } from "../../../Api/UserApi"
import { useContext } from "react"
import AuthContext from "../../../Context/AuthContext"

export  const useUserRecipes=(page)=>{
    const {Me}=useContext(AuthContext)
    return useQuery({
        queryKey:["user-recipes",page],
        queryFn:async()=>{
            const response = await userRecipesApi(page)
            return response.data
        },
        keepPreviousData:true,
        placeholderData:keepPreviousData,
        enabled:!!Me
    })
}