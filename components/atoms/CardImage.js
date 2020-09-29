import React from 'react'
import styled from 'styled-components'

const CardImage = (props) => <Img src={props.image} />

const Img = styled.img`
    width:126px;
    height:auto;
    cursor: pointer;
`

export default CardImage
