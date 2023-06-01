import React from 'react'
import styled, { css } from 'styled-components'
const Flex = css`
  display: flex;
  align-items: center;
  justify-content: center;
`
const BoxStyled = styled.div`
  ${Flex}
  width: 10rem;
  height: 10rem;
`
const Box = styled.div`
  position: relative;
  background-color: rgb(243, 243, 243);
  height: 100%;
  width: 100%;
  border-radius: 32px;
  opacity: 1;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  ${(props) =>
    props.active &&
    props.bg === 'purple' &&
    css`
      background-color: rgb(237, 166, 237, 1);
      .icon {
        color: #b638ab;
      }
    `}
  ${(props) =>
    props.active &&
    props.bg === 'red' &&
    css`
      background-color: rgb(255, 228, 231);
      .icon {
        color: #df7682;
      }
    `}
    ${(props) =>
    props.active &&
    props.bg === 'blue' &&
    css`
      background-color: rgb(152, 236, 228);
      .icon {
        color: #219287;
      }
    `}
    ${(props) =>
    props.active &&
    props.bg === 'yellow' &&
    css`
      background-color: rgb(250, 255, 184);
      .icon {
        color: #b0b750;
      }
    `}
  :hover {
    ${(props) =>
      props.bg === 'purple' &&
      css`
        background-color: rgb(237, 166, 237, 1);
        .icon {
          color: #b638ab;
        }
      `}
    ${(props) =>
      props.bg === 'red' &&
      css`
        background-color: rgb(255, 228, 231);
        .icon {
          color: #df7682;
        }
      `}
      ${(props) =>
      props.bg === 'blue' &&
      css`
        background-color: rgb(152, 236, 228);
        .icon {
          color: #219287;
        }
      `}
      ${(props) =>
      props.bg === 'yellow' &&
      css`
        background-color: rgb(250, 255, 184);
        .icon {
          color: #b0b750;
        }
      `}
  }
`

export default function BoxIcon({ children, ...rest }) {
  return (
    <Box {...rest}>
      <BoxStyled>{children}</BoxStyled>
    </Box>
  )
}
