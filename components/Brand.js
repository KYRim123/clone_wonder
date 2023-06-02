import React from 'react'
import styled, { keyframes } from 'styled-components'
import WrapperIcon from './icons/WrapperIcon'
import { FlexStyled } from './Header'
import ImageComponent from './Image'
import { BlurStyled } from './StylesComponent'

const BrandStyled = styled.div`
  margin-top: 16.6rem;
`
const Title = styled.h4`
  color: var(--text-color);
  font-size: 2.4rem;
  font-weight: 600;
`
const marquee = keyframes`
    0% {
      transform: translateX(0%);
    }
    100% {
      transform: translateX(-100%);
    }
`
const WrapperBrand = styled.div`
  overflow: hidden;
`

const ListStyled = styled.ul`
  display: flex;
  padding: 3rem 0;
  animation: ${marquee} 20s linear infinite;
  li {
    flex-shrink: 0;
    margin-right: 5rem;
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
  'https://framerusercontent.com/images/ofvYosyBCyvMTNcaugQmXVRkkLk.png',
  'https://framerusercontent.com/images/qVrjYbxuXTI7PEtviP9KSNXw1Pc.png',
  'https://framerusercontent.com/images/ofvYosyBCyvMTNcaugQmXVRkkLk.png',
  'https://framerusercontent.com/images/ULyeyAm77MIZzELSo7xrXBvS2AM.png',
  'https://framerusercontent.com/images/3QVSu8bjflnBPm2KFFWsx5RIF4.png',
  'https://framerusercontent.com/images/3OxXjFphdj6jrlDghY6iDxAs.png',
  'https://framerusercontent.com/images/ofvYosyBCyvMTNcaugQmXVRkkLk.png',
  'https://framerusercontent.com/images/qVrjYbxuXTI7PEtviP9KSNXw1Pc.png',
  'https://framerusercontent.com/images/ofvYosyBCyvMTNcaugQmXVRkkLk.png',
  'https://framerusercontent.com/images/ULyeyAm77MIZzELSo7xrXBvS2AM.png',
  'https://framerusercontent.com/images/3QVSu8bjflnBPm2KFFWsx5RIF4.png',
  'https://framerusercontent.com/images/3OxXjFphdj6jrlDghY6iDxAs.png',
  'https://framerusercontent.com/images/ofvYosyBCyvMTNcaugQmXVRkkLk.png',
  'https://framerusercontent.com/images/qVrjYbxuXTI7PEtviP9KSNXw1Pc.png',
  'https://framerusercontent.com/images/ofvYosyBCyvMTNcaugQmXVRkkLk.png',
]

export default function Brand() {
  return (
    <BrandStyled>
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
        <WrapperBrand>
          <ListStyled>
            {listLinkBrands.map((item, index) => (
              <li key={index}>
                <ImageComponent alt="imageBrand" styles={{ width: '10rem', height: '2.5rem' }}>
                  {item}
                </ImageComponent>
              </li>
            ))}
          </ListStyled>
        </WrapperBrand>
      </BlurStyled>
    </BrandStyled>
  )
}
