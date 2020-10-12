import React from 'react'
import { Link } from 'react-scroll';

const Toc = ({ item }) => {
    if (item.name === 'h1') {
        return (
            <li>
                <Link
                    activeClass="active"
                    to={item.id}
                    spy={true}
                    smooth={true}
                    offset={-30}
                    duration={800}
                    className="cursor-pointer toc1"
                >{item.text}</Link>
            </li>
        )
    } else if (item.name === 'h2') {
        return (
            < li >
                <Link
                    activeClass="active"
                    to={item.id}
                    spy={true}
                    smooth={true}
                    offset={-30}
                    duration={800}
                    className="cursor-pointer toc2"
                >{item.text}</Link>
            </li>
        )
    } else if (item.name === 'h3') {
        return (
            < li >
                <Link
                    activeClass="active"
                    to={item.id}
                    spy={true}
                    smooth={true}
                    offset={-30}
                    duration={800}
                    className="cursor-pointer toc3"
                >{item.text}</Link>
            </li>
        )
    }
}


export default Toc
