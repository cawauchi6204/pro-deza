import React from 'react'
import ProgrammingCardList from './ProgrammingCardlist'

const FilteredProgrammingInformation = ({ blogs }) => {
    const filteredBlogs = blogs.filter(blog => {
        return blog.tags[0].name === 'プログラミング'
    })
    console.log(filteredBlogs)
    return (
        <ProgrammingCardList filteredBlogs={filteredBlogs} />
    )
};

export default FilteredProgrammingInformation;
