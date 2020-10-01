import React from 'react'
import Link from 'next/link'
import CardImage from '../atoms/CardImage'

const Card = ({ blog }) => {
    return (
        <>
            <div key={blog.id} className="vertical-card bg-gray w-3/12 flex flex-col justify-evenly">
                <div>
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
                                    <React.Fragment key={tag.id}>
                                        <span className="text-xs">{tag.name}</span>
                                    </React.Fragment>
                                ))}
                                <p className="text-xs">{blog.publishDate}</p>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}



export default Card
