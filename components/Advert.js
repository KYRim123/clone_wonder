import Link from 'next/link'
import React from 'react'
import styled from 'styled-components'
import ImageComponent from './Image'
import { ButtonDefault, TitleH1, centerItem } from './StylesComponent'

const Wrapper = styled.div`
  padding-top: 5rem;
`
const Bg = styled.div`
  background-color: var(--bg-advert);
  border-radius: 5rem;
`
const AdvertContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 4.2rem 4.2rem 0;
  @media (max-width: 1023px) {
    flex-direction: column-reverse;
  }
`
const Content = styled.div`
  width: 50%;
  @media (max-width: 1023px) {
    width: 100%;
    ${centerItem}
    flex-direction: column;
  }
`

const WrapperButtons = styled.div`
  padding-top: 5rem;
  a:first-child {
    margin-right: 1rem;
  }
  @media (max-width: 1023px) {
    width: 100%;
    ${centerItem}
    flex-direction: column;
  }
`
const WrapperImage = styled.div`
  display: contents;
  border-radius: inherit;
  pointer-events: none;
`
export default function Advert() {
  return (
    <Wrapper>
      <Bg>
        <AdvertContainer>
          <WrapperImage>
            <ImageComponent
              styles={{
                pointerEvents: 'none',
                display: 'block',
                width: '100%',
                height: '100%',
                borderRadius: 'inherit',
                objectPosition: 'center',
                objectFit: 'cover',
                imageRendering: 'auto',
              }}
              alt={'imgAdv'}
            >
              {'https://framerusercontent.com/images/SGFrYFCQP0MZFlQVnD0cTEQZE.png'}
            </ImageComponent>
          </WrapperImage>

          <Content>
            <TitleH1>All components are ready to use</TitleH1>
            <WrapperButtons>
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
            </WrapperButtons>
          </Content>
        </AdvertContainer>
      </Bg>
    </Wrapper>
  )
}
