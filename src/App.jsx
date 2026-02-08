import { useEffect, useState } from "react";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";

// Mock tasks to simulate API
const initialTasks = [
          {
            _id: "1",
            title: "Finish assessment",
            description: "Complete the frontend task manager project",
            status: "pending",
            priority: "high",
          },
          {
            _id: "2",
            title: "Read React documentation",
            description: "Go through hooks and component lifecycle",
            status: "in-progress",
            priority: "medium",
          },
          {
            _id: "3",
            title: "Plan weekend schedule",
            description: "Outline activities and budget",
            status: "done",
            priority: "low",
          },
          {
            _id: "4",
            title: "Buy groceries",
            description: "Milk, eggs, vegetables",
            status: "pending",
            priority: "medium",
          },
          {
            _id: "5",
            title: "Prepare internship materials",
            description: "Organize CV, portfolio, and assessment notes",
            status: "pending",
            priority: "high",
          },
        ];

function App() {
  
  const [tasks, setTasks] = useState(() => {
    try {
    const savedTasks = localStorage.getItem("tasks");
    return savedTasks ?
    JSON.parse(savedTasks) : initialTasks;
    } catch (error) {
      console.error("Error parsing tasks from localStorage:", error);
      return initialTasks;
    }
  });
  const [loading, setLoading] = useState(true);

  // Simulate fetching tasks from API
  useEffect(() => {
        setLoading(false);
      }, []);

      // Save to local storage on change
      useEffect(() => {
        localStorage.setItem("tasks", JSON.stringify(tasks));
      }, [tasks]);

      // Function to add new task
      const addTask = (newTask) => {
        setTasks((prev) => [newTask, ...prev])
      };

      const deleteTask = (_id) => {
        const confirmed = window.confirm("Are you sure you want to delete this task?");
        if (!confirmed) return;

        setTasks((prev) => prev.filter((task) => task._id !== _id));
      };

      const updateTask = (id, updatedFields) => {
        setTasks((prevTasks) => 
          prevTasks.map((task) => 
            task._id === id 
        ? { ...task, ...updatedFields } 
        : task
      )
    );
      };

  return (
    <div className="min-h-screen p-6 relative overflow-hidden bg-gradient-to-br from-pink-200 via-purple-200 to-blue-100">
      <h1 className="text-3xl sm:text-4xl font-extrabold text-center mb-8 uppercase tracking-widest bg-gradient-to-r from-pink-400 via-purple-400 to-yellow-300 bg-clip-text text-transparent">Task Manager</h1>

      {/* Task Form */}
      <TaskForm addTask={addTask} />

      {/* Task list */}
      <TaskList 
      tasks={tasks} 
      loading={loading} 
      deleteTask={deleteTask} 
      updateTask={updateTask} />
     </div>
  );
}

export default App;