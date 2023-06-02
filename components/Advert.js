import Link from 'next/link'
import React from 'react'
import styled from 'styled-components'
import { FlexStyled } from './Header'
import ImageComponent from './Image'
import { ButtonDefault } from './StylesComponent'

const BgAdvert = styled.div`
  background-color: var(--bg-advert);
  border-radius: 5rem;
  height: 54rem;
`
const AdvertContainer = styled.div`
  h2 {
    font-size: 5.5rem;
  }
`
const AdvertButton = styled.div`
  padding-top: 5rem;
  a:first-child {
    margin-right: 1rem;
  }
`
const WrapperImage = styled.div`
  margin-top: 4rem;
`
export default function Advert() {
  return (
    <BgAdvert>
      <FlexStyled style={{ padding: '0 3rem' }} align="center">
        <WrapperImage>
          <ImageComponent styles={{ width: '50rem', height: '50rem' }} alt={'imgAdv'}>
            {'https://framerusercontent.com/images/SGFrYFCQP0MZFlQVnD0cTEQZE.png'}
          </ImageComponent>
        </WrapperImage>
        <AdvertContainer>
          <h2>All components are ready to use</h2>
          <AdvertButton>
            <Link href={'#'}>
              <ButtonDefault bg="black" color="white">
                Buy template
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 icon"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                  />
                </svg>
              </ButtonDefault>
            </Link>
            <Link href={'#'}>Learn more</Link>
          </AdvertButton>
        </AdvertContainer>
      </FlexStyled>
    </BgAdvert>
  )
}
