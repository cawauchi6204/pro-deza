import React from 'react'
import Link from 'next/link'

import Tag from '../atoms/Tag'
import CardImage from '../atoms/CardImage'

const DesignCard = ({ filteredBlogs }) => {
    console.log(filteredBlogs)
    return (
        <div key={filteredBlogs.id} className="vertical-card bg-gray w-9/12 flex flex-col inline-block mx-auto">
            <div>
                <Link href="/blogs/[id]" as={`blogs/${filteredBlogs.id}`}>
                    <a>
                        <CardImage image={filteredBlogs.eyeCatch.url} className="w-full cursor-pointer" height={"50%"} />
                    </a>
                </Link>
            </div>
            <div className="h-32 flex flex-col justify-evenly text-center">
                <Link href="/blogs/[id]" as={`blogs/${filteredBlogs.id}`}>
                    <div className="cursor-pointer">
                        <p className="text-base leading-loose">{filteredBlogs.title}</p>
                        <p className="text-xs">{filteredBlogs.publishDate}</p>
                        {filteredBlogs.tags.map(tag => (
                            <Tag tag={tag} />
                        ))}
                    </div>
                </Link>
            </div>
        </div>
    )
}



export default DesignCard
