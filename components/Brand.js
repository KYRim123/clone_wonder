import React from 'react'
import styled, { keyframes } from 'styled-components'
import WrapperIcon from './icons/WrapperIcon'
import ImageComponent from './Image'
import { BlurStyled, FlexStyled } from './StylesComponent'

const WrapperBrand = styled.div`
  padding: 15.7rem 0 7.4rem;
`
const Title = styled.h4`
  color: var(--text-color);
  font-size: 2.4rem;
  font-weight: 600;
`

const ContainerListBrand = styled.div`
  overflow: hidden;
`
export const marquee = keyframes`
    0% {
      transform: translateX(0%);
    }
    100% {
      transform: translateX(-100%);
    }
`
const ListStyled = styled.ul`
  display: flex;
  gap: 10rem;
  padding: 3rem 0;
  animation: ${marquee} 20s linear infinite;
  li {
    flex-shrink: 0;
  }
`
const listLinkBrands = [
  'https://framerusercontent.com/images/ULyeyAm77MIZzELSo7xrXBvS2AM.png',
  'https://framerusercontent.com/images/3QVSu8bjflnBPm2KFFWsx5RIF4.png',
  'https://framerusercontent.com/images/3OxXjFphdj6jrlDghY6iDxAs.png',
  'https://framerusercontent.com/images/ofvYosyBCyvMTNcaugQmXVRkkLk.png',
  'https://framerusercontent.com/images/qVrjYbxuXTI7PEtviP9KSNXw1Pc.png',
  'https://framerusercontent.com/images/ofvYosyBCyvMTNcaugQmXVRkkLk.png',
  'https://framerusercontent.com/images/ULyeyAm77MIZzELSo7xrXBvS2AM.png',
  'https://framerusercontent.com/images/3QVSu8bjflnBPm2KFFWsx5RIF4.png',
  'https://framerusercontent.com/images/3OxXjFphdj6jrlDghY6iDxAs.png',
  'https://framerusercontent.com/images/ULyeyAm77MIZzELSo7xrXBvS2AM.png',
  'https://framerusercontent.com/images/3QVSu8bjflnBPm2KFFWsx5RIF4.png',
  'https://framerusercontent.com/images/3OxXjFphdj6jrlDghY6iDxAs.png',
  'https://framerusercontent.com/images/ofvYosyBCyvMTNcaugQmXVRkkLk.png',
  'https://framerusercontent.com/images/qVrjYbxuXTI7PEtviP9KSNXw1Pc.png',
  'https://framerusercontent.com/images/ofvYosyBCyvMTNcaugQmXVRkkLk.png',
  'https://framerusercontent.com/images/ULyeyAm77MIZzELSo7xrXBvS2AM.png',
  'https://framerusercontent.com/images/3QVSu8bjflnBPm2KFFWsx5RIF4.png',
  'https://framerusercontent.com/images/3OxXjFphdj6jrlDghY6iDxAs.png',
]

export default function Brand() {
  return (
    <WrapperBrand>
      <FlexStyled justify="center">
        <Title>Trusted by industry leaders</Title>
        <WrapperIcon color="purple">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.5 4.5l15 15m0 0V8.25m0 11.25H8.25"
            />
          </svg>
        </WrapperIcon>
      </FlexStyled>
      <BlurStyled>
        <ContainerListBrand>
          <ListStyled>
            {listLinkBrands.map((item, index) => (
              <li key={index}>
                <ImageComponent alt="imageBrand" styles={{ width: '10rem', height: '2.5rem' }}>
                  {item}
                </ImageComponent>
              </li>
            ))}
          </ListStyled>
        </ContainerListBrand>
      </BlurStyled>
    </WrapperBrand>
  )
}
