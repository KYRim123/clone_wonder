import React from 'react'
import styled from 'styled-components'
import WrapperIcon from './icons/WrapperIcon'
import Center from './Center'
import { Flex, FlexStyled } from './Header'

const BrandStyled = styled.div`
  margin-top: 10rem;
`
const Title = styled.h4`
  color: var(--text-color);
  font-size: 2.5rem;
`
const ListStyled = styled.ul`
  padding: 2rem 0 3rem;
  ${Flex};
  justify-content: space-between;
`
const listLinkBrands = [
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
      <Center>
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
        <ListStyled>
          {listLinkBrands.map((item, index) => (
            <li key={index}>
              <img src={item} alt="imageBrand" />
            </li>
          ))}
        </ListStyled>
      </Center>
    </BrandStyled>
  )
}
