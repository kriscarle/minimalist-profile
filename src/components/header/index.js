import React from 'react'
import styled from 'styled-components'
import { ProfileImage } from './profile-image'
import { Background } from './background';
import bannerImageUrl from '../../assets/banner.jpg'
import profileImageUrl from '../../assets/profile.jpg'
import { headerHeight } from 'styleguide/breakpoints'

const StyledHeader = styled.header`
  position:relative;
  height: ${headerHeight};
`

export const Header = () =>
  (
    <StyledHeader>
      <Background imageUrl={bannerImageUrl} />
      <ProfileImage imageUrl={profileImageUrl} />
    </StyledHeader>
  )
