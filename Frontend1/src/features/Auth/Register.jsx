import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { registerUser } from "../../api/api";

const Register = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: "",
    role: "viewer", // default role
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await registerUser(form);
      alert("Registration successful! Please login.");
      navigate("/"); // go to login
    } catch (err) {
      alert("Registration failed");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#23242a]">
      <div className="relative w-[370px] h-[500px] overflow-hidden rounded-[50px_5px]">

        {/* Animated border */}
        <div className="absolute inset-0 animate-spin-slow">
          <div className="w-full h-full bg-[conic-gradient(from_0deg,#45f3ff,transparent,#d9138a,#45f3ff)]" />
        </div>

        {/* Register form */}
        <form
          onSubmit={handleSubmit}
          className="absolute inset-[3px] bg-[#28292d] rounded-[50px_5px] p-8 z-10 flex flex-col"
        >
          <h1 className="text-2xl font-semibold text-[#45f3ff] text-center mb-8">
            Register
          </h1>

          {/* Email */}
          <label className="text-[#9eb3b5] mb-1">Email</label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
            placeholder="Enter email"
            className="mb-4 px-4 py-2 rounded-xl bg-white/20 text-white outline-none"
          />

          {/* Password */}
          <label className="text-[#9eb3b5] mb-1">Password</label>
          <input
            type="password"
            name="password"
            value={form.password}
            onChange={handleChange}
            required
            placeholder="Enter password"
            className="mb-4 px-4 py-2 rounded-xl bg-white/20 text-white outline-none"
          />

          {/* Role */}
          <label className="text-[#9eb3b5] mb-1">Role</label>
          <select
            name="role"
            value={form.role}
            onChange={handleChange}
            className="mb-6 px-4 py-2 rounded-xl bg-white/20 text-white outline-none"
          >
            <option value="viewer">Viewer</option>
            <option value="manager">Manager</option>
          </select>

          {/* Submit */}
          <button
            type="submit"
            className="bg-[#45f3ff] text-black font-bold py-2 rounded-xl shadow-lg hover:scale-105 transition"
          >
            REGISTER
          </button>

          {/* Back to login */}
          <p className="text-sm text-cyan-400 mt-4 text-center">
            Already have an account?{" "}
            <span
              className="text-pink-500 cursor-pointer"
              onClick={() => navigate("/")}
            >
              Login
            </span>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;
