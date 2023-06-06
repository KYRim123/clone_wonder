import Link from 'next/link'
import React from 'react'
import styled from 'styled-components'

const LogoLink = styled(Link)``
const LogoStyled = styled.div`
  font-size: 3rem;
  font-weight: bold;
`
export default function Logo({ show }) {
  return (
    <LogoLink show={show} href={'/'}>
      <LogoStyled>Wonder</LogoStyled>
    </LogoLink>
  )
}
