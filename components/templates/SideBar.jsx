import React from 'react'

import ProfileImage from '../atoms/ProfileImage'

const SideBar = () => (
    <aside className="bg-gray-300 w-3/12 flex flex-col p-4">
        <ProfileImage image={'../../static/km266945892610102219347.png'} className="" />
        <nav className="my-3">
            <ul className="flex flex-col">
                <li className="mt-2">cawauchi</li>
                <li className="mt-2">Front-end engineer</li>
                <li className="mt-2">Github</li>
                <li className="mt-2">Email</li>
            </ul>
        </nav>
        <span className="mt-2">2019/11/14 ~プログラミング独学開始</span>
        <span className="mt-2">2020/8/3~ フロントエンドエンジニア</span>
    </aside>
)

export default SideBar
