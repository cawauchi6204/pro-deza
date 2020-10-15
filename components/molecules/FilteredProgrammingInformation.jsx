import React from 'react'
import ProgrammingCardList from './ProgrammingCardList'

const FilteredProgrammingInformation = ({ blogs }) => {
    const filteredBlogs = blogs.filter(blog => {
        return blog.tags[0].name === 'プログラミング'
    })
    console.log(filteredBlogs)
    return (
        <ProgrammingCardList filteredBlogs={filteredBlogs} />
    )
    // hoge
};

export default FilteredProgrammingInformation;
