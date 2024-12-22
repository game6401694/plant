import React, { useState } from "react";
import { auth, signInWithEmailAndPassword } from "./firebase";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate(); // ใช้ navigate เพื่อเปลี่ยนเส้นทางหลัง login

  const handleLogin = async (e) => {
    e.preventDefault(); // ป้องกันการโหลดใหม่ของหน้า
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/home"); // ไปที่หน้า home (หรือหน้าอื่นที่ต้องการ) หลัง login สำเร็จ
    } catch (err) {
      setError("Email or password is incorrect.");
    }
  };

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
      </form>
      {error && <p>{error}</p>}
    </div>
  );
}

export default Login;
