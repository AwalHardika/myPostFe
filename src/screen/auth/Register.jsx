import axios from "axios";
import React from "react";
import { NavLink } from "react-router-dom";

const Register = () => {

  function handleRegister(e){
  e.preventDefault()
  let nama = e.target.nama.value;
  let email = e.target.email.value;
  let password = e.target.password.value;
  let rePassword = e.target.rePassword.value;
  
  if(!nama || !email || !password || !rePassword){
    return alert("Input tidak boleh kosong")
  }
  if(password !== rePassword) {
   return alert("Password dan rePassword tidak sama")
  }

  const dataRegister ={
    nama, email, password
  }
  // pemanggilan function asyncronus authRegister
  authRegister(dataRegister)

  }

  async function authRegister(data){
    try {
      const result = await axios.post("http://localhost:3888/api/register", data)
      console.log(result)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="w-full h-screen bg-slate-100 flex flex-col items-center pt-6">
      <h1 className="text-xl font-bold text-slate-600">
        Selamat Datang di MyPost App
      </h1>
      <h1 className="mt-4 text-sm font-medium text-blue-500">
        Silahkan Register terlebih dahulu
      </h1>
      <div className="w-[80%] h-auto py-4 bg-white rounded-lg shadow-lg mt-4">
        <h1 className="text-center text-blue-500 font-semibold mt-4">
          FORM REGISTER
        </h1>

        <form className="w-full h-full p-4" onSubmit={handleRegister}>
          <div className="flex flex-col gap-2">
            <label htmlFor="nama">Nama Pengguna</label>
            <input
              type="text"
              id="nama"
              className="bg-white border border-slate-400 h-8 rounded-md p-2"
              autoComplete="off"
            />
          </div>
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
              id="password"
              className="bg-white border border-slate-400 h-8 rounded-md p-2"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="rePassword">rePassword</label>
            <input
              type="password"
              id="rePassword"
              className="bg-white border border-slate-400 h-8 rounded-md p-2"
            />
          </div>

          <div>
            <NavLink to={"/"}>
              <h1 className="text-blue-500 text-xs mt-4">
                Sudah punya akun ? login disini
              </h1>
            </NavLink>
          </div>
          <button className="w-full h-8 bg-blue-400 mt-8 rounded-md text-white">
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
