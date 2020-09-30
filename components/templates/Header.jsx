import React from 'react'
import styled from 'styled-components'

import HeaderTitle from '../atoms/HeaderTitle'

const AppHeader = styled.header`
    width: 100%;
    height:70px;
    background-color:black;
`

const NavOl = styled.ol`
    margin:0;
`

const Header = () => {
    return (
        <AppHeader>
            <HeaderTitle titleName={'prodeza'} />
            <nav>
                <NavOl>
                    <li>このサイト</li>
                    <li>プログラミング</li>
                    <li>デザイン</li>
                </NavOl>
            </nav >
        </AppHeader >
    )
}

export default Header
