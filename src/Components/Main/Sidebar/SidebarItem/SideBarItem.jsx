import React from "react";
import {Icon} from "./Icon/Icon";
import {Link} from "./Link/Link";

// type PropsType = {
//     picture: string
//     link: string
// }

export const SideBarItem = (props) => {
    return (
        <li>
            <Icon picture={props.picture}/>
            <Link link={props.link}/>
        </li>

    )
}