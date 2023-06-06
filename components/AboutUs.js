import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Link from 'next/link'
import { useInView } from 'react-intersection-observer'
import { ContentP, TitleH1, TitleH4 } from './StylesComponent'

const Wrapper = styled.div`
  padding-top: 16.8rem;
`
const Container = styled.div`
  display: flex;
  gap: 5rem;
  @media (max-width: 1023px) {
    flex-direction: column;
  }
`
const Content = styled.div`
  width: 53.6rem;
  .icon {
    width: 1.5rem;
  }
  @media (max-width: 1023px) {
    width: 100%;
  }
`
const RateBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: rgb(243, 243, 243);
  border-radius: 3rem;
  width: 28rem;
  height: 25rem;
  h2 {
    font-size: 5.6rem;
  }
  h2,
  p {
    color: var(--text-gray);
  }
  @media (max-width: 1023px) {
    width: 100%;
  }
`
const Rates = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  gap: 2rem;
  margin: 8rem auto;
  @media (max-width: 1023px) {
    flex-direction: column;
    align-items: center;
  }
`
export default function AboutUs() {
  const [ref, inView] = useInView({
    triggerOnce: true, // Chỉ kích hoạt một lần khi phần tử vào viewport
    threshold: 0.1, // Kích hoạt khi phần trăm hiển thị của phần tử >= 10%
  })
  const [count1, setCount1] = useState(1)
  const [count2, setCount2] = useState(1)
  const [count3, setCount3] = useState(1)

  useEffect(() => {
    if (inView && count1 < 249) {
      const timer1 = setInterval(() => {
        setCount1(count1 + 1)
      }, 5)

      return () => {
        clearInterval(timer1)
      }
    }
  }, [inView, count1])

  useEffect(() => {
    if (inView && count2 < 370) {
      const timer2 = setInterval(() => {
        setCount2(count2 + 1)
      }, 5)

      return () => {
        clearInterval(timer2)
      }
    }
  }, [inView, count2])

  useEffect(() => {
    if (inView && count3 < 510) {
      const timer3 = setInterval(() => {
        setCount3(count3 + 1)
      }, 5)

      return () => {
        clearInterval(timer3)
      }
    }
  }, [inView, count3])

  return (
    <Wrapper>
      <TitleH4>about us</TitleH4>
      <Container>
        <Content>
          <TitleH1>Enrich your design workflow with wonder</TitleH1>
        </Content>
        <Content>
          <ContentP paddingBT>
            This is an all-in-one Framer template which can help you to create a website in an
            instant! The days of spending time manually building the same components are gone. This
            is definitely a great opportunity to get started right away!
          </ContentP>
          <Link href={'#'} style={{ display: 'flex', alignItems: 'center' }}>
            Learn more about us
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 icon"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
              />
            </svg>
          </Link>
        </Content>
      </Container>
      <Rates ref={ref}>
        <RateBox>
          <h2>{count1} %</h2>
          <p>Wonder’s growth in 2022 so far</p>
        </RateBox>
        <RateBox>
          <h2>{count2} k</h2>
          <p>Users around the world</p>
        </RateBox>
        <RateBox>
          <h2>{count3} M</h2>
          <p>Wonder’s revenue in Q1 2022</p>
        </RateBox>
      </Rates>
    </Wrapper>
  )
}
