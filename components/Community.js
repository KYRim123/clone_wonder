import React from 'react'
import styled from 'styled-components'
import BtnAppleChplay from './BtnAppleChplay'
import { TitleH1 } from './StylesComponent'

const Wrapper = styled.div``
const Container = styled.div`
  margin-top: 3rem;
`

export const Btn = styled.div`
  display: flex;
  gap: 3rem;
  align-items: center;
  justify-content: center;
  margin-top: 2rem;
`

const WrapperCA = styled.div`
  margin-top: 3rem;
  text-align: center;
`
export default function Community() {
  return (
    <Wrapper>
      <Container>
        <TitleH1 style={{ textAlign: 'center' }}>
          Everything you need
          <br />
          to start now
        </TitleH1>
        {/* content */}
        <WrapperCA>
          <BtnAppleChplay></BtnAppleChplay>
        </WrapperCA>
      </Container>
    </Wrapper>
  )
}
