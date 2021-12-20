import "./Buku.css";

const Buku = ({ todos, setRefresh }) => {
  const updateTodos = () => {
    todos.done = !todos.done;
    fetch("http://localhost:8000/todos/" + todos.id, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(todos),
    }).then(() => {
      console.log("todos update");
      setRefresh(true);
    });
  };

  // const deletelist = () => {
  //     fetch("http://localhost:9000/list/" + list.id, {
  //         method: "DELETE",
  //     }).then(() => {
  //         console.log("list Delete");
  //         setRefresh(true)
  //     })
  // }

  return (
    <tr className={`${todos.done ? "checked" : ""}`}>
      <td>{todos.id}.</td>
      <td>{todos.buku}</td>
      <td>
        <i class="bi bi-check-lg" onClick={updateTodos}></i>
      </td>
    </tr>
  );
};

export default Buku;
