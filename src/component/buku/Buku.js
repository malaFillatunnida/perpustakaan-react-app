import Buku from "./BukuItem";
import { Table } from "react-bootstrap";
import { useEffect, useState } from "react";

const TodoTodos = ({ isRefresh, setRefresh }) => {
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
    <div
      className="card"
      style={{
        marginLeft: "30px",
        width: "100%",
      }}
    >
      <div className="container">
        <h4
          style={{
            textAlign: "center",
            padding: "15px",
            backgroundColor: "#008080",
            color: "white",
          }}
        >
          Daftar Buku
        </h4>
        <Table
          className="text-center"
          striped
          bordered
          hover
          border="2px solid black"
        >
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
              <th>Buku</th>
              <th>Ada/Tidak</th>
            </tr>
          </thead>
          <tbody
            id="todo-list"
            style={{
              textAlign: "center",
              backgroundColor: "#F0F8FF",
              padding: "10px",
            }}
          >
            {todos.map((todo) => (
              <Buku todos={todo} key={todo.id} setRefresh={setRefresh} />
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default TodoTodos;
