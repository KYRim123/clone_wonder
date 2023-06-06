import React, { useEffect, useRef } from 'react'
import styled, { css, keyframes } from 'styled-components'
import { ContentP, TitleH1, absolute, centerItem } from './StylesComponent'
import Link from 'next/link'
import { ButtonDefault } from './StylesComponent'
import WrapperIcon from './icons/WrapperIcon'

const Wrapper = styled.div`
  padding-top: 20rem;
`
const Container = styled.div`
  position: relative;
  ${centerItem};
  width: 100%;
  height: 55.6rem;
  border-radius: 64px;
  overflow: hidden;
`
const Content = styled.div`
  text-align: center;
  max-width: 45rem;
  z-index: 2;
  padding: 3rem;
`
const Video = styled.div`
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
const Bg = styled.div`
  ${absolute}
  background-color: #6ce4d8e6;
  mix-blend-mode: screen;
`

export default function GetStarted() {
  const videoRef = useRef(null)

  useEffect(() => {
    const videoElement = videoRef.current

    const handleFirstClick = () => {
      videoElement.play()
      document.removeEventListener('click', handleFirstClick)
    }

    document.addEventListener('click', handleFirstClick)

    return () => {
      document.removeEventListener('click', handleFirstClick)
    }
  }, [])

  return (
    <Wrapper>
      <Container>
        <Content>
          <div>
            <TitleH1>Get started with Wonder</TitleH1>
          </div>
          <div>
            <ContentP>
              Wonder is an all-in-one template with many components ready to use right out of the
              box.
            </ContentP>
          </div>
          <div>
            <Link href={'#'}>
              <ButtonDefault bg="black" color="white" margin="right">
                Buy template{' '}
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
            </Link>
            <Link href={'#'}>Learn more</Link>
          </div>
        </Content>
        <Video>
          <video ref={videoRef} loop>
            <source
              type="video/mp4"
              src="https://framerusercontent.com/modules/assets/TevMfkVifAs0VtWrrx6uLFhUA~fbX-JkLyBFAvoWNqAdkLtjwk0MA7B_q86U9y_45tBzQ.mp4"
            />
          </video>
        </Video>
        <Bg></Bg>
      </Container>
    </Wrapper>
  )
}
