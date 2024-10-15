import React from "react";
import { NavLink } from "react-router-dom";

const Login = () => {
  return (
    <div className="w-full h-screen bg-slate-100 flex flex-col items-center pt-6">
      <h1 className="text-xl font-bold text-slate-600">
        Selamat Datang di MyPost App
      </h1>
      <h1 className="mt-4 text-sm font-medium text-blue-500">
        Silahkan login terlebih dahulu
      </h1>
      <div className="w-[80%] h-[45%] bg-white rounded-lg shadow-lg mt-4">
        <h1 className="text-center text-blue-500 font-semibold mt-4">
          FORM LOGIN
        </h1>

        <form className="w-full h-full p-4">
          <div className="flex flex-col gap-2">
            <label htmlFor="email">Email</label>
            <input
              type="text"
              id="email"
              className="bg-white border border-slate-400 h-8 rounded-md p-2"
              autoComplete="off"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              className="bg-white border border-slate-400 h-8 rounded-md p-2"
            />
          </div>

          <div>
            <NavLink to={"/register"}>
              <h1 className="text-blue-500 text-xs mt-4">Belum punya akun ? daftar disini</h1>
            </NavLink>
          </div>
          <button className="w-full h-8 bg-blue-400 mt-8 rounded-md text-white">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
