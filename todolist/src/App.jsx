import { useState, useEffect } from 'react';
import './index.css'; // Ensure this import is present for Tailwind CSS

function App() {
  const [inputData, setInputData] = useState("");
  const [tasks, setTasks] = useState([]);

  // Load tasks from local storage when the component mounts
  useEffect(() => {
    const storedTasks = localStorage.getItem("tasks");
    if (storedTasks) {
      setTasks(JSON.parse(storedTasks));
    }
  }, []);

  // Save tasks to local storage whenever the tasks state changes
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTodo = (e) => {
    e.preventDefault();
    if (inputData.trim() !== "") {
      setTasks([...tasks, { value: inputData }]);
      setInputData("");
    }
  };

  const deleteTask = (index) => {
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
  };

  return (
    <>
      <marquee behavior="" direction="left" className="bg-yellow-400 p-2 mb-4 text-black">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus cum fugit, est sint vero soluta eos facere illum laboriosam enim asperiores pariatur laudantium adipisci cumque dicta quia id. Necessitatibus, ea.
      </marquee>
      <div className="container mx-auto p-4">
        <div className="bg-black text-center text-white font-serif text-2xl py-6 mb-4 rounded shadow-lg">
          <h1>Tilak Todo List</h1>
        </div>
        <form onSubmit={addTodo} className="mb-4">
          <div className="flex justify-center">
            <input
              type="text"
              value={inputData}
              onChange={(e) => setInputData(e.target.value)}
              className="border p-2 flex-grow md:flex-grow-0 md:w-1/2 rounded-l"
              placeholder="Enter your task"
            />
            <button className="bg-blue-500 text-white p-2 rounded-r" type="submit">
              Add
            </button>
          </div>
        </form>
        <ul className="space-y-2">
          {tasks.map((task, index) => (
            <li key={index} className="flex justify-between items-center p-2 bg-gray-100 border rounded shadow">
              <span>{task.value}</span>
              <button
                onClick={() => deleteTask(index)}
                className="bg-red-500 text-white p-2 rounded"
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default App;
