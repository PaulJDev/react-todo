import { SearchTodo } from './SearchTodo'
import { GrDocumentExcel } from "react-icons/gr";
import { AiOutlineTable, AiOutlineUnorderedList, AiFillPlusSquare } from "react-icons/ai";

export const TodoList = ({ children, searchValue, setSearchValue, setDisplayModal, view, setView }) => {
    const handleDisplayModal = () => setDisplayModal(true)
    const handleListView = () => setView(true)
    const handleTaleView = () => setView(false)
    return (
        <section className='p-3 bg-slate-50'>
            <div className='pb-2 flex justify-between align-middle'>
                <SearchTodo searchValue={searchValue} setSearchValue={setSearchValue} />
                <ul className='flex justify-end items-center'>
                    <li className='pr-3 border-r-1 border-red-200'><button type='button' onClick={handleDisplayModal}><AiFillPlusSquare size={35} color={'green'}/></button></li>
                    <li className='pl-1'><button type='button' onClick={handleListView}><AiOutlineUnorderedList size={25} /></button></li>
                    <li className='px-1'><button type='button' onClick={handleTaleView}><AiOutlineTable size={25} /></button></li>
                    <li><button type='button'><GrDocumentExcel size={22} /></button></li>
                </ul>
            </div>
            <div className='pb-4'>
                <span>Order by: </span><button>Priority</button>
            </div>
            <ul className={!view && 'grid grid-cols-3 gap-4'}>
            {children}
            </ul>
        </section>
    )
}