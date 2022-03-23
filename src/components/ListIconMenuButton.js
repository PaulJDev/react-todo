export const ListIconMenuButton = ({ children, className, title, handleFunction = null }) => {
    const style = `${className} hover:scale-110`

    if (handleFunction) {
        return (
            <li className={style}>
                <button type='button' onClick={handleFunction} title={title}>
                    {children}
                </button>
            </li>
        )
    }
    return (
        <li className={style}>
            <button type='button' title={title}>
                {children}
            </button>
        </li>
    )
}