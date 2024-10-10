import React, { useState } from "react";
import "../../assets/css/main.css";
import SidebarList from "./SidebarList";
import MyRoutes from "../../routers/routes";

import { BsChevronLeft, BsChevronRight} from "react-icons/bs";

const Sidebar = () =>{
    const [expandSidebar, setExpandSidebar] = useState(true);
    
    const handleExpandClick = () => {
        setExpandSidebar(!expandSidebar);
    };

    return(
        <div className="container-fluid sidebar-section">
            <div className={expandSidebar ? "sidebar-expand sidebar" : "sidebar"}>

                <div className="icon-for-sidebar-expand-and-collapse">   
                    <div className="sidebar-icon-collapse">
                    <p onClick={handleExpandClick}>
                        {expandSidebar ? (
                            <BsChevronLeft size={30}/>
                        ) : (
                            <BsChevronRight size={30}/>
                        )}
                    </p>
                    </div>
                    
                    <SidebarList expandSidebar={expandSidebar}/> 

                   
                                       
                </div>       
            </div>
            <div className="container-fluid">
            <MyRoutes/>
            </div>
                 

            
        </div>
    );
};

export default Sidebar;