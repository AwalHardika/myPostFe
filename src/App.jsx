import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./screen/auth/Login";
import Register from "./screen/auth/Register";
import HomeScreen from "./screen/home_screen/HomeScreen";
import Layout from "./screen/Layout";

const App = () => {
  const [isLogin, setIsLogin] = useState(false);

  if (!isLogin) {
    return (
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="*" element={<h1>Page Not Found</h1>} />
        </Route>
      </Routes>
    );
  }

  return (
    <Routes>
      <Route path="/" element={<HomeScreen />} />
      <Route path="*" element={<h1>Page Not Found</h1>} />
    </Routes>
  );
};

export default App;
