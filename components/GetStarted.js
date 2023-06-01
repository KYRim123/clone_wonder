import React from 'react'
import Center from './Center'
import styled from 'styled-components'
import { ContentP, TitleH1 } from './Features'
import Link from 'next/link'
import Button from './Button'
const Bg = styled.div`
  background-color: #6ce4d8e6;
  height: 55rem;
  border-radius: 6rem;
`
const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding-top: 10rem;
  text-align: center;
`

export default function GetStarted() {
  return (
    <Center>
      <Bg>
        <Container>
          <TitleH1>
            Get started with <br /> Wonder
          </TitleH1>
          <ContentP>
            Wonder is an all-in-one template with many <br /> components ready to use right out of
            the box.
          </ContentP>
          <div style={{ paddingBottom: '3rem' }}>
            <Link href={'#'} className="button buyTemplate">
              <Button color='white' bg='black' margin='right'>
                Buy template
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
              </Button>
            </Link>
            <Link href={'#'} className="button learnMore">
              Learn more
            </Link>
          </div>
        </Container>
      </Bg>
    </Center>
  )
}
