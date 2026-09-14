export const emailRegex = /^\S+@\S+\.\S+$/;

  export const validateLogin = (formData) => {
    if (!formData.email.trim()) {
      return "Email Cannot be Empty";
    }
    if (!emailRegex.test(formData.email.trim())) {
      return "Enter a valid Email";
    }
    if (!formData.password) {
      return "Password Cannot be empty";
    }
    if (formData.password.length < 8) {
      return "Password length cannot be less than 8";
    }

    return null;
  };