export const SearchTodo = ({ searchValue, setSearchValue }) => {
    const handleOnChange = evt => setSearchValue(evt.target.value)    

    return (
        <div className="xl:w-96">
            <div className="input-group flex flex-wrap items-stretch w-full mb-4">
                <input
                    type="search"
                    className="mt-3 form-control flex-auto min-w-0 block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Search" aria-label="Search" aria-describedby="button-addon2"
                    onChange={handleOnChange}
                    value={searchValue}
                />
            </div>
        </div>
    )
}