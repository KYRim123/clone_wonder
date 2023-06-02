import Link from 'next/link'
import React from 'react'
import styled, { css } from 'styled-components'
import Logo from './Logo'
import { ButtonDefault } from './StylesComponent'

export const Flex = css`
  display: flex;
  align-items: center;
  //align
  ${(props) =>
    props.align === 'center' &&
    css`
      align-items: center;
    `}
  ${(props) =>
    props.align === 'start' &&
    css`
      align-items: flex-start;
    `}
    ${(props) =>
    props.align === 'end' &&
    css`
      align-items: flex-end;
    `}
  //justify
  ${(props) =>
    props.justify === 'between' &&
    css`
      justify-content: space-between;
    `}
  ${(props) =>
    props.justify === 'center' &&
    css`
      justify-content: center;
    `}
    ${(props) =>
    props.justify === 'around' &&
    css`
      justify-content: space-around;
    `}
`
export const FlexStyled = styled.div`
  ${Flex}
`

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
const HeaderStyled = styled.header`
  padding: 4.4rem 0;
`

export default function Header() {
  return (
    <HeaderStyled>
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
    </HeaderStyled>
  )
}
