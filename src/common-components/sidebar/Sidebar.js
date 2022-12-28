import React, { useState } from 'react'
import './Style.css'

function Sidebar({ setSelectedItem, items, selectedItem }) {
    
    const [isClicked, setisClicked] = useState(false)
    return (
        
        <div className='sidebar__wrapper'>
            {items.map((item, index) => (
                <div onClick={() => { setSelectedItem(item);setisClicked(true) }} className='sidebar__item'>
                    <div className={`${item==selectedItem ? "sidebar__clicked" : "sidebar__unclicked"}`}>
                        {item}

                    </div>
                </div>
            ))}
        </div>
    )
}

export default Sidebar