import React, { useState, useContext, useEffect, useRef } from 'react';

// Créez un contexte pour stocker les tâches
const TaskContext = React.createContext();

function App() {
  const [tasks, setTasks] = useState([]);
  const taskNameRef = useRef(null);
  const taskDeadlineRef = useRef(null);
  const [newTaskName, setNewTaskName] = useState('');
  const [newTaskDeadline, setNewTaskDeadline] = useState('');
  const [showAddButton, setShowAddButton] = useState(false);

  // Fonction pour ajouter une nouvelle tâche
  const addTask = () => {
    if (newTaskName.trim() !== '') {
      setTasks(prevTasks => [
        ...prevTasks,
        {
          name: newTaskName,
          deadline: newTaskDeadline,
          completed: false,
        },
      ]);
      setNewTaskName('');
      setNewTaskDeadline('');
      taskNameRef.current.value = '';
      taskDeadlineRef.current.value = '';
    }
  };

  // Fonction pour marquer une tâche comme terminée ou non
  const toggleTaskCompletion = (index) => {
    setTasks(prevTasks => {
      const updatedTasks = [...prevTasks];
      updatedTasks[index].completed = !updatedTasks[index].completed;
      return updatedTasks;
    });
  };

  // Fonction pour supprimer une tâche
  const deleteTask = (index) => {
    setTasks(prevTasks => prevTasks.filter((_, i) => i !== index));
  };

  // Effet pour gérer l'affichage du bouton d'ajout
  useEffect(() => {
    setShowAddButton(newTaskName.trim() !== '');
  }, [newTaskName]);

  return (
    <div className="App">
      <h1>Liste de tâches</h1>
      <TaskContext.Provider value={{ tasks, toggleTaskCompletion, deleteTask }}>
        <TaskForm
          taskNameRef={taskNameRef}
          taskDeadlineRef={taskDeadlineRef}
          setNewTaskName={setNewTaskName}
          setNewTaskDeadline={setNewTaskDeadline}
          addTask={addTask}
          showAddButton={showAddButton}
        />
        <TaskList />
      </TaskContext.Provider>
    </div>
  );
}

function TaskForm({ taskNameRef, taskDeadlineRef, setNewTaskName, setNewTaskDeadline, addTask, showAddButton }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    addTask();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        ref={taskNameRef}
        placeholder="Nom de la tâche"
        onChange={(e) => setNewTaskName(e.target.value)}
      />
      <input
        type="date"
        ref={taskDeadlineRef}
        onChange={(e) => setNewTaskDeadline(e.target.value)}
      />
      {showAddButton && <button type="submit">Ajouter</button>}
    </form>
  );
}

function TaskList() {
  const { tasks, toggleTaskCompletion, deleteTask } = useContext(TaskContext);

  return (
    <ul>
      {tasks.map((task, index) => (
        <li key={index}>
          <span
            className={task.completed ? 'completed' : ''}
            onClick={() => toggleTaskCompletion(index)}
          >
            {task.name} - Deadline: {task.deadline}
          </span>
          <button onClick={() => deleteTask(index)}>&times;</button>
        </li>
      ))}
    </ul>
  );
}

export default App;
