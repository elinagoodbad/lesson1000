import React, { useState } from "react";

const Register = () => {
  const [email, setEmail] = useState("");
  const { password, setPassword } = useState("");
  const { passwordConsirm, setPasswordComfirm } = useState("");
  return (
    <div>
      <h1>Register</h1>
      <input type="text" placeholder="email" />
      <input type="password" placeholder="password" />
      <input type="password" placeholder="password confirm" />
      <button>Register</button>
    </div>
  );
};

export default Register;
