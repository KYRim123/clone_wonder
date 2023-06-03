import styled, { css } from 'styled-components'

export const TitleH4 = styled.h4`
  font-style: italic;
  font-size: 2rem;
  font-weight: 600;
  color: #737373;
`
export const TitleH1 = styled.h4`
  font-size: 5.6rem;
  color: var(--text-black);
`

export const ContentP = styled.p`
  color: var(--text-p);
  padding: 3rem 0;
`

export const centerItem = css`
  display: flex;
  align-items: center;
  justify-content: center;
`
export const BlurStyled = styled.div`
  position: relative;
  ::after,
  ::before {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    width: 10rem;
    background-color: rgb(255 255 255);
    filter: blur(20px);
    z-index: 1;
  }
  ::after {
    right: -3rem;
  }
  ::before {
    left: -3rem;
  }
`
// button
const ButtonStyled = styled.button`
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
export const ButtonDefault = styled(ButtonStyled)``

// Box
export const BoxIcon = styled.div`
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
  .icon {
    width: 10rem;
    height: 10rem;
  }
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
// flex
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
