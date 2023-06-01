import React from 'react'
import styled from 'styled-components'

const CenterStyled = styled.div`
  max-width: 110rem;
  margin: 0 auto;
`

export default function Center({ children }) {
  return <CenterStyled>{children}</CenterStyled>
}
