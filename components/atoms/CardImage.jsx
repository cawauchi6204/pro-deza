import React from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'

const CardImage = (props) => <LazyLoadImage src={props.image} effect="blur" width={props.width} height={props.height} />

export default CardImage
