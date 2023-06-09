import React from 'react'
import styled, { css } from 'styled-components'

const Icon = css`
  width: 2rem;
  height: 2rem;
  ${props => props.color === 'purple' && css`
    color: var(--color-purple);
  `}
`

const StyledIcon = styled.div`
  ${Icon}
`

export default function WrapperIcon({ children, ...rest }) {
  return <StyledIcon {...rest}>{children}</StyledIcon>
}
