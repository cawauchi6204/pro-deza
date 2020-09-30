import React from 'react'
import Link from 'next/link';

import CardImage from '../atoms/CardImage'

//これはpropsで参照してprops.blogsでも取れるが、分割代入で{ blogs } とすることで使いやすくなる
const CardList = ({ blogs }) => (
    <article style={{ border: '1px red solid' }}>
        <div>
            {blogs.map(blog => (
                <React.Fragment key={blog.id} >
                    <Link href="/blogs/[id]" as={`blogs/${blog.id}`}>
                        <h2 style={{ cursor: 'pointer', display: 'inline-block' }}>{blog.title}</h2>
                    </Link>
                    <Link href="/blogs/[id]" as={`blogs/${blog.id}`}>
                        <CardImage style={{ cursor: 'pointer' }} image={blog.eyeCatch.url} width={'126px'} height={'auto'} />
                    </Link>
                    <p>{blog.publishDate}</p>
                    {blog.tags.map(tag => (
                        <React.Fragment key={tag.id}>
                            <span>{tag.name}</span>
                        </React.Fragment>
                    ))}
                </React.Fragment>
            ))}
        </div>
    </article>
);

export default CardList;
