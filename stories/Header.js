import React from 'react'
import styled from 'styled-components'

const AppHeader = styled.header`
    width:100%;
`;

const Header = () => {
    return (
        <AppHeader>
            <nav>
                <ol>
                    <li>このサイト</li>
                    <li>プログラミング</li>
                    <li>デザイン</li>
                </ol>
            </nav>
        </AppHeader>
    )
}

export default Header
