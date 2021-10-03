import React, { useState } from "react";
import axios from "axios";

import Input from "./components/input";

import "./App.css";

function App() {
  const [registerUsername, setRegisterUsername] = useState();
  const [registerPassword, setRegisterPassword] = useState();
  const [loginUsername, setLoginUsername] = useState();
  const [loginPassword, setLoginPassword] = useState();

  const register = async () => {
    const res = await axios.post(
      "http://localhost:4000/register",
      { username: registerUsername, password: registerPassword },
      { withCredentials: true }
    );
    console.log(res.data);
  };
  const login = async () => {
    const res = await axios.post(
      "http://localhost:4000/login",
      { username: loginUsername, password: loginPassword },
      { withCredentials: true }
    );
    console.log(res);
  };
  const getUser = async () => {
    const res = await axios.get("http://localhost:4000/getuser", {
      withCredentials: true,
    });
    console.log(res);
  };

  return (
    <div className="App">
      <form
        className="register"
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <h1>Register</h1>
        <Input
          type="text"
          placeholder="username"
          handleOnChange={(e) => setRegisterUsername(e.target.value)}
        />
        <Input
          type="password"
          placeholder="password"
          handleOnChange={(e) => setRegisterPassword(e.target.value)}
        />
        <button onClick={register}>Submit</button>
      </form>

      <form
        className="login"
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <h1>Login</h1>
        <Input
          type="username"
          placeholder="username"
          handleOnChange={(e) => setLoginUsername(e.target.value)}
        />
        <Input
          type="password"
          placeholder="password"
          handleOnChange={(e) => setLoginPassword(e.target.value)}
        />
        <button onClick={login}>Submit</button>
      </form>
      <div className="getUser">
        <h1>Get User</h1>
        <button onClick={getUser}>Get User</button>
      </div>
    </div>
  );
}

export default App;
