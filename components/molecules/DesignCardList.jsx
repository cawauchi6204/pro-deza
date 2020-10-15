import React from 'react'
import DesignCard from './DesignCard'

const DesignCardList = ({ filteredBlogs }) => {
    return (
        <>
            {filteredBlogs.map(filteredBlogs => (
                <DesignCard filteredBlogs={filteredBlogs} />
            ))}
        </>
    )
};

export default DesignCardList;
