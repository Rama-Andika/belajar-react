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
    if (name.trim) {
      setTodos([...todos, name]);
      setName("");
    }
  };

  //Fungsi untuk menghapus todo dari list
  const onClickDelete = (index) => {
    const nTodos = todos.filter((_, i) => i !== index);
    setTodos(nTodos);
  };

  return (
    <div className="App w-full h-screen max-h-screen flex items-center justify-center">
      <div className="w-[435px] rounded-md border border-slate-400 shadow-md p-5">
        <h1 className="text-center text-2xl font-bold">To do list</h1>
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
        <div className="mt-2">
          {todos.map((todo, i) => (
            <div key={i} className="flex justify-between items-start mb-2">
              <p className="">{todo}</p>
              <Button
                text="Delete"
                color="bg-red-600"
                onClick={() => onClickDelete(i)}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
