import React from "react";
import { useHistory } from "react-router-dom";
import Table from "./Table";
const Home = ({ setAuthenticated }) => {
  const history = useHistory();
  const logout = () => {
    setAuthenticated(false);
    history.push("/login");
  };
  return (
    <div>
      <div>
        <div style={{ display: "flex" }}>
          <div style={{ flex: 1, border: "3px solid black" }}>
            <div
              style={{
                width: "200px" /* Set the width of your div */,
                marginLeft: "auto",
                marginRight: "auto",
              }}
            >
              <button
                style={{ marginTop: "20px" }}
                type="button"
                onClick={logout}
              >
                Logout
              </button>
              <Table />
            </div>
          </div>
          <div style={{ flex: 1, border: "3px solid black" }}></div>
        </div>
      </div>
    </div>
  );
};

export default Home;
