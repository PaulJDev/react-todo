import { useState } from 'react'
import { IoCaretDownOutline } from "react-icons/io5";
import { BiDotsVerticalRounded } from "react-icons/bi";

export const TodoItemTable = ({ description, title, priority, onComplete }) => {
      
    const [style, setStyle] = useState(false)
    const [optionStyle, setOptionStyle] = useState(false)

    const showDescription = () => {
      setStyle(!style)
    }

    const showOptions = () => {
      setOptionStyle(!optionStyle)
    }
    const colorPriority = { high: 'bg-red-400', medium: 'bg-yellow-300', low: 'bg-green-400' }

    return (
        <li className='border rounded-2xl mb-4 shadow-slate-500 shadow-sm bg-white'>
            <div className='flex space-x-1 p-2 items-center'>
                <div className='px-2'>
                    <div className={'w-4 h-4 rounded-full ' + colorPriority[priority]}></div>
                </div>
                <div className='text-lg'>{title.length > 20 ? `${title.slice(0, 20)}...` : title}</div>
            </div>
        </li>
        )
}