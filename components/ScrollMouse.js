import React, { useEffect, useState } from 'react'
import WrapperIcon from './icons/WrapperIcon'
import styled, { keyframes } from 'styled-components'
import { FlexStyled } from './Header'

const MouseStyled = styled.div`
  padding-top: 1rem;
`
const upDown = keyframes`
    0% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(1rem);
    }

`
const Animation = styled.div`
  padding-top: 1rem;
  animation: ${upDown} 2s linear infinite;
`

export default function ScrollMouse() {
  const [showMouse, setShowMouse] = useState(true)
  useEffect(() => {
    const handleScroll = () => {
      window.scrollY >= 50 ? setShowMouse(false) : setShowMouse(true)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    showMouse && (
      <MouseStyled>
        <FlexStyled justify="center">
          <Animation>
            <WrapperIcon>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
                style={{ with: '4rem', height: '4rem' }}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"
                />
              </svg>
            </WrapperIcon>
          </Animation>
        </FlexStyled>
      </MouseStyled>
    )
  )
}
