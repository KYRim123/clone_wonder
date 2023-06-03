import React from 'react'
import Center from './Center'
import styled from 'styled-components'
import Link from 'next/link'
import Logo from './Logo'
import BtnAppleChplay from './BtnAppleChplay'
import { AiFillInstagram, AiOutlineTwitter } from 'react-icons/ai'
import { ImLinkedin2 } from 'react-icons/im'
import { Nav } from './Header'
import { TitleComponentH4 } from './Features'

const FooterStyled = styled.footer`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  margin-top: 20rem;
`

const FooterItem1 = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  div {
    display: flex;
    gap: 3rem;
  }
`
const FooterItem2 = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 3rem;
  padding: 3rem;
  .icon {
    font-size: 3rem;
    cursor: pointer;
    :hover {
      color: var(--color-gray);
    }
  }
`
const FooterItem3 = styled.div`
  border-top: 0.5px solid #eae4e4;
  padding: 1rem 0;
  a {
    color: var(--color-purple);
  }
`

export default function Footer() {
  return (
    <FooterStyled>
      <FooterItem1>
        <Logo></Logo>
        <div>
          <h4>Get Wonder now !</h4>
          <Nav className="nav">
            <Link href="#">Features</Link>
            <Link href="#">Pricing</Link>
            <Link href="#">Blog</Link>
            <Link href="#">About</Link>
          </Nav>
        </div>
      </FooterItem1>
      <FooterItem2>
        <AiOutlineTwitter className="icon" />
        <ImLinkedin2 className="icon" />
        <AiFillInstagram className="icon" />
        <BtnAppleChplay></BtnAppleChplay>
      </FooterItem2>
      <FooterItem3>
        Made for <Link href={'#'}>Framer</Link> by <Link href={'#'}>Tiago Cortezi</Link>
      </FooterItem3>
    </FooterStyled>
  )
}
