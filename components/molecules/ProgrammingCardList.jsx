import React from 'react'
import ProgrammingCard from './ProgrammingCard'

const ProgrammingCardList = ({ filteredBlogs }) => {
    return (
        <>
            {filteredBlogs.map(filteredBlogs => (
                <ProgrammingCard filteredBlogs={filteredBlogs} />
            ))}
        </>
        //hogehoge
    )
};

export default ProgrammingCardList;
