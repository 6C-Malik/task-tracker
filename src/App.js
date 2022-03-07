import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";
import { useState } from "react";

export default function App() {
  const [showAddTask, setShowAddTask] = useState(false);
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Rendez-vous chez le docteur",
      day: "2 Janvier à 14h30",
      reminder: false,
    },
    {
      id: 2,
      text: "Rendez-vous à l'école",
      day: "19 Janvier à 9h30",
      reminder: false,
    },
    {
      id: 3,
      text: "Rendez-vous à Pôle emploi",
      day: "15 Juillet à 10h00",
      reminder: true,
    },
    {
      id: 4,
      text: "Rendez-vous à la gare du nord",
      day: "7 Août à 14h30",
      reminder: true,
    },
  ]);

  //Ajouter une tâche
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1;
    const newTask = { id, ...task };
    setTasks([...tasks, newTask]);
  };

  // Supprimer une tâche
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  //Rappel de tâche
  const toggleReminder = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    );
  };

  return (
    <div className="container">
      <Header
        onAdd={() => setShowAddTask(!showAddTask)}
        showAdd={showAddTask}
      />
      {showAddTask && <AddTask onAdd={addTask} />}
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
      ) : (
        "Aucune tâche pour le moment"
      )}
    </div>
  );
}
