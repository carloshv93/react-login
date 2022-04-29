import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });
  const navigate = useNavigate();
  const handleChange = (event) => {
    setCredentials({
      ...credentials,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    //...code
    navigate("/");
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="username">Username</label>
      <input
        name="username"
        type="text"
        onChange={handleChange}
        value={credentials.username}
      />
      <label htmlFor="username">Password</label>
      <input
        name="password"
        type="password"
        onChange={handleChange}
        value={credentials.password}
      />
      <button type="submit">Login</button>
    </form>
  );
}

export default Login;
