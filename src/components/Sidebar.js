import * as React from "react";

const Sidebar = ({children}) => {
    const sidebarstyle = {
        background: "azure",
        width: "calc(30% - 10px)",
        marginLeft: "10px",
    }

    return(
        <aside>
            style={sidebarstyle}
            <h2>{children}</h2>
        </aside>
    )


}
export default Sidebar;