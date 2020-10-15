import React from 'react'

import HeaderTitle from '../atoms/HeaderTitle'

const Header = () => {
    return (
        <header className="w-full h-auto flex justify-between fixed bg-gray-100 p-2 block">
            <HeaderTitle titleName={'prodeza'} />
            <nav>
                <ul className="m-2 flex">
                    <li>このサイト</li>
                    <li>プログラミング</li>
                    <li>デザイン</li>
                </ul>
            </nav >
        </header >
    )
}

export default Header
