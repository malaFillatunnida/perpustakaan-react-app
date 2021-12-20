import React from "react";
// import "./Menu.css";
import SideNav from "@trendmicro/react-sidenav";

// Be sure to include styles at some point, probably during your bootstraping
import "@trendmicro/react-sidenav/dist/react-sidenav.css";

const Menu = () => {
  return (
    <SideNav
      style={{ position: "fixed", backgroundColor: "#333" }}
      onSelect={(selected) => {}}
    >
      <SideNav.Toggle />
      <SideNav.Nav defaultSelected="home">
        <a href="/List">
          <center>
            <button class="btn" style={{ color: "white" }}>
              <p class="bi bi-file-text">
                <br /> List
              </p>
            </button>
          </center>
        </a>
        <a href="/Buku">
          <center>
            <button class="btn" style={{ color: "white" }}>
              <p class="bi bi-clipboard-check">
                <br /> Buku
              </p>
            </button>
          </center>
          <br />
        </a>
      </SideNav.Nav>
    </SideNav>
  );
};
export default Menu;
