import React from 'react'
import styled from 'styled-components'

const CenterStyled = styled.div`
  max-width: 138rem;
  margin: 0 auto;
  padding: 3rem 8rem 0;
`

export default function Center({ children }) {
  return <CenterStyled>{children}</CenterStyled>
}
