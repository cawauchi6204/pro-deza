import React from 'react'
import Link from 'next/link'
import CardImage from '../atoms/CardImage'

const Card = ({ blog }) => {
    return (
        <>
            <div key={blog.id} className="vertical-card bg-gray w-3/12 flex flex-col justify-between" >
                <div>
                    <div>
                        <Link href="/blogs/[id]" as={`blogs/${blog.id}`}>
                            <CardImage image={blog.eyeCatch.url} className="w-full" height={'auto'} />
                        </Link>
                    </div>
                    <Link href="/blogs/[id]" as={`blogs/${blog.id}`}>
                        <h2 className="text-2xl leading-loose">{blog.title}</h2>
                    </Link>
                    <p>{blog.publishDate}</p>
                    {blog.tags.map(tag => (
                        <React.Fragment key={tag.id}>
                            <span>{tag.name}</span>
                        </React.Fragment>
                    ))}
                </div>
            </div>
        </>
    )
}



export default Card
