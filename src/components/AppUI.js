
import { Nav } from './Nav.js'
import { Footer } from './Footer.js'
import { TodoList } from './TodoList.js'

export const AppUI = () => {
    return (
        <div className='flex flex-col h-screen'>
            <Nav />
            <TodoList />
            <Footer />
        </div>
    )
}