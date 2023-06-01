import React from 'react'
import Center from './Center'
import { TitleH1 } from './Features'
import { Video, WrapperVideo } from './Slide'
import styled from 'styled-components'
import BtnAppleChplay from './BtnAppleChplay'

export const CommunityBtn = styled.div`
  display: flex;
  gap: 3rem;
  align-items: center;
  justify-content: center;
  margin-top: 2rem;
`

const CommunityStyled = styled.div`
  margin-top: 3rem;
`
const WrapperCA = styled.div`
  margin-top: 3rem;
  text-align: center;
`
export default function Community() {
  return (
    <Center>
      <CommunityStyled>
        <TitleH1 style={{ textAlign: 'center' }}>
          Everything you need
          <br />
          to start now
        </TitleH1>
        <WrapperVideo>
          <Video autoPlay loop muted>
            <source src="/videoCommunity.mp4" type="video/mp4" />
          </Video>
        </WrapperVideo>
        <WrapperCA>
          <BtnAppleChplay></BtnAppleChplay>
        </WrapperCA>
      </CommunityStyled>
    </Center>
  )
}
