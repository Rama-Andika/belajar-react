import { useState } from "react";
import "./App.css";
import Button from "./components/Button";

function App() {
  //State untuk menampung list todo
  const [todos, setTodos] = useState([]);

  //State untuk menampung inputan todo
  const [name, setName] = useState("");

  //Fungsi untuk menambah todo ke list
  const onClickAdd = () => {
    if (name.length === 0) {
      alert("Name tidak boleh kosong");
      return;
    }
    if (name.trim) {
      setTodos([...todos, { name: name, completed: false, editMode: false }]);
      setName("");
    }
  };

  //Fungsi untuk mengedit todo
  const onClickEdit = (prevTodo, index) => {
    setName(prevTodo.name);
    setTodos((prevTodos) =>
      prevTodos.map((todo, i) =>
        i === index ? { ...todo, editMode: true } : { ...todo, editMode: false }
      )
    );
  };

  //Fungsi untuk cancel todo
  const onClickCancel = (index) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo, i) =>
        i === index ? { ...todo, editMode: false } : todo
      )
    );
  };

  //Fungsi untuk melakukan penyimpanan todo yang telah di ubah
  const onClickSave = (index) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo, i) =>
        i === index ? { ...todo, name: name, editMode: false } : todo
      )
    );
    setName("");
  };

  //Fungsi untuk menghapus todo dari list
  const onClickDelete = (index) => {
    const nTodos = todos.filter((_, i) => i !== index);
    setTodos(nTodos);
  };

  //Fungsi untuk mengeset status dari task ke complete
  const onClickComplete = (index) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo, i) =>
        i === index ? { ...todo, completed: true } : todo
      )
    );
  };

  return (
    <div className="App w-full h-screen max-h-screen flex items-center justify-center">
      <div className="w-[435px] rounded-md border border-slate-400 shadow-md p-5">
        <h1 className="text-center text-2xl font-bold">To do list</h1>
        {/* Jika ada todo yang masih dalam keadaan edit, maka add todo akan di hide */}
        {!todos.some((todo) => todo.editMode) && (
          <div className="flex items-center gap-2 mt-2">
            <input
              autoFocus
              type="text"
              className="border border-gray-400 rounded-md px-2 w-full"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <Button text="Add" color="bg-sky-600" onClick={onClickAdd} />
          </div>
        )}

        <div className="mt-2">
          {todos.map((todo, i) => (
            <div
              key={i}
              className="flex justify-between items-start gap-2 mb-2"
            >
              {/* Jika todo dalam keadaan edit, maka akan muncul inputan form */}
              {todo.editMode ? (
                <input
                  autoFocus
                  type="text"
                  className="border border-gray-400 rounded-md px-2 w-full"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              ) : (
                <p className={`${todo.completed ? "line-through" : ""}`}>
                  {todo.name}
                </p>
              )}

              <div className="flex items-center gap-2">
                {/* Jika todo belum completed maka button akan muncul */}
                {!todo.completed &&
                  /* Jika todo dalam keadaan edit, maka akan muncul tombol cancel dan save, jika tidak maka akan muncul tombol delete dan edit */
                  (todo.editMode ? (
                    <>
                      <Button
                        text="Cancel"
                        color="bg-orange-600"
                        onClick={() => onClickCancel(i)}
                      />
                      <Button
                        text="Save"
                        color="bg-sky-600"
                        onClick={() => onClickSave(i)}
                      />
                    </>
                  ) : (
                    <>
                      <Button
                        text="Delete"
                        color="bg-red-600"
                        onClick={() => onClickDelete(i)}
                      />
                      <Button
                        text="Complete"
                        color="bg-green-600"
                        onClick={() => onClickComplete(i)}
                      />
                      <Button
                        text="Edit"
                        color="bg-sky-600"
                        onClick={() => onClickEdit(todo, i)}
                      />
                    </>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
