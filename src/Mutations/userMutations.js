import { useMutation, useQueryClient, useQueryErrorResetBoundary } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';
import { changePasswordApi, forgetPasswordApi, loginApi, logoutApi, signUpApi, userLikeRecipeApi, userUpdateApi } from '../Api/UserApi';
export const useLoginMutation=(handleError,setIsAuthenticated)=>{
    const queryClient=useQueryClient()
    const navigate=useNavigate()
    return useMutation({
        mutationFn:async (data)=>{
           const response=await loginApi(data);
           return response.data
        },
        retry:false,
        onError:(error)=>handleError(error),
        onSuccess:async (data)=>{
        localStorage.setItem("accessToken",data.accessToken)
        setIsAuthenticated(true)
     toast.success("You Logged in Successlly ")
     navigate('/home')
        }
    })
}

export const useSignUpMutation=(handleError)=>{
    const navigate=useNavigate()
    return useMutation({
        mutationFn:async(data)=>{
         return await signUpApi(data)
        },
         retry:false,
        onError:(error)=>handleError(error),
         onSuccess:()=>{
     toast.success("Your Account created successfully ")
     navigate('/login')
        }
    })
}
export const useLogoutMutation=(handleError,setIsAuthenticated)=>{
    const queryClient=useQueryClient()
    const navigate=useNavigate()
    return useMutation({
        mutationFn:async (data)=>{
           const response=await logoutApi();
           return response.data
        },
        retry:false,
        onError:(error)=>handleError(error),
        onSuccess:(data)=>{
            localStorage.removeItem("accessToken")
            setIsAuthenticated(false)
  queryClient.removeQueries({
  queryKey: ["Me"]
})

queryClient.removeQueries({
  queryKey: ["user-likedRecipes"]
})
queryClient.removeQueries({
  queryKey: ["user-recipes"]
})
  toast.info("You have been loggout out successfully")
            navigate('/home')
        }
    })
}
export const useForgetPasswordMutation=(handleError)=>{
    const navigate=useNavigate()
    return useMutation({
        mutationFn:async(data)=>{
         return await forgetPasswordApi(data)
        },
         retry:false,
        onError:(error)=>handleError(error),
         onSuccess:()=>{
     toast.success("Your Password Changed successfully ")
     navigate('/login')
        }
    })
}
export const useChangePasswordMutation=(handleError)=>{
    return useMutation({
        mutationFn:async(data)=>{
         return await changePasswordApi(data)
        },
         retry:false,
        onError:(error)=>handleError(error),
         onSuccess:()=>{
     toast.success("Your Password Changed successfully ")
        }
    })
}
export const useProfileUpdateMutation=(handleError)=>{
    const queryClient = useQueryClient()
    return useMutation({
        mutationFn:async(data)=>{
            const response= await userUpdateApi(data)
    return response.data
},
         retry:false,
         onSuccess:(data)=>{
     toast.success(data.message)
        },
        onSettled:()=>{
queryClient.invalidateQueries({
   queryKey:["Me"]
   })
        },
     onError:(error)=>handleError(error)

    })
}
export const useLikeMutation=(handleError)=>{
    const queryClient = useQueryClient()
    return useMutation({
        onMutate:async(recipe)=>{
          await queryClient.cancelQueries({queryKey:["Me"]})
          const previousUser = queryClient.getQueryData(["Me"])
          queryClient.setQueryData(["Me"],(oldData)=>{
            if(!oldData) return oldData
            const alreadyLiked=oldData.likedRecipes.includes(recipe._id)
            return {
                ...oldData,
                likedRecipes:alreadyLiked?oldData.likedRecipes.filter((id)=>id !==recipe._id):[...oldData.likedRecipes,recipe._id]
            }
          })
          queryClient.setQueriesData({queryKey:["user-likedRecipes"]},(oldData)=>{
            if(!oldData) return oldData
            const alreadyLiked=oldData.recipes.some((item)=>item._id===recipe._id)
            return {
      ...oldData,
      recipes: alreadyLiked
        ? oldData.recipes.filter(
            (item) => item._id !== recipe._id
          )
        : [...oldData.recipes, recipe]
    }
          })
          return {previousUser}
        },
        mutationFn:async(recipe)=>{
    const response=await userLikeRecipeApi({likedRecipeId:recipe._id})
     return response.data
        },
         retry:false,
         onSuccess:(data)=>{
     toast.success(data.message)
        },
        onSettled:()=>{
queryClient.invalidateQueries({
   queryKey:["Me"],
   })
queryClient.invalidateQueries({
   queryKey:["user-likedRecipes"]
   })
        },
     onError:(error,data,context)=>{
      handleError(error)
         queryClient.setQueryData(
    ["Me"],
    context.previousUser
  )
    }

    })
}
export const useProfileImageMutation=(userupdate,handleError)=>{
    const queryClient = useQueryClient()
    return useMutation({
        mutationFn:(data)=>userupdate(data),
         retry:false,
         onSuccess:(data)=>{
     toast.success(data.message)
        },
        onSettled:()=>{
queryClient.invalidateQueries({
   queryKey:["Me"]
   })
        },
     onError:(error,)=> handleError(error)
    

    })
}