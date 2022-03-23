import { createContext, useState } from 'react'
import { initTodos } from '../data.js'
import { TodoItemList } from '../components/TodoItemList'
import { TodoItemTable } from '../components/TodoItemTable'
export const AppContext = createContext(initTodos)


export const AppProvider = ({ children }) => {

  const [todos, setTodos] = useState(initTodos)
  const [searchValue, setSearchValue] = useState('')
  const [displayModal, setDisplayModal] = useState(false)
  const [view, setView] = useState(true)

  const completeTodo = title => {
    const newTodos = todos.map(e => e.title === title ? {...e, completed: true} : e)
    setTodos(newTodos)
  }
  
  const formatTodo = arr => arr.map(({ id, title, description, priority }) => {
    if (view) {
      return (
        <TodoItemList
          title={title}
          description={description}
          priority={priority}
          key={id}
          onComplete={() => completeTodo(title)}
        />
      )
      
    }
    return (
      <TodoItemTable
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
    <AppContext.Provider
      value={{
        todosToShow,
        todos,
        setTodos,
        searchValue,
        setSearchValue,
        displayModal,
        setDisplayModal,
        view,
        setView,
        formatTodo
      }}
    >
      {children}
    </AppContext.Provider >
  )

}
