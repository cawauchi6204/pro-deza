import React from 'react'
import Link from 'next/link';
import styled from 'styled-components'


const Card = styled.card({
    border: 'black 1px solid'
})
export default Card = (props) => {
    <article>
        <div className={postThumbnail}>
            <Link to={props.link}>
                <img src="" alt="" />
            </Link>
        </div>
        <div className={postBody}>
            <div className={postMeta}>
            </div>
            <div className={postTitle}>
                <div className={postCategory}>
                </div>
            </div>
        </div>
    </article>
}
