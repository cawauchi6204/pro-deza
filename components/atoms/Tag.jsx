import React from 'react'

const Tag = ({ tag }) => (
    <span key={tag.id} className="inline-block text-xs border-solid border-teal-300 border-2 m-2 p-1 rounded-lg">{tag.name}</span>
)

export default Tag

