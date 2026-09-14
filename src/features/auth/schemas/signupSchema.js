 const emailRegex = /^\S+@\S+\.\S+$/;
  const phoneRegex = /^[6-9]\d{9}$/;
  const nameRegex = /^[A-Za-z\s'-]{2,50}$/;

  export const validateSignUp = (formData) => {
    if (!nameRegex.test(formData.name.trim())) {
      return "Enter a valid Name";
    }
    if (!emailRegex.test(formData.email.trim())) {
      return "Enter a valid Email";
    }
    if (formData.username.trim().length < 8) {
      return "Username Cannot be less than 8 Characters";
    }
    if (!phoneRegex.test(formData.phoneNumber.trim())) {
      return "Enter a valid Phone Number";
    }
    if (formData.password.length < 8) {
      return "Password Length must be more than 8";
    }

    return null;
  };