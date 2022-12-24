import React from "react";
import Menu from "./Components/Menu";
import Tasks from "./Components/Tasks";

import {FaTasks} from 'react-icons/fa'
import {FcBookmark, FcClapperboard, FcShop, FcReadingEbook, FcBriefcase, FcList} from 'react-icons/fc'
import WeatherWidget from "./Components/WeatherWidget";


function App() {

  const [lists, setList] = React.useState([]);
  const [activeItem, setActiveItem] = React.useState('');

 React.useEffect(() => {
  setList([
    {id: 2, text: 'Work', className: 'work', active: false, color: '#4287f5', 
    icon: (<FcBriefcase size={'1em'} style={{marginLeft: '5px'}}/>),},
    {id: 3, text: 'Personal', className: 'personal', active: false, color: '#f57542', 
    icon: (<FcReadingEbook size={'1em'} style={{marginLeft: '5px'}}/>),},
    {id: 4, text: 'Shopping list', className: 'shopping', active: false, color: '#f5426c', 
    icon: (<FcShop size={'1em'} style={{marginLeft: '5px'}}/>),},
    {id: 5, text: 'Books', className: 'books', active: false, color: '#f5ec42', 
    icon: (<FcBookmark size={'1em'} style={{marginLeft: '5px'}}/>),},
    {id: 6, text: 'Films', className: 'films', active: false, color: '#78f542', 
    icon: (<FcClapperboard size={'1em'} style={{marginLeft: '5px'}}/>),}
  ])

  setActiveItem({
    icon: <FaTasks size={'1em'} style={{color: '#686868'}}/>,
    text: 'All tasks',
    active: false,
    className: 'all_tasks',
    id: 1
  })
 }, [])

  return (
    <div className="main_container">
    <WeatherWidget/>
    <div className='container_menu'>
    <div className="alltask_container">

    <Menu items ={[
      {
        icon: <FcList size={'1em'} style={{marginLeft: '5px'}}/>,
        text: 'All tasks',
        active: false,
        className: 'all_tasks',
        id: 1,
        tasks: []
      }
    ]}
    onClickItem={item => {setActiveItem(item)}}
    activeItem={activeItem}
    />

    </div>
    <Menu 
    items ={lists} 
    onClickItem={item => {setActiveItem(item)}}
    activeItem={activeItem}
    />
    </div>
    {lists && <Tasks 
    list={activeItem}
    />}
    </div>
  );
}

export default App;
