import React from 'react'
import Menu from './Menu'

import {FaPlus} from 'react-icons/fa'
import {AiFillCloseCircle} from 'react-icons/ai'

export default function AddBtnList({addList}) {

const [open, setOpen] = React.useState(false);
const [input, setValue] = React.useState('');

const AddList = () => {
  if (!input) {
    alert('Please, add your list!')
    return;
  }
  addList({id: Date.now(), text: input, className: input, active: false, tasks:[]});
  setValue('');
  setOpen(false);

}

  return (
    <div className='add_new_list'>
    <div className="add_btn">
    <Menu 
    onClick ={() => setOpen(true)}
    items ={[
    {
      icon: <FaPlus size={'0.85em'} style={{color: '#525252'}}/>,
      text: 'Add new list',
      id: Math.random()
    }]}
  />
  </div>
  {open &&<div className='modal_add_list'>
  <AiFillCloseCircle size={'1.25em'} className='close_img' onClick={() => setOpen(false)}/>
  <input value={input} onChange={e => setValue(e.target.value)} className='field' type='text' placeholder='Add new List'/>
  <button onClick={AddList} className='btn'>Add List</button>
  </div>}
  </div>
  )
}
