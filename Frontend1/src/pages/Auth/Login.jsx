import { useState } from "react";
import { loginUser } from "../../api/auth.api";
import { useNavigate } from "react-router-dom";
import { DotLottiePlayer } from '@dotlottie/react-player';

const Login = () => {
  const [form, setForm] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await loginUser(form);
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("role", res.data.role);

      res.data.role === "manager" ? navigate("/manager") : navigate("/viewer");
    } catch (err) {
      console.error("Login failed", err);
    }
  };

  return (
    <div className="min-h-screen w-screen bg-black flex flex-col justify-center items-center font-mono">
      {/* Cricket Player Animation */}
      <div className="w-64 h-64 mb-6">
        <DotLottiePlayer
          src="cricket-game.json" // Replace with a real Lottie URL
          autoplay
          loop
        />
      </div>

      <form 
        className="flex flex-col gap-4 w-full max-w-md p-8 border border-green-500/30 rounded-lg shadow-[0_0_15px_rgba(34,197,94,0.2)]"
        onSubmit={handleSubmit}
      >
        <h2 className="text-green-500 text-3xl font-bold mb-6 text-center uppercase tracking-widest">
          Player Login
        </h2>
        
        <input 
          name="email" 
          placeholder="Email" 
          onChange={handleChange} 
          className="bg-black border-b-2 border-green-900 text-green-400 p-2 outline-none focus:border-green-500 transition-colors placeholder:text-green-900"
        />
        
        <input
          name="password"
          type="password"
          placeholder="Password"
          onChange={handleChange}
          className="bg-black border-b-2 border-green-900 text-green-400 p-2 outline-none focus:border-green-500 transition-colors placeholder:text-green-900"
        />
        
        <button 
          type="submit"
          className="mt-6 bg-green-600 text-black font-bold py-2 px-4 rounded hover:bg-green-400 hover:shadow-[0_0_20px_rgba(34,197,94,0.6)] transition-all duration-300"
        >
          ENTER THE PITCH
        </button>
      </form>
    </div>
  );
};

export default Login;