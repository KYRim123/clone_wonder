import Link from 'next/link'
import React, { useState } from 'react'
import styled, { keyframes } from 'styled-components'
import Logo from './Logo'
import { ButtonDefault, Nav } from './StylesComponent'
import WrapperIcon from './icons/WrapperIcon'

const WrapperHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
`
const showNav = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`

const WrapperNav = styled.div`
  display: flex;
  align-items: center;
  flex-grow: 1;
  @media (max-width: 1023px) {
    display: ${(props) => (props.show ? 'flex' : 'none')};
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 1;
    background-color: #fafafacc;
    backdrop-filter: blur(32px);
    flex-direction: column;
    padding-top: 15rem;
    gap: 3rem;
    animation: ${showNav} .5s ease;
  }
`

const ResIcon = styled.div`
  display: none;
  .icon {
    width: 3rem;
    height: 3rem;
  }
  @media (max-width: 1024px) {
    display: block;
  }
`

export default function Header() {
  const [showNav, setShowNav] = useState(false)
  return (
    <WrapperHeader>
      <Logo>Wonder</Logo>
      <ResIcon onClick={() => setShowNav(!showNav)}>
        <WrapperIcon>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="icon"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </WrapperIcon>
      </ResIcon>
      <WrapperNav show={showNav} onClick={() => setShowNav(!showNav)}>
        <Nav responsive='tablet'>
          <Link href="#features">Features</Link>
          <Link href="#pricing">Pricing</Link>
          <Link href="/blog">Blog</Link>
          <Link href="#">About</Link>
        </Nav>
        <ButtonDefault bg="blue" color="black">
          Get Wonder now
        </ButtonDefault>
      </WrapperNav>
    </WrapperHeader>
  )
}
