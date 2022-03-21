import { SearchTodo } from './SearchTodo'
import { IoAppsSharp, IoList } from "react-icons/io5";
import { GrDocumentExcel } from "react-icons/gr";
import { BsPlusSquare } from 'react-icons/bs'

export const TodoList = ({ children, searchValue, setSearchValue }) => {
    return (
        <section className='p-3 bg-slate-50'>
            <div className='pb-2 flex justify-between'>
                <SearchTodo searchValue={searchValue} setSearchValue={setSearchValue} />
                <ul className='flex justify-end'>
                    <li><button type='button'><BsPlusSquare size={25}/></button></li>
                    <li className='pl-1'><button type='button'><IoList size={25} /></button></li>
                    <li className='px-1'><button type='button'><IoAppsSharp size={23} /></button></li>
                    <li><button type='button'><GrDocumentExcel size={23} /></button></li>
                </ul>
            </div>
            <ul>
            {children}
            </ul>
        </section>
    )
}