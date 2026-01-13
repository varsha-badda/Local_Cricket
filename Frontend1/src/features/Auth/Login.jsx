import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../../api/api";


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

      if (res.data.role === "manager") {
        navigate("/manager/teams");
      } else {
        navigate("/viewer/teams");
      }
    } catch (err) {
      alert("Invalid credentials");
    }
  };

  return (
    <div className="min-h-screen bg-[#23242a] flex items-center justify-center">
      {/* HORIZONTAL WRAPPER */}
      <div className="flex items-center gap-12">

        

        {/* LOGIN CARD (RIGHT) */}
        <div className="relative w-[370px] h-[450px] overflow-hidden rounded-[50px_5px]">

          {/* Animated Border */}
          <div className="absolute inset-0 animate-spin-slow">
            <div className="w-full h-full bg-[conic-gradient(from_0deg,#45f3ff,transparent,#d9138a,#45f3ff)]" />
          </div>

          {/* Login Form */}
          <form
            onSubmit={handleSubmit}
            className="absolute inset-[3px] bg-[#28292d] rounded-[50px_5px] p-8 z-10 flex flex-col"
          >
            <h1 className="text-2xl font-semibold text-[#45f3ff] text-center mb-8">
              Login
            </h1>

            <label className="text-[#9eb3b5] mb-1">Email</label>
            <input
              type="email"
              name="email"
              onChange={handleChange}
              required
              className="mb-4 px-4 py-2 rounded-xl bg-white/20 text-white outline-none"
            />

            <label className="text-[#9eb3b5] mb-1">Password</label>
            <input
              type="password"
              name="password"
              onChange={handleChange}
              required
              className="mb-6 px-4 py-2 rounded-xl bg-white/20 text-white outline-none"
            />

            <button
              type="submit"
              className="bg-[#45f3ff] text-black font-bold py-2 rounded-xl shadow-lg hover:scale-105 transition"
            >
              ENTER THE PITCH
            </button>

            <p className="text-sm text-cyan-400 mt-4 text-center cursor-pointer">
              Forgot password?
            </p>

            <p className="text-sm text-cyan-400 mt-2 text-center">
              Don’t have an account?{" "}
              <span
                className="text-pink-500 cursor-pointer"
                onClick={() => navigate("/register")}
              >
                Register
              </span>
            </p>
          </form>
        </div>

      </div>
    </div>
  );
};

export default Login;
