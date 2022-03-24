import { useState } from "react"

export const CreateTodo = ({ displayModal, setDisplayModal, todos, setTodos }) => {
    
    const handleModal = () => setDisplayModal(false)
    const [txtCharacters, setTxtCharacters] = useState(100)
    const handleTextArea = evt => setTxtCharacters(100 - evt.target.value.length)

    const handleOnSubmit = evt => {
        evt.preventDefault()

        const title = evt.target.title.value
        const description = evt.target.description.value
        const priority = evt.target.priority.value
        const newTodo = { title, description, priority, tags: [], completed: false}

        setDisplayModal(false)
        setTodos([...todos, newTodo])
    }
    
    return (
        <div tabIndex="-1" aria-hidden="true" className={`flex justify-center bg-black bg-opacity-30 overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-modal md:h-full ${displayModal ? '' : 'hidden'}`}>
            <div id="createForm" className={`p-4 w-full max-w-md h-full md:h-auto ${displayModal && 'active'}`}>
                <div className="bg-white rounded-lg shadow dark:bg-gray-700">
                    <div className="flex justify-end p-2">
                        <button 
                            type="button"
                            className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
                            data-modal-toggle="createTodo-modal"
                            onClick={handleModal}
                        >
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>  
                        </button>
                    </div>
                    <form  className='px-6 pb-4 space-y-6 lg:px-8 sm:pb-6 xl:pb-8' action="#" onSubmit={handleOnSubmit}>
                        <div>
                            <label htmlFor="title" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Title</label>
                            <input type="text" name="title" id="title" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="My new TODO" required />
                        </div>
                        <div>
                            <label htmlFor="description" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Description</label>
                            <textarea 
                                name="description"
                                id="description"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                                placeholder="Enter your TODO description here"
                                maxLength="100"
                                rows="6"
                                style={{ resize: 'none' }}
                                onChange={handleTextArea}
                            />
                            <span className="block mb-2 text-sm font-medium text-gray-400 dark:text-gray-300">Max. characters: {txtCharacters}</span>
                        </div>
                        <div>
                            <label htmlFor="priority" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Priority</label>
                            <div className="flex justify-around">
                                <div className="flex p-2 border-1">
                                    <input className="mt-1.5" type="radio" id="high" name="priority" value="high" required/>
                                    <label className="px-2" htmlFor="high">High</label>
                                    <div className="w-4 h-4 rounded-full bg-red-400 mt-1"></div>                                    
                                </div>
                                <div className="flex p-2">
                                    <input className="mt-1.5" type="radio" id="medium" name="priority" value="medium" defaultChecked />
                                    <label className="px-2" htmlFor="medium">Medium</label>
                                    <div className="w-4 h-4 rounded-full bg-yellow-300 mt-1"></div>                                    
                                </div>
                                <div className="flex p-2">
                                    <input className="mt-1.5" type="radio" id="low" name="priority" value="low" />
                                    <label className="px-2" htmlFor="low">Low</label>
                                    <div className="w-4 h-4 rounded-full bg-green-400 mt-1"></div>                                    
                                </div>
                            </div>
                        </div>
                        <button 
                            type="submit"
                            className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        >
                            Create
                        </button>
                    </form>
                </div>
            </div>
        </div> 
    )
}