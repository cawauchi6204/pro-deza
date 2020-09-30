import React from 'react'
import Card from './Card'

//これはpropsで参照してprops.blogsでも取れるが、分割代入で{ blogs } とすることで使いやすくなる
const CardList = ({ blogs }) => (
    <article>
        {blogs.map(blog => (
            <Card blog={blog} />
        ))}
    </article>
);

export default CardList;
