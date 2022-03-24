import { PageNumber } from './PageNumber.js'

export const Pagination = ({ chuncksLength, setPagination }) => {
    return (
        <ul className="py-4 flex justify-end">
            {Array(chuncksLength).fill().map((_, i ) => <PageNumber number={i + 1} setPagination={setPagination}/>)}
        </ul>
    )
}