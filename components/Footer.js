import React from 'react'
import Center from './Center'
import styled from 'styled-components'
import Link from 'next/link'
import Logo from './Logo'
import BtnAppleChplay from './BtnAppleChplay'
import { AiFillInstagram, AiOutlineTwitter } from 'react-icons/ai'
import { ImLinkedin2 } from 'react-icons/im'
 import { Nav, centerItem } from './StylesComponent'

const FooterStyled = styled.footer`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  margin-top: 20rem;
  @media (max-width: 739px) {
    align-items: center;
  }
`
const WrapperNavFooter = styled.div`
  display: flex;
  gap: 3rem;
  @media (max-width: 739px) {
    flex-direction: column;
  }
`

const FooterItem1 = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 739px) {
    flex-direction: column;
    gap: 2rem;
  }
`
const WrapperIcon = styled.div`
  ${centerItem}
  gap: 2rem;
  @media (max-width: 739px) {
    flex-direction: column;
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
    color: var(--color-gray);
    :hover {
      color: var(--color-black);
    }
  }
`
const FooterItem3 = styled.div`
  border-top: 0.5px solid #eae4e4;
  padding: 1rem 0;
  width: 100%;
  a {
    color: var(--color-purple);
  }
  @media (max-width: 739px) {
    text-align: center;
  }
`

export default function Footer() {
  return (
    <FooterStyled>
      <FooterItem1>
        <Logo></Logo>
        <WrapperNavFooter>
          <h4>Get Wonder now !</h4>
          <Nav responsive='mobile'>
            <Link href="#">Features</Link>
            <Link href="#">Pricing</Link>
            <Link href="#">Blog</Link>
            <Link href="#">About</Link>
          </Nav>
        </WrapperNavFooter>
      </FooterItem1>
      <FooterItem2>
        <WrapperIcon>
          <AiOutlineTwitter className="icon" />
          <ImLinkedin2 className="icon" />
          <AiFillInstagram className="icon" />
          <BtnAppleChplay></BtnAppleChplay>
        </WrapperIcon>
      </FooterItem2>
      <FooterItem3>
        Made for <Link href={'#'}>Framer</Link> by <Link href={'#'}>Tiago Cortezi</Link>
      </FooterItem3>
    </FooterStyled>
  )
}
