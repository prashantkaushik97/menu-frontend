import React, { useState } from 'react'
import './Style.css'

function Sidebar({ setSelectedItem, items }) {
    function name(params) {

    }
    const [isClicked, setisClicked] = useState(false)
    return (
        
        <div className='sidebar__wrapper'>
            {items.map((item, index) => (
                <div onClick={() => { setSelectedItem(item) }} className='sidebar__item'>
                    <div onClick={()=>{setisClicked(true)}} className={`${isClicked ? "sidebar__clicked" : "sidebar__unclicked"}`}>
                        {item}

                    </div>
                </div>
            ))}
        </div>
    )
}

export default Sidebar