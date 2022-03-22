import { useState } from 'react'
import { IoCaretDownOutline, IoCaretUpOutline } from "react-icons/io5";
import { BiDotsVerticalRounded } from "react-icons/bi";

const colorPriority = { high: 'bg-red-400', medium: 'bg-yellow-300', low: 'bg-green-400' }

export const TodoItemList = ({ description, title, priority, onComplete }) => {
  
    const [style, setStyle] = useState(false)
    const [optionStyle, setOptionStyle] = useState(false)
    
    const showDescription = () => setStyle(!style)
    

    const showOptions = () => {
      setOptionStyle(!optionStyle)
    }

    return (
      <li className='border rounded-2xl mb-4 shadow-slate-500 shadow-sm bg-white'>
          <div className='flex justify-between place-items-center px-4 py-1'>
            <div className={'text-2xl'}>{title}</div>
            <div className='flex justify-between place-items-center w-10'>
              <div className={'w-5 h-5 order-1 rounded-full ' + colorPriority[priority]}></div>
              <button type='button' className='order-2' onClick={showOptions}><BiDotsVerticalRounded size={18} /></button>
              <div id='todoOptions' className='absolute'>
                <ul className={`fixed ml-14 bg-gray-100 p-2 flex ${optionStyle ? 'block' : 'hidden'}`}>
                  <li><button onClick={onComplete}>✅</button></li>
                  <li className='px-2'><button onClick={onComplete}>❌</button></li>
                  <li><button>📝</button></li>
                </ul>
              </div>
            </div>
          </div>
          <div className={style ? 'px-4 block' : 'px-4 hidden'}>{description}</div>
          <div className='flex justify-center border-t-3 bg-gray-100 rounded-b-2xl'>
            <button type='button' className='text-black w-full flex justify-center' onClick={showDescription}>
              {!style ? <IoCaretDownOutline size={15}/> : <IoCaretUpOutline size={15}/>}
            </button>
          </div>
      </li>  
    )
}