  const emailRegex = /^\S+@\S+\.\S+$/;

  export const validateForgetPassword = (formData) => {
    if (!emailRegex.test(formData.email.trim())) {
      return "Enter a valid Email";
    }
    if (formData.username.trim().length < 8) {
      return "Username Cannot be less than 8 Characters";
    }
    if (formData.password.length < 8) {
      return "Password Length must be more than 8";
    }
    if (formData.confirmPassword.length < 8) {
      return "Confirm Password Length must be more than 8";
    }
    if (formData.password !== formData.confirmPassword) {
      return "Password and Confirm Password must be same";
    }

    return null;
  };