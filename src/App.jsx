import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./screen/auth/Login";
import Register from "./screen/auth/Register";
import HomeScreen from "./screen/home_screen/HomeScreen";
import Layout from "./screen/Layout";
import generateToken from "./utils/generateToken";
import Profile from "./screen/profile_screen/Profile";
import MyPost from "./screen/my_post/MyPost";
import { jwtDecode } from "jwt-decode";

const App = () => {
  const [isLogin, setIsLogin] = useState(false);
  const [loading, setIsLoading] = useState(true)
  
  useEffect(()=>{
    const token = generateToken()
    if(token){
      setIsLogin(true)
    }
    setIsLoading(false)
  }, [])

  if(loading){
    return (
      <h1 className="text-center">Loading Boss</h1>
    )
  }

  if (!isLogin) {
    return (
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Login onLogin={()=>setIsLogin(true)} />} />
          <Route path="/register" element={<Register />} />
          <Route path="*" element={<h1>Harap Login Terlebih Dahulu</h1>} />
        </Route>
      </Routes>
    );
  }

  return (
    <Routes>
      <Route path="/" element={<Layout/>}>
      <Route index element={<HomeScreen />} />
      <Route path="/profile" element={<Profile onLogout={()=>setIsLogin(false)}/>}/>
      <Route path="/my_post" element={<MyPost/>} />
      <Route path="*" element={<h1>Page Not Found</h1>} />
      </Route>
    </Routes>
  );
};

export default App;
