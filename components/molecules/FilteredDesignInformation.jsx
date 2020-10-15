import React from 'react'
import DesignCardList from './DesignCardList'

const FilteredDesignInformation = ({ blogs }) => {
    const filteredBlogs = blogs.filter(blog => {
        return blog.tags[0].name === 'デザイン'
    })
    console.log(filteredBlogs)
    return (
        <DesignCardList filteredBlogs={filteredBlogs} />
    )
};
export default FilteredDesignInformation;
