import { createGlobalStyle } from 'styled-components'
import LayoutDefault from '../components/LayoutDefault'

const GlobalStyles = createGlobalStyle`
  :root {
    --bg-body: #FAFAFA;
    --text-black: black;
    --text-white: #fff;
    --text-gray: rgb(189, 189, 189);
    --text-color: #3e3e3e;
    --bg-blue: rgb(108, 228, 216);
    --framer-text-color: rgba(12, 65, 59, 1);
    --bg-purple: rgb(215, 191, 253);
    --color-purple: rgb(185, 142, 251);
    --color-gray: rgb(189, 189, 189);
    --bg-yellow: rgb(246, 255, 133);
    --bg-white: #fff;
    --bg-black: #333;
    --text-p: #737373;
    --bg-advert: rgb(255, 228, 231);
    --font-Inter: 'Inter', sans-serif;
    /* font-style */
    --font-style: normal;
    --text-decoration: none;
    --text-transform: none;
    /* font title */
    --title-font-size: 5.6rem;
    --title-font-weight: 700;
    --title-letter-spacing: -.5px;
    --title-line-height: 105%;
    --title-paragraph-spacing: 40px;
    --title-text-alignment: left;
    --title-text-color: #333333;
    
    /* content */
    --content-font-size: 1.6rem;
    --content-font-weight: 500;
    --content-letter-spacing: 0px;
    --content-line-height: 1.7em;
    --content-paragraph-spacing: 2rem;
    --content-text-alignment: left;
    --content-text-color: #555555;
}

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  html {
    font-size: 62.5%;
    scroll-behavior: smooth;
  }
  body {
    font-size: 1.6rem;
    background-color: var(--bg-body);
    font-family: var(--font-Inter);
  }
  a {
    text-decoration: none;
    color: var(--text-black);
  }
  ul {
    list-style: none;
  }
  /* tablet */
   @media (min-width: 740px) and (max-width: 1023px) {
    :root {
     --title-font-size: 4.5rem;
    --title-font-style: normal;
    --title-font-weight: 700;
    --title-letter-spacing: -.5px;
    --title-line-height: 105%;
    --title-paragraph-spacing: 4rem;
    --title-text-alignment: left;
    --title-text-color: #333333;
    }
    ::-webkit-scrollbar {
      display: none;
    }
   }
  /* mobile */
  @media (max-width: 739px) {
   :root {
    --title-font-size: 3.6rem;
    --title-font-style: normal;
    --title-font-weight: 700;
    --title-letter-spacing: -.5px;
    --title-line-height: 105%;
    --title-paragraph-spacing: 4rem;
    --title-text-alignment: left;
    --title-text-color: #333333;
   } 
  }
`
export default function App({ Component, pageProps: { ...pageProps } }) {
  return (
    <>
      <GlobalStyles />
      <LayoutDefault>
        <Component {...pageProps} />
      </LayoutDefault>
    </>
  )
}
