import api from "../../../Api/ApiInstances";

export  function loginApi(data){
    return api.post('/auth/login',data)
}
export  function signUpApi(data){
    return api.post('/auth/createUser',data)
}
export  function forgetPasswordApi(data){
    return api.patch('/auth/forgetPassword',data)
}