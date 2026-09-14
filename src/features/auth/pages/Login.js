

import LoginForm from "../components/LoginForm";

export default function Login() {


  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden px-4 py-6">
      
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=1920"
          className="object-cover w-full h-full"
          loading="lazy"
          alt="food bg"
        />
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

  <LoginForm></LoginForm>
   
    </section>
  );
}