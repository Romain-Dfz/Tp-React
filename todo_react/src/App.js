import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useParams } from 'react-router-dom';
import axios from 'axios';

function App() {
  const [todos, setTodos] = useState([]);
  const [editTodo, setEditTodo] = useState({ id: null, titre: '', description: '' });
  const [newTodo, setNewTodo] = useState({ titre: '', description: '' });

  useEffect(() => {
    axios.get("http://localhost:5000/todo")
      .then(response => {
        setTodos(response.data);
      })
      .catch(error => {
        console.error("Erreur :", error);
      });
  }, []);

  const addTodo = () => {
    axios.post("http://localhost:5000/todo", newTodo)
      .then(response => {
        console.log(response.data);
        setTodos([...todos, response.data]);
        setNewTodo({ titre: '', description: '' });
      });
  }

  const deleteTodo = (id) => {
    axios.delete(`http://localhost:5000/todo/${id}`)
      .then(() => {
        console.log("Tâche avec l'ID " + id + " supprimée");
        setTodos(todos.filter(todo => todo.id !== id));
      })
      .catch(error => {
        console.error("Erreur :", error);
      });
  }

  const updateTodo = () => {
    if (editTodo.id) {
      axios.put(`http://localhost:5000/todo/${editTodo.id}`, editTodo)
        .then(response => {
          console.log("Tâche mise à jour : ", response.data);
          setTodos(todos.map(todo => (todo.id === editTodo.id ? response.data : todo)));
          setEditTodo({ id: null, titre: '', description: '' });
        })
        .catch(error => {
          console.error("Erreur :", error);
        });
    }
  }

  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setEditTodo({ ...editTodo, [name]: value });
  }

  const handleNewTodoChange = (e) => {
    const { name, value } = e.target;
    setNewTodo({ ...newTodo, [name]: value });
  }

  return (
    <div className="App text-center">
      <header className="bg-dark text-white"><b>Liste des tâches</b></header>
      <Router>
        <div className="mb-3 p-3">
          <input
            className="p-1"
            type="text"
            name="titre"
            value={newTodo.titre}
            onChange={handleNewTodoChange}
            placeholder="Nouveau titre"
          />
          <input
            className="mb-2 p-1 mx-2"
            type="text"
            name="description"
            value={newTodo.description}
            onChange={handleNewTodoChange}
            placeholder="Nouvelle description"
          />
          <button className="btn btn-dark mx-1 mb-1" onClick={addTodo}>
            Ajouter
          </button>
        </div>
        <ul>
          {todos.map(todo => (
            <div key={todo.id}>
              <div>
                <Link to={`/todo/${todo.id}`} style={{ textDecoration: 'none', fontWeight: 'bold' }}>{todo.titre}</Link>
                {todo.id === editTodo.id && (
                  <div>
                    <input
                      className="mx-2"
                      type="text"
                      name="titre"
                      value={editTodo.titre}
                      onChange={handleEditChange}
                    />
                    <input
                      type="text"
                      name="description"
                      value={editTodo.description}
                      onChange={handleEditChange}
                    />
                    <button className="btn btn-primary mx-1 mb-1" onClick={updateTodo}>
                      Enregistrer
                    </button>
                    <button className="btn btn-danger mb-1" onClick={() => deleteTodo(todo.id)}>
                      Supprimer
                    </button>
                  </div>
                )}
              </div>
            </div>
          ))}
        </ul>

        <Routes>
          <Route path="/todo/:id" element={<TodoDetail todos={todos} editTodo={editTodo} setEditTodo={setEditTodo} updateTodo={updateTodo} deleteTodo={deleteTodo} />} />
        </Routes>
      </Router>
    </div>
  );
}

const TodoDetail = ({ todos, editTodo, setEditTodo, updateTodo, deleteTodo }) => {
  const { id } = useParams();
  const todo = todos.find(todo => todo.id === parseInt(id));

  if (!todo) {
    // Gérer le cas où 'todo' est indéfini
    return <div></div>;
  }

  const handleEdit = () => {
    setEditTodo({ id: todo.id, titre: todo.titre, description: todo.description });
  }

  const handleDelete = () => {
    deleteTodo(todo.id);
  }

  return (
    <div className="border rounded">
      <h2 className="p-1"><b>Détails de la tâche :</b></h2>
      <p><b>ID : </b>{todo.id}</p>
      <p><b>Titre : </b>{todo.titre}</p>
      <p><b>Description : </b>{todo.description}</p>
      <button className="btn btn-primary mx-2 mb-2" onClick={handleEdit}>Modifier</button>
      <button className="btn btn-danger mb-2" onClick={handleDelete}>Supprimer</button>
      <Link className="btn btn-warning mx-2 mb-2" to="/">Retour à la liste des tâches</Link>
    </div>
  );
};

export default App;
