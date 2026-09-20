  const emailRegex = /^\S+@\S+\.\S+$/;
  const phoneRegex=/^[6-9]\d{9}$/;
  const nameRegex=/^[A-Za-z\s'-]{2,50}$/;
  export const validateUserForm=(formData)=>{
    if(!nameRegex.test(formData.name.trim())){
      return "Enter a valid Name"
    }
    if(!emailRegex.test(formData.email.trim())){
      return "Enter a valid Email"
    }
    if(formData.username.trim().length<8){
      return "Username Cannot be less than 8 Characters"
    }
    if(!phoneRegex.test(String(formData.phoneNumber).trim())){
      return "Enter a valid Phone Number"
    }
     if(!formData.bio.trim()){
      return "Bio Cannot be empty"
    }
   
   
 return null;
  }

   export  const validatePassword=(formData)=>{
    if(formData.oldPassword.length<8 || formData.newPassword.length<8 || formData.confirmPassword.length <8){
return "Password Length Cannot be less than 8"
    }
    if(formData.oldPassword === formData.newPassword){
      return "Old password and New password cannot be same"
    }
    if(formData.newPassword !== formData.confirmPassword){
        return "Confirm password and New password must be same"
    }
    return null
  }