import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Menu.css";

class Menu extends Component {
  render() {
    return (
      <div>
        <header className="header">
          <a
            href="/"
            className="logo"
            style={{ marginLeft: "80px", color: "white" }}
          >
            Mala Library's
          </a>
          <input className="menu-btn" type="checkbox" id="menu-btn" />
          <label className="menu-icon" for="menu-btn">
            <span className="navicon"></span>
          </label>

          <ul className="menu">
            <li>
              <Link to="/List" style={{ color: "white" }}>
                <p class="bi bi-file-text"> &nbsp; List Peminjam</p>
              </Link>
            </li>
            <li>
              <Link to="/Daftar" style={{ color: "white" }}>
                <p class="bi bi-file-earmark-diff">&nbsp; Daftar Peminjam</p>
              </Link>
            </li>
            <li>
              <Link to="/Buku" style={{ color: "white" }}>
                <p class="bi bi-clipboard-check">&nbsp; Daftar Buku</p>
              </Link>
            </li>
            <li>
              <Link to="/admin" style={{ color: "white" }}>
                <p class="bi bi-person-square">&nbsp; Admin</p>
              </Link>
            </li>
          </ul>
        </header>
      </div>
    );
  }
}

export default Menu;
