import { AiFillGithub } from 'react-icons/ai'

export const Footer = () => {
    return (
        <footer className="bg-gray-200 mt-auto bg-gradient-to-r from-red-50 via-yellow-50 to-green-50">
            <div className="p-4 flex justify-between">
                <p>The TODO List</p>
                <a className="text-gray-800" href="https://github.com/PaulJDev/react-todo" target="_blank" rel="noreferrer">
                    <AiFillGithub size={35}/>
                </a>
            </div>
        </footer>
    )   
}