import React from 'react'
import Link from 'next/link'

import CardImage from '../atoms/CardImage'
import Tag from '../atoms/Tag'

const Card = ({ blog }) => {
    return (
        <div key={blog.id} className="vertical-card bg-gray w-4/12 flex flex-col inline-block">
            <div>
                <Link href="/blogs/[id]" as={`blogs/${blog.id}`}>
                    <a>
                        <CardImage image={blog.eyeCatch.url} className="w-full cursor-pointer" height={"50%"} />
                    </a>
                </Link>
            </div>
            <div className="h-32 flex flex-col justify-evenly text-center">
                <Link href="/blogs/[id]" as={`blogs/${blog.id}`}>
                    <div className="cursor-pointer">
                        <p className="text-base leading-loose">{blog.title}</p>
                        {blog.tags.map(tag => (
                            <Tag tag={tag} />
                        ))}
                        <p className="text-xs">{blog.publishDate}</p>
                    </div>
                </Link>
            </div>
        </div>
    )
}



export default Card
