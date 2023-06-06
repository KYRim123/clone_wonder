import styled, { css, keyframes } from 'styled-components'

export const TitleH4 = styled.h4`
  font-style: italic;
  font-size: 2rem;
  font-weight: 600;
  color: #737373;
  padding-bottom: 2rem;
`
export const TitleH1 = styled.h4`
  font-style: var(--title-font-style, normal);
  font-weight: var(--title-font-weight, 400);
  color: var(--title-text-color, #000);
  font-size: var(--title-font-size, 16px);
  letter-spacing: var(--title-letter-spacing, 0);
  text-transform: var(--text-transform, none);
  text-decoration: var(--text-decoration, none);
  line-height: var(--title-line-height, 1.2em);
  text-align: var(--title-text-alignment, start);
`

export const ContentP = styled.p`
  font-family: var(--content-font-family, Inter, Inter Placeholder, sans-serif);
  font-style: var(--content-font-style, normal);
  font-weight: var(--content-font-weight, 400);
  color: var(--content-text-color, #000);
  font-size: var(--content-font-size, 16px);
  letter-spacing: var(--content-letter-spacing, 0);
  text-transform: var(--text-transform, none);
  text-decoration: var(--text-decoration, none);
  line-height: var(--content-line-height, 1.2em);
  text-align: var(--content-text-alignment, start);
  padding: 3rem 0;
  ${(props) =>
    props.paddingBT &&
    css`
      padding: 0 0 2rem;
    `}
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
  ${centerItem}
  .icon {
    width: 10rem;
    height: 10rem;
  }
  ${(props) =>
    props.active === 0 &&
    props.bg === 'purple' &&
    css`
      background-color: rgb(237, 166, 237, 1);
      grid-column: 1;
      grid-row: 1;
      .icon {
        color: #b638ab;
      }
    `}
  ${(props) =>
    props.active === 1 &&
    props.bg === 'red' &&
    css`
      background-color: rgb(255, 228, 231);
      grid-column: 1;
      grid-row: 1;
      .icon {
        color: #df7682;
      }
    `}
    ${(props) =>
    props.active === 2 &&
    props.bg === 'blue' &&
    css`
      background-color: rgb(152, 236, 228);
      grid-column: 1;
      grid-row: 1;
      .icon {
        color: #219287;
      }
    `}
    ${(props) =>
    props.active === 3 &&
    props.bg === 'yellow' &&
    css`
      background-color: rgb(250, 255, 184);
      grid-column: 1;
      grid-row: 1;
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
  flex-wrap: wrap;
  gap: 2rem;
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
export const marqueeRight = keyframes`
    0% {
      transform: translateX(-100%);
    }
    100% {
      transform: translateX(0);
    }
`
export const absolute = css`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
`
export const Nav = styled.nav`
  margin: 0 auto;
  a {
    padding-right: 4rem;
    color: var(--text-color);
    font-size: 1.7rem;
  }
  a:hover {
    color: var(--text-hover);
  }
  ${(props) =>
    props.responsive === 'tablet' &&
    css`
      @media (max-width: 1023px) {
        ${centerItem}
        flex-direction: column;
        align-items: center;
        gap: 5rem;
        a {
          padding-right: 0;
        }
      }
    `}
  ${(props) =>
    props.responsive === 'mobile' &&
    css`
      @media (max-width: 739px) {
        ${centerItem}
        flex-direction: column;
        align-items: center;
        gap: 5rem;
        a {
          padding-right: 0;
        }
      }
    `}
`
