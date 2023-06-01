import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  width: 200px; /* Điều chỉnh độ rộng theo ý muốn */
  overflow: hidden;
`

const Marquee = styled.div`
  display: flex;
  animation: marquee 10s linear infinite;
  span {
    flex-shrink: 0;
    margin-right: 20px; /* Khoảng cách giữa các văn bản */
    @keyframes marquee {
      0% {
        transform: translateX(0%);
      }
      100% {
        transform: translateX(-100%);
      }
    }
  }
`

export default function Animation() {
  return (
    <Container>
      <Marquee>
        <span>This is the </span>
        <span>This is </span>
        <span>This is </span>
      </Marquee>
    </Container>
  )
}
