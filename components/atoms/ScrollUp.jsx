import React from 'react'
import { animateScroll as scroll } from 'react-scroll'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowAltCircleUp } from '@fortawesome/free-solid-svg-icons'

const bounce = {
    animation: 'bounce 2s infinite',
    color: 'black'
}
const ScrollUp = () => {
    const scrollToTop = () => {
        scroll.scrollToTop()
    }

    return (
        <div className="scroll scroll-up">
            <div className="arrow bounce" style={bounce}>
                <FontAwesomeIcon size="5x" color="#00bfa6" className="cursor-pointer" onClick={scrollToTop} icon={faArrowAltCircleUp} />
            </div>
        </div>
    )
}


export default ScrollUp
