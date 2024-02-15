import React, { useState } from "react";
import { useHistory, NavLink } from "react-router-dom";

const Login = ({ setAuthenticated }) => {
  const history = useHistory();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setAuthenticated(true);

    history.push("/home");
  };

  return (
    <div
      style={{
        paddingTop: "200px",
        position: "absolute",
        top: "50",
        left: "50%",
        transform: "translate(-50%, -50%)",
      }}
    >
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={handleChange}
          required
        />
        <br />
        <br />
        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
          required
        />
        <br />
        <br />
        <button type="submit">Login</button>

        <button style={{ marginLeft: "20px" }}>
          <NavLink
            to="/signup"
            style={{ textDecoration: "none", color: "black" }}
          >
            SignUp
          </NavLink>
        </button>
        <br />
        <br />
        <button style={{ marginLeft: "20px" }}>
          <NavLink
            to="/home"
            style={{ textDecoration: "none", color: "black" }}
          >
            Go to Home Page , It will only appear if your logged in otherwise
            Redirect you to login page
          </NavLink>
        </button>
      </form>
    </div>
  );
};

export default Login;
