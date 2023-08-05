import { useState } from "react";
import "./todo.css";

const TodoList = (handleCloseForm) => {
  const [toDo, setTodo] = useState("");
  const [items, setItems] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();

    if (toDo.trim() === "") {
      return;
    }
    setItems((currentTodos) => {
      return [
        ...currentTodos,
        { id: crypto.randomUUID(), title: toDo, completed: false },
      ];
    });

    setTodo("");
  }
  function toggleTodo(id, completed) {
    setItems((currentTodos) => {
      return [
        ...currentTodos.map((item) => {
          if (item.id === id) {
            return { ...item, completed };
          }
          return item;
        }),
      ];
    });
  }

  function deleteTodo(id) {
    setItems((currentTodos) => {
      return currentTodos.filter((item) => item.id !== id);
    });
  }

  return (
    <>
      <section className="form-section">
        <div
          className="todo-container"
          style={{ position: "relative", backgroundColor: "white" }}
        >
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <h3 style={{ paddingLeft: "20px" }}>My Todo</h3>
            <button
              // style={{ position: "absolute", top: -20 }}
              style={{ all: "unset", padding: "10px" }}
              onClick={handleCloseForm}
            >
              {" "}
              X{" "}
            </button>
          </div>
          <form className="Todo" onSubmit={handleSubmit}>
            <div>
              <input
                type="text"
                value={toDo}
                onChange={(e) => setTodo(e.target.value)}
              />
              <button className="addbtn" style={{ backgroundColor: "blue" }}>
                Add Item
              </button>
            </div>
          </form>
          <ul className="Todo">
            {items.map((item) => {
              return (
                <li style={{ width: "100%" }} key={item.id}>
                  <label className={item.completed ? "completed" : ""}>
                    <input
                      type="checkbox"
                      checked={item.completed}
                      onChange={(e) => toggleTodo(item.id, e.target.checked)}
                    />
                    {item.title}
                  </label>
                  <button
                    style={{ color: "#c21d2e", background: "transparent" }}
                    onClick={() => deleteTodo(item.id)}
                  >
                    <i class="bx bx-trash"></i>{" "}
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      </section>
    </>
  );
};

export default TodoList;
