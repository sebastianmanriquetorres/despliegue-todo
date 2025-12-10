import { useState, useEffect } from 'react'
import './App.css'
import TaskForm from './components/TaskForm'
import TaskList from './components/TaskList'

const API_URL = 'https://backend-todolist-l3qk.onrender.com/api'

function App() {
  const [tasks, setTasks] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [showForm, setShowForm] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')

  useEffect(() => { fetchTasks() }, [])

  const fetchTasks = async () => {
    setLoading(true); setError(null)
    try {
      const res = await fetch(`${API_URL}/tasks`)
      if (!res.ok) throw new Error('Error al obtener tareas')
      const data = await res.json()
      setTasks(data)
    } catch (err) {
      setError(err.message || 'Error desconocido')
    } finally { setLoading(false) }
  }

  const handleAddTask = async (title, description) => {
    const res = await fetch(`${API_URL}/tasks`, {
      method: 'POST', headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({ title, description })
    })
    if (!res.ok) throw new Error('Error al crear tarea')
    const newTask = await res.json()
    setTasks(prev => [newTask, ...prev])
    setShowForm(false)
  }

  const handleToggleTask = async (taskId, currentCompleted) => {
    const res = await fetch(`${API_URL}/tasks/${taskId}`, {
      method: 'PUT', headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({ completed: !currentCompleted })
    })
    if (!res.ok) throw new Error('Error al actualizar tarea')
    const updatedTask = await res.json()
    setTasks(prev => prev.map(t => t.id === taskId ? updatedTask : t))
  }

  const handleDeleteTask = async (taskId) => {
    const res = await fetch(`${API_URL}/tasks/${taskId}`, { method: 'DELETE' })
    if (!res.ok) throw new Error('Error al eliminar tarea')
    setTasks(prev => prev.filter(t => t.id !== taskId))
  }

  const handleEditTask = async (taskId, title, description) => {
    const res = await fetch(`${API_URL}/tasks/${taskId}`, {
      method: 'PUT', headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({ title, description })
    })
    if (!res.ok) throw new Error('Error al actualizar tarea')
    const updatedTask = await res.json()
    setTasks(prev => prev.map(t => t.id === taskId ? updatedTask : t))
  }

  // filtrar por búsqueda
  const filtered = tasks.filter(t =>
    t.title?.toLowerCase().includes(searchQuery.trim().toLowerCase())
  )

  const todo = filtered.filter(t => !t.completed)
  const done = filtered.filter(t => t.completed)

  return (
    <div className="neo-app">
      <div className="neo-top">
        <div className="neo-logo">
          <div className="mark">CC</div>
          <div>
            <div className="neo-title">Code_craft - Nuevo</div>
          </div>
        </div>

        <div className="neo-filters">
          <button
            className={`neo-chip ${showForm ? 'active' : ''}`}
            onClick={() => setShowForm(s => !s)}
            aria-pressed={showForm}
          >
            {showForm ? 'Cerrar' : 'Crear'}
          </button>

          <button
            className="neo-chip"
            onClick={() => fetchTasks()}
            disabled={loading}
            title="Reiniciar tareas"
          >
            Reiniciar
          </button>

          <input
            className="neo-search"
            placeholder="Filtrar por nombre..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            aria-label="Filtrar tareas"
          />
        </div>
      </div>

      <div className="neo-container">
        <div className="neo-left">
          <div className="neo-card">
            <h2>Agregar Tarea</h2>
            {showForm ? (
              <TaskForm onAddTask={handleAddTask} />
            ) : (
              <p className="muted">Presiona "Crear" para añadir una nueva tarea.</p>
            )}
          </div>

          <div className="neo-card neo-board-card">
            <h2>Placa de tareas</h2>

            {loading && <p className="muted">Cargando tareas...</p>}
            {error && <p className="error">{error}</p>}

            {!loading && !error && (
              <div className="neo-board-grid">
                <div>
                  <h4 className="neo-column-title">Por hacer ({todo.length})</h4>
                  <TaskList tasks={todo} onToggle={handleToggleTask} onDelete={handleDeleteTask} onEdit={handleEditTask} />
                </div>
                <div>
                  <h4 className="neo-column-title">Completado ({done.length})</h4>
                  <TaskList tasks={done} onToggle={handleToggleTask} onDelete={handleDeleteTask} onEdit={handleEditTask} />
                </div>
              </div>
            )}
          </div>
        </div>

        <aside className="neo-right">
          <div className="neo-card neo-stats">
            <h3>Resumen</h3>
            <p>Total: <strong>{tasks.length}</strong></p>
            <p>Completadas: <strong>{done.length}</strong></p>
          </div>

          <div className="neo-card neo-help">
            <h3>Explicación</h3>
            <ul>
              <li>Click en la tarea para editar.</li>
              <li>Marcar completada mueve a Done.</li>
              <li>Interfaz limpia y moderna.</li>
            </ul>
          </div>
        </aside>
      </div>
    </div>
  )
}

export default App