import React, { useState } from 'react';
import './index.css';

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // 處理登入邏輯...
    console.log("Username:", username, "Password:", password);
  };

  return (
    <div className="container">
      <div className="outside">
      <div className="image-container">
      <img src={require('./people.png')} alt="Background"/>
      </div>
      <div className="login-form">
        <form onSubmit={handleSubmit}>
          <input 
            type="text" 
            className="login-form-input"
            placeholder="Số thẻ cư trú" 
            value={username} 
            onChange={e => setUsername(e.target.value)} 
          />
          <input 
            type="password" 
            className="login-form-input"
            placeholder="mật khẩu" 
            value={password} 
            onChange={e => setPassword(e.target.value)} 
          />
          <button className="login-form-button" type="submit">đăng nhập</button>
        </form>
      </div>
    </div>
    </div>
  );
};

export default Login;
