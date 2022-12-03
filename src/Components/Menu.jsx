import React from 'react'

import {FaCircle} from 'react-icons/fa'
import classNames from 'classnames'

export default function Menu({ items, onClick,  onClickItem, activeItem}) {


  return (
    <div>
    <ul className='ul_menu' onClick={onClick}>
        {
          items.map(item => (
            <li 
            key={item.id}
            className={classNames(item.className, {
              active: activeItem  && activeItem.id === item.id
            })} 
            onClick = {onClickItem ? () => onClickItem(item) : null}>
            <i>{item.icon ? item.icon : (<FaCircle size={'0.65em'} style={{color: item.color, marginLeft: '5px'}}/>)}</i>
            <span className='menu_text'>{item.text}</span>
        </li>
          ))
        }
    </ul>

    </div>
  )
}
