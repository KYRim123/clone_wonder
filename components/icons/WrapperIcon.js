import React from 'react'
import styled, { css } from 'styled-components'

const Icon = css`
  width: 2rem;
  height: 2rem;
`

const StyledIcon = styled.div`
  ${Icon}
`

export default function WrapperIcon({ children, ...rest }) {
  return <StyledIcon {...rest}>{children}</StyledIcon>
}
