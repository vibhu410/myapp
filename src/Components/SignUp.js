import React, { useState } from "react";
import { useHistory, NavLink } from "react-router-dom";

const Signup = ({ setAuthenticated }) => {
  const history = useHistory();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    position: "",
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
        paddingTop: "100px",
        position: "absolute",
        top: "50",
        left: "50%",
      }}
    >
      <h2>Signup</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          onChange={handleChange}
          required
        />
        <br />
        <br />
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
        <input
          type="text"
          name="position"
          placeholder="Position"
          onChange={handleChange}
          required
        />
        <br />
        <br />
        <button type="submit">Signup</button>
        <button style={{ marginLeft: "20px" }}>
          <NavLink
            to="/login"
            style={{ textDecoration: "none", color: "black" }}
          >
            Login
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

export default Signup;
