import "./List.css";
import { useEffect, useState } from "react";

const List = ({ isRefresh, setRefresh }) => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    if (isRefresh) {
      fetch("http://localhost:8000/todos")
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          setRefresh(false);
          setTodos(data);
        })
        .catch((err) => {
          setRefresh(false);
          if (err.name === "AbortError") {
            console.log("fetch aborted");
          }
        });
    }
  }, [isRefresh, setRefresh]);

  return (
    <div className="card" style={{ marginLeft: "30px", width: "100%" }}>
      <div className="container">
        <h4
          style={{
            textAlign: "center",
            padding: "15px",
            backgroundColor: "#008080",
            color: "white",
          }}
        >
          List Peminjaman
        </h4>
        <table class="table">
          <thead>
            <tr
              style={{
                textAlign: "center",
                padding: "15px",
                backgroundColor: "#008080",
                color: "white",
              }}
            >
              <th>No</th>
              <th>Nama</th>
              <th>Kelas</th>
              <th>Buku</th>
            </tr>
          </thead>
          <tbody>
            {todos.map((todoss) => (
              <tr
                style={{
                  textAlign: "center",
                  backgroundColor: "#F0F8FF",
                  padding: "10px",
                }}
              >
                <td>{todoss.id}.</td>
                <td>{todoss.nama}</td>
                <td>{todoss.kelas}</td>
                <td>{todoss.buku}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default List;
