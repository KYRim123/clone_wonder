import React from 'react'
import Center from './Center'
import styled from 'styled-components'
import { TitleH1 } from './Features'
import Link from 'next/link'
import { TitleComponentH4 } from './Features'
import { ContentP } from './Features'

const AboutUsStyled = styled.div`
  margin-top: 10rem;
`
const AboutContainer = styled.div`
  display: flex;
  gap: 5rem;
  margin-top: 2rem;
`
const AboutContent = styled.div`
  width: 53.6rem;
  .icon {
    width: 1.5rem;
  }
`
const Rates = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  gap: 2rem;
  width: 100rem;
  margin: 8rem auto;
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
  h2, p {
     color: var(--text-gray);
  }
`
export default function AboutUs() {
  return (
    <Center>
      <AboutUsStyled>
        <TitleComponentH4>about us</TitleComponentH4>
        <AboutContainer>
          <AboutContent>
            <TitleH1>Enrich your design workflow with wonder</TitleH1>
          </AboutContent>
          <AboutContent>
            <ContentP>
              This is an all-in-one Framer template which can help you to create a website in an
              instant! The days of spending time manually building the same components are gone.
              This is definitely a great opportunity to get started right away!
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
          </AboutContent>
        </AboutContainer>
        <Rates>
          <RateBox>
            <h2>249 %</h2>
            <p>Wonder’s growth in 2022 so far</p>
          </RateBox>
          <RateBox>
            <h2>370 k</h2>
            <p>Users around the world</p>
          </RateBox>
          <RateBox>
            <h2>510 M</h2>
            <p>Wonder’s revenue in Q1 2022</p>
          </RateBox>
        </Rates>
      </AboutUsStyled>
    </Center>
  )
}
