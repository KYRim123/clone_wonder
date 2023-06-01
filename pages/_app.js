import { createGlobalStyle } from 'styled-components'
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
  }
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  html {
    font-size: 62.5%;
  }
  body {
    font-size: 1.6rem;
    background-color: var(--bg-body);
    font-family: sans-serif;
  }
  a {
    text-decoration: none;
    color: var(--text-black);
  }
  ul {
    list-style: none;
  }
`
export default function App({ Component, pageProps: { ...pageProps } }) {
  return (
    <>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  )
}
