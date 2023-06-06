import React from 'react'
import styled, { css } from 'styled-components'
import { FlexStyled, absolute } from './StylesComponent'
import WrapperIcon from './icons/WrapperIcon'
import { ButtonDefault } from './StylesComponent'

const WrapperSlider = styled.div`
  padding-top: 6.4rem;
`
const ContainerSlider = styled.div`
  position: relative;
  height: 50rem;
  overflow: hidden;
  border-radius: 5rem;
`
const Title = styled.h1`
  font-size: 6.7rem;
  color: var(--text-white);
  font-weight: 800;
  @media (max-width: 1023px) {
    font-size: 5.6rem;
  }
  @media (max-width: 739px) {
    font-size: 4rem;
  }
`
const WrapperVideo = styled.div`
  ${absolute}
  z-index: -1;
  video {
    width: 100%;
    height: 100%;
    display: block;
    object-fit: cover;
    background-color: rgb(181, 219, 219);
    object-position: 50% 50%;
  }
`
const ContentStyled = styled.div`
  position: absolute;
  top: 5rem;
  left: 8rem;
  max-width: 55rem;
  @media (max-width: 749px) {
    left: 3rem;
  }
`

export default function Slide() {
  return (
    <WrapperSlider>
      <ContainerSlider>
        <WrapperVideo>
          <video autoPlay loop muted>
            <source src="/videoSlide.mp4" type="video/mp4" />
          </video>
        </WrapperVideo>
        <ContentStyled>
          <Title>
            Give life to <br />
            your website
            <br />
            super fast!
          </Title>
          <FlexStyled style={{ padding: '2rem 0' }}>
            <ButtonDefault bg="yellow" display="flex" margin="right">
              Buy Wonder now{' '}
              <WrapperIcon>
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
                    d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
                  />
                </svg>
              </WrapperIcon>
            </ButtonDefault>
            <ButtonDefault bg="white" display="flex">
              <WrapperIcon>
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
                    d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z"
                  />
                </svg>
              </WrapperIcon>
              Watch video
            </ButtonDefault>
          </FlexStyled>
        </ContentStyled>
      </ContainerSlider>
    </WrapperSlider>
  )
}
