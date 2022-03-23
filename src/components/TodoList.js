import { SearchTodo } from './SearchTodo'
import { ListIconMenuButton } from './ListIconMenuButton'
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
                        <ListIconMenuButton
                            className='pr-6'
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
                            className='px-2'
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
                {children}
            </ul>
        </section>
    )
}