import { useState } from 'react'
import './App.css'
import AddTask from './components/AddTask'
import Tasks from './components/Tasks'

function App() {
  const [tasks, setTasks] = useState([{
    id: 1,
    title: 'Aprender React Js',
    description: 'Quero aprender a programar em React com Vite e Tailwind',
    isCompleted: false
  }, {
    id: 2,
    title: 'Compras do Mês',
    description: 'Aqui uma lista de compras do mês...',
    isCompleted: false
  }, {
    id: 3,
    title: 'Comprar meu Passat rebaixado',
    description: 'Juntar dinheiro para comprar meu passat rebaixado',
    isCompleted: false
  }])

  function onTaskClick(taskId) {
    const newTasks = tasks.map((task) => {
      if(task.id === taskId) {
        return {...task, isCompleted: !task.isCompleted}
      }
      return task
    })
    setTasks(newTasks)
  }

  return (
    <div className='w-screen h-screen bg-slate-500 flex justify-center p-6'>
      <div className='w-[500px]'>
        <h1 className='text-3xl text-slate-100 font-bold text-center'>Gerenciador de tarefas</h1>
        <AddTask />
        <Tasks tasks={tasks} onTaskClick={onTaskClick}/>
      </div>
    </div>
  )
}

export default App
