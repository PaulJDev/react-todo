import React, { useState } from 'react'
import { TodoCounter } from './TodoCounter.js'
import { TodoList } from './TodoList.js'
import { Nav } from './Nav.js'
import { Main } from './Main.js'
import { Footer } from './Footer.js'
import { TodoItem } from './TodoItem.js'
import { CreateTodo } from './CreateTodo.js'
import { AppProvider } from '../context/AppContext.js'


const initTodos = [
  { id: 1, description: 'Hacer algo 1', tags: ['javascript'], completed: false, title: 'Esto es una descripción de prueba más larga que la que tenía antes.', priority: 'high'},
  { id: 2, description: 'Hacer algo 2', tags: ['javascript'], completed: false, title: 'My false todo 2', priority: 'medium'},
  { id: 3, description: 'Hacer algo 3', tags: ['javascript'], completed: false, title: 'My false todo 3', priority: 'low'},
  { id: 4, description: 'Hacer algo 4', tags: ['javascript'], completed: false, title: 'My false todo 4', priority: 'low'},
  { id: 5, description: 'Hacer algo 5', tags: ['javascript'], completed: false, title: 'My false todo 5', priority: 'medium'},
]

function App() {
  const [todos, setTodos] = useState(initTodos)
  const [searchValue, setSearchValue] = useState('')
  const [displayModal, setDisplayModal] = useState(false)

  const completeTodo = title => {
    const newTodos = todos.map(e => e.title === title ? {...e, completed: true} : e)
    setTodos(newTodos)
  }
  
  const formatTodo = arr => arr.map(({ id, title, description, priority }) => {
    return (
      <TodoItem
        title={title}
        description={description}
        priority={priority}
        key={id}
        onComplete={() => completeTodo(title)}
      />
    )
  })

  const getTodosSearched = () => {
    const includesText = str => text => text.toLowerCase().includes(str)
    const search = includesText(searchValue.toLowerCase())
    return todos.filter(({ title, description}) => search(title) || search(description))
  }

  const todosToShow = (searchValue ? getTodosSearched() : todos ).filter(({ completed }) => !completed)
  
  return (
      <main className='flex flex-col h-screen'>
        <Nav />
        <CreateTodo 
          displayModal={displayModal}
          setDisplayModal={setDisplayModal}
          todos={todos}
          setTodos={setTodos}
        />
        <Main>
          <TodoCounter todos={todosToShow.length}/>
          <TodoList
            searchValue={searchValue}
            setSearchValue={setSearchValue}
            todos={todos}
            setDisplayModal={setDisplayModal}
          >
            {
              todosToShow.length > 0
                ? formatTodo(todosToShow)
                : <p>No se ha encontrado ninguna coincidencia</p>
            }
          </TodoList>
        </Main>
        <Footer />
      </main>
  )
    
}

export default App;
