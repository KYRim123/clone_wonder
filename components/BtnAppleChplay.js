import styled from 'styled-components'
import ImageComponent from './Image'

const Wrapper = styled.div`
  display: inline-flex;
  gap: 1rem;
`
export default function BtnAppleChplay() {
  return (
    <Wrapper>
      <ImageComponent styles={{ width: '100%', height: '100%', objectFit: 'cover' }} alt="apple">
        https://framerusercontent.com/images/hYvCH5FIZbUGp7AE5G2BTnd5MMI.png
      </ImageComponent>
      <ImageComponent styles={{ width: '100%', height: '100%', objectFit: 'cover' }} alt="chplay">
        https://framerusercontent.com/images/qezI23ONo3qvMM8qIS1Efjfe0A.png
      </ImageComponent>
    </Wrapper>
  )
}
