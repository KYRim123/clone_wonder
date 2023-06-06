import styled from 'styled-components'
import ImageComponent from './Image'
import Link from 'next/link'

const Wrapper = styled.div`
  display: inline-flex;
  gap: 1rem;
`
export default function BtnAppleChplay() {
  return (
    <Wrapper>
      <Link href={'/'}>
        <ImageComponent
          styles={{
            pointerEvents: 'none',
            display: 'block',
            width: '100%',
            height: '100%',
            borderRadius: 'inherit',
            objectPosition: 'center',
            objectFit: 'cover',
            imageRendering: 'auto',
          }}
          alt="apple"
        >
          https://framerusercontent.com/images/hYvCH5FIZbUGp7AE5G2BTnd5MMI.png
        </ImageComponent>
      </Link>
      <Link href={'/'}>
        <ImageComponent
          styles={{
            pointerEvents: 'none',
            display: 'block',
            width: '100%',
            height: '100%',
            borderRadius: 'inherit',
            objectPosition: 'center',
            objectFit: 'cover',
            imageRendering: 'auto',
          }}
          alt="chplay"
        >
          https://framerusercontent.com/images/qezI23ONo3qvMM8qIS1Efjfe0A.png
        </ImageComponent>
      </Link>
    </Wrapper>
  )
}
