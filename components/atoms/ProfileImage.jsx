import React from 'react'
import styled from 'styled-components'

const ProfileImage = (props) => <Img src={props.image} alt="プロフィールアイコン" />

const Img = styled.img`
    width:220px;
    height:auto;
`

export default ProfileImage
