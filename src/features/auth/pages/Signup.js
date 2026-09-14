import SignUpForm from "../components/SignUpForm";


export default function SignUp() {


  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden px-4 py-6">
      
    
      <div className="absolute inset-0">
        <img
          loading="lazy"
          src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=1920"
          className="object-cover w-full h-full"
          alt="food bg"
        />
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

   <SignUpForm></SignUpForm>
  
    </section>
  );
}