import React, { useState, useEffect } from "react";
import Input from "./components/input";

import "./App.css";

function App() {
  const [registerUsername, setRegisterUsername] = useState();
  const [registerPassword, setRegisterPassword] = useState();
  const [loginUsername, setLoginUsername] = useState();
  const [loginPassword, setLoginPassword] = useState();

  useEffect(() => {
    console.log(registerUsername);
  }, [registerUsername]);

  const register = () => {};
  const login = () => {};
  const getUser = () => {};

  return (
    <div className="App">
      <div className="register">
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
      </div>

      <div className="login">
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
      </div>
      <div className="getUser">
        <h1>Get User</h1>
        <button onClick={getUser}>Get User</button>
      </div>
    </div>
  );
}

export default App;
