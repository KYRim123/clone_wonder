import React from 'react'
import styled, { css } from 'styled-components'
import BtnAppleChplay from './BtnAppleChplay'
import { BlurStyled, TitleH1, centerItem, marqueeRight } from './StylesComponent'
import ImageComponent from './Image'
import { marquee } from './Brand'

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

const WrapperImages = styled.div`
  position: relative;
  opacity: 0.8;
  overflow: hidden;
  padding: 3rem 0;
  border-right: 15px solid #fff;
  border-left: 15px solid #fff;
`

const Marquee = styled.ul`
  display: flex;
  gap: 1rem;
  padding: 0.5rem 0;
  ${(props) =>
    props.direction === 'left' &&
    css`
      animation: ${marquee} 30s linear infinite;
    `}
  ${(props) =>
    props.direction === 'right' &&
    css`
      animation: ${marqueeRight} 35s linear infinite;
    `}
   
  li {
    flex-shrink: 0;
  }
  @media (max-width: 739px) {
    ${(props) =>
      props.disNone &&
      css`
        display: none;
      `}
  }
`
const WrapperImagePhone = styled.div`
  position: absolute;
  z-index: 1;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  ${centerItem};
  @media (max-width: 1023px) {
    padding: 1rem;
  }
`

export default function Community() {
  const listImage = [
    'https://framerusercontent.com/images/w5AFpPyGyk9W21U7wvU86aRK0c.png?scale-down-to=512',
    'https://framerusercontent.com/images/ZUH9aMhO0ywTmQsUFtPfYTKFvI.png?scale-down-to=512',
    'https://framerusercontent.com/images/R2MQPy0vyEQefQXi5DAhFI9iukY.png?scale-down-to=512',
    'https://framerusercontent.com/images/tcEh7Xh5h25iWUaoMxQ2HUPsLkk.png?scale-down-to=512',
    'https://framerusercontent.com/images/roS45iclWC6AmErdNGBOd7GIVA.png?scale-down-to=512',
    'https://framerusercontent.com/images/r2Gjh83nettjcxP8wUnZvtnrMQ.png?scale-down-to=512',
    'https://framerusercontent.com/images/w5AFpPyGyk9W21U7wvU86aRK0c.png?scale-down-to=512',
    'https://framerusercontent.com/images/ZUH9aMhO0ywTmQsUFtPfYTKFvI.png?scale-down-to=512',
    'https://framerusercontent.com/images/R2MQPy0vyEQefQXi5DAhFI9iukY.png?scale-down-to=512',
    'https://framerusercontent.com/images/tcEh7Xh5h25iWUaoMxQ2HUPsLkk.png?scale-down-to=512',
    'https://framerusercontent.com/images/roS45iclWC6AmErdNGBOd7GIVA.png?scale-down-to=512',
    'https://framerusercontent.com/images/r2Gjh83nettjcxP8wUnZvtnrMQ.png?scale-down-to=512',
  ]
  return (
    <Wrapper>
      <Container>
        <TitleH1 style={{ textAlign: 'center' }}>
          Everything you need
          <br />
          to start now
        </TitleH1>
        <BlurStyled>
          <WrapperImages>
            <WrapperImagePhone>
              <ImageComponent
                styles={{
                  height: '120%',
                  with: 'max-content',
                  borderRadius: '4rem',
                  padding: '2rem 0',
                  objectFit: 'cover',
                }}
              >
                https://framerusercontent.com/images/YXp6johBY0uYZ4KK4nC6d0R7Tyo.png?scale-down-to=1024
              </ImageComponent>
            </WrapperImagePhone>
            <Marquee disNone direction="left">
              {listImage.map((item, index) => (
                <li key={index}>
                  <ImageComponent
                    styles={{
                      width: '19.1rem',
                      borderRadius: '4rem',
                      height: '22rem',

                      objectFit: 'cover',
                    }}
                  >
                    {item}
                  </ImageComponent>
                </li>
              ))}
            </Marquee>
            <Marquee direction="right">
              {listImage.map((item, index) => (
                <li key={index}>
                  <ImageComponent
                    styles={{
                      width: '19.1rem',
                      borderRadius: '4rem',
                      height: '22rem',

                      objectFit: 'cover',
                    }}
                  >
                    {item}
                  </ImageComponent>
                </li>
              ))}
            </Marquee>
            <Marquee direction="left">
              {listImage.map((item, index) => (
                <li key={index}>
                  <ImageComponent
                    styles={{
                      width: '19.1rem',
                      borderRadius: '4rem',
                      height: '22rem',

                      objectFit: 'cover',
                    }}
                  >
                    {item}
                  </ImageComponent>
                </li>
              ))}
            </Marquee>
          </WrapperImages>
        </BlurStyled>
        <WrapperCA>
          <BtnAppleChplay></BtnAppleChplay>
        </WrapperCA>
      </Container>
    </Wrapper>
  )
}
