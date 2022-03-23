import { useState } from 'react'
import { TodoItemList } from './TodoItemList'
import { TodoItemTable } from './TodoItemTable'
import { CreateTodo } from './CreateTodo.js'
import { SearchTodo } from './SearchTodo'
import { ListIconMenuButton } from './ListIconMenuButton'
import { GrDocumentExcel } from "react-icons/gr";
import { AiOutlineTable, AiOutlineUnorderedList, AiFillPlusSquare } from "react-icons/ai";
import { TodoCounter } from './TodoCounter.js'
import { initTodos } from '../data.js'

export const TodoList = () => {  
    const [view, setView] = useState(true)
    const [displayModal, setDisplayModal] = useState(false)
    const [todos, setTodos] = useState(initTodos) 
    const [searchValue, setSearchValue] = useState('')

    const handleDisplayModal = () => setDisplayModal(true)
    const handleListView = () => setView(true)
    const handleTaleView = () => setView(false)
    
    
    const completeTodo = title => {
        const newTodos = todos.map(e => e.title === title ? {...e, completed: true} : e)
        setTodos(newTodos)
    }

    const formatTodo = arr => arr.map(({ id, title, description, priority }) => {
        return view
            ? (
                <TodoItemList
                    title={title}
                    description={description}
                    priority={priority}
                    key={id}
                    onComplete={() => completeTodo(title)}
                />
            )
            : (
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
        <>
        <main className='mx-auto w-4/6 flex-grow pb-6'>
            <TodoCounter todos={todosToShow.length}/>
                <section className='p-3 bg-slate-50'>
                    <div className='pb-2 flex justify-between align-middle'>
                        <SearchTodo searchValue={searchValue} setSearchValue={setSearchValue} />
                        <ul className='flex justify-end items-center'>
                                <ListIconMenuButton
                                    className='mr-6'
                                    title='Create TODO'
                                    handleFunction={handleDisplayModal}
                                >
                                    <AiFillPlusSquare size={35} color={'green'}/>
                                </ListIconMenuButton>
                                <ListIconMenuButton
                                    title='List View'
                                    handleFunction={handleListView}
                                >
                                    <AiOutlineUnorderedList size={25} />
                                </ListIconMenuButton>
                                <ListIconMenuButton
                                    title='Table view'
                                    className='mx-2'
                                    handleFunction={handleTaleView}
                                >
                                    <AiOutlineTable size={25} />
                                </ListIconMenuButton>
                                <ListIconMenuButton title='Download excel'>
                                    <GrDocumentExcel size={22} />
                                </ListIconMenuButton>
                        </ul>
                    </div>
                    <div className='pb-4'>
                        <span>Order by: </span><button>Priority</button>
                    </div>
                    <ul className={!view && 'grid grid-cols-3 gap-4'}>
                        {
                            todosToShow.length > 0
                                ? formatTodo(todosToShow)
                                : <p>TODO's not found</p>
                        }
                    </ul>
                </section>
            </main>
            <CreateTodo 
                displayModal={displayModal}
                setDisplayModal={setDisplayModal}
                todos={todos}
                setTodos={setTodos}
            />
        </>
    )
}