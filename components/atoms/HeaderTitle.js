import React from 'react'
import styled from 'styled-components'

const HeaderTitle = (props) => (
    <Title>{props.titleName}</Title>
)

const Title = styled.h3`
    font-size:32px;
`

export default HeaderTitle


