import styled from 'styled-components'
import Button from './Button'


const Wrapper = styled.div`
     display: inline-flex;
     gap: 1rem;
`
export default function BtnAppleChplay() {
  return (
    <Wrapper>
      <Button bg='black' color='white'>
        <img style={{ width: '3rem' }} src="./apple.png" alt="apple" />
        <div>
          Download on the
          <br />
          <span>Apple Store</span>
        </div>
      </Button>
      <Button bg='black' color='white'>
        <img style={{ width: '3rem' }} src="./chplay.png" alt="chplay" />
        <div>
          Get in on <br />
          <span>Google play</span>
        </div>
      </Button>
    </Wrapper>
  )
}
