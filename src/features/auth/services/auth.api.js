import api from "../../../app/api/ApiInstances"


export  function loginApi(data){
    return api.post('/auth/login',data)
}
export  function signUpApi(data){
    return api.post('/auth/register',data)
}
export  function forgetPasswordApi(data){
    return api.patch('/auth/forget-password',data)
}
 export  function changePasswordApi(data){
    return api.patch('/auth/change-password',data)
}
export  function logoutApi(){
    return api.post('/auth/logout')
}
 export  function getLoggedUserApi(){
    return api.get('/user/getUser')
}