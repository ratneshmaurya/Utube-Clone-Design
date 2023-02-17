import React from 'react'
import "./SidebarRow.css";
function Sidebarrow({selected, Icon,title}) {
    return ( 
        // now here for default selection on very first run ,it means if it is selected then apply the selected class properties
        <div className={`sidebarRow ${selected && "selected"}`}> 
            <Icon className="sidebarRow__icon" />
            <h2 className="sidebarRow__title">{title}</h2>
        </div>
    )
}

export default Sidebarrow
