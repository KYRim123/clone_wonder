import styled from 'styled-components'
import Button from './Button'
import ImageComponent from './Image'

const Wrapper = styled.div`
  display: inline-flex;
  gap: 1rem;
`
export default function BtnAppleChplay() {
  return (
    <Wrapper>
      <Button bg="black" color="white">
        <ImageComponent styles={{ width: '3rem', height: '3rem' }} alt="apple">
          /apple.png
        </ImageComponent>
        <div>
          Download on the
          <br />
          <span>Apple Store</span>
        </div>
      </Button>
      <Button bg="black" color="white">
        <ImageComponent styles={{ width: '3rem', height: '3rem' }} alt="chplay">
          /chplay.png
        </ImageComponent>
        <div>
          Get in on <br />
          <span>Google play</span>
        </div>
      </Button>
    </Wrapper>
  )
}
