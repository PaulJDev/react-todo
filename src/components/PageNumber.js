export const PageNumber = ({ number, setPagination }) => {
    const handleOnClick = () => setPagination(number - 1)

    return (
        <li className="mx-4 bg-white border rounded-2xl border-black">
            <button className="py-0.5 px-5" onClick={handleOnClick}>{number}</button>
        </li>
    )
    
} 