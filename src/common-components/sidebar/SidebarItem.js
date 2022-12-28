import React, { useState } from 'react'

function SidebarItem({item}) {
    const [isClicked, setisClicked] = useState(false)

    return (
        <div onClick={() => { setisClicked(true) }} className={`${isClicked ? "sidebar__clicked" : "sidebar__unclicked"}`}>
            {item}

        </div>
    )
}

export default SidebarItem