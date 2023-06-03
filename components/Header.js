import Link from 'next/link'
import React from 'react'
import styled from 'styled-components'
import Logo from './Logo'
import { ButtonDefault, FlexStyled } from './StylesComponent'

export const Nav = styled.nav`
  a {
    padding-right: 4rem;
    color: var(--text-color);
    font-size: 1.7rem;
  }
  a:hover {
    color: var(--text-hover);
  }
`
const WrapperHeader = styled.header``

export default function Header() {
  return (
    <WrapperHeader>
      <FlexStyled align="center" justify="between">
        <Logo>Wonder</Logo>
        <Nav className="nav">
          <Link href="#features">Features</Link>
          <Link href="#pricing">Pricing</Link>
          <Link href="#">Blog</Link>
          <Link href="#">About</Link>
        </Nav>
        <ButtonDefault bg="blue" color="black">
          Get Wonder now
        </ButtonDefault>
      </FlexStyled>
    </WrapperHeader>
  )
}
