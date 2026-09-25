

import api from "./ApiInstances"

export  function getLoggedUserApi(){
    return api.get('/user/getUser')
}



export  function userRecipesApi(page){
    return api.get(`/user/recipes?page=${page}&limit=${15}`)
}

