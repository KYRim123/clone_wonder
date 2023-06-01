import React from 'react'
import styled, { css } from 'styled-components'
 

const ButtonStyles = css`
  display: inline-flex;
  align-items: center;
  gap: 1rem;
  padding: 1.5rem 3rem;
  border-radius: 2rem;
  transition: all 0.5s linear;
  cursor: pointer;
  border: none;
  font-weight: bold;
  ${(props) =>
    props.display === 'flex' &&
    css`
      display: flex;
      align-items: center;
      gap: 1rem;
    `}

  ${(props) =>
    props.bg === 'black' &&
    props.color === 'white' &&
    css`
      background-color: #333;
      color: #fff;
    `}

  ${(props) =>
    props.bg === 'blue' &&
    props.color === 'black' &&
    css`
      background-color: var(--bg-blue);
      color: var(--framer-text-color);
      :hover {
        background-color: var(--bg-purple);
      }
    `}
    ${(props) =>
    props.bg === 'yellow' &&
    css`
      background-color: var(--bg-yellow);
      :hover {
          background-color: var(--bg-purple);
          color: var(--framer-text-color);
      }
      }
    `}
    ${(props) =>
    props.bg === 'white' &&
    css`
      background-color: transparent;
      border: 2px solid var(--bg-white);
      color: var(--bg-white);
      :hover {
          background-color: var(--bg-white);
          color: var(--text-black);
      }
      }
    `}
    ${(props) =>
    props.margin === 'right' &&
    css`
      margin-right: 2rem;
    `}
    .icon {
    width: 2rem;
  }
   
`

const ButtonStyled = styled.button`
  ${ButtonStyles}
`

export default function Button({ children, ...rest }) {
  return <ButtonStyled {...rest}>{children}</ButtonStyled>
}
