import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import Link from 'next/link'
import { ButtonDefault, ContentP, TitleH1, TitleH4, BoxIcon, FlexStyled } from './StylesComponent'
import { wrapGrid } from 'animate-css-grid'

const WrapperFeatures = styled.div`
  padding: 7.4rem 0 14.8rem;
`
const ContainerFeatures = styled.div`
  padding-top: 1rem;
`
const FeaturesContent = styled.div`
  width: 50%;
`
const FeaturesBox = styled.div`
  display: grid;
  flex: 1 0 0px;
  gap: 16px;
  grid-auto-rows: 250px;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  height: 516px;
  justify-content: center;
  max-width: 604px;
  min-width: 400px;
  overflow: hidden;
  padding: 0;
  position: relative;
  width: 1px;
`

export default function Features() {
  const [currentBox, setCurrentBox] = useState(0)
  const refGridBox = useRef()
  const featuresItems = [
    {
      name: 'Best features provided by wonder',
      content:
        'Wonder is an all-in-one template with many components ready to use right out of the box. Check out everything you can do with it and how fast it will be to get your website up and running.',
      svg: (
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
            d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5m8.25 3v6.75m0 0l-3-3m3 3l3-3M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z"
          />
        </svg>
      ),
      color: 'purple',
    },
    {
      name: 'Components ready to use',
      color: 'red',
      content:
        'Wonder comes with a great selection of modern components out of the box. This is a great way to quickly get a website up and running without having to start from scratch. This saves time and effort and allows you to focus on what`s important: your product.',
      svg: (
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
            d="M21 10.5h.375c.621 0 1.125.504 1.125 1.125v2.25c0 .621-.504 1.125-1.125 1.125H21M4.5 10.5H18V15H4.5v-4.5zM3.75 18h15A2.25 2.25 0 0021 15.75v-6a2.25 2.25 0 00-2.25-2.25h-15A2.25 2.25 0 001.5 9.75v6A2.25 2.25 0 003.75 18z"
          />
        </svg>
      ),
    },
    {
      name: 'Publish your website super fast',
      color: 'blue',
      content:
        'Have you ever dreamed of being able to publish a website so quickly? With Framer and Wonder template, you can make it a reality in just a few clicks! It`s truly amazing how efficient this process is, and how easy it is to get your website up and running in no time.',
      svg: (
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
            d="M13.5 21v-7.5a.75.75 0 01.75-.75h3a.75.75 0 01.75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349m-16.5 11.65V9.35m0 0a3.001 3.001 0 003.75-.615A2.993 2.993 0 009.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 002.25 1.016c.896 0 1.7-.393 2.25-1.016a3.001 3.001 0 003.75.614m-16.5 0a3.004 3.004 0 01-.621-4.72L4.318 3.44A1.5 1.5 0 015.378 3h13.243a1.5 1.5 0 011.06.44l1.19 1.189a3 3 0 01-.621 4.72m-13.5 8.65h3.75a.75.75 0 00.75-.75V13.5a.75.75 0 00-.75-.75H6.75a.75.75 0 00-.75.75v3.75c0 .415.336.75.75.75z"
          />
        </svg>
      ),
    },
    {
      name: 'Private your website super fast',
      color: 'yellow',
      content:
        'Have you ever dreamed of being able to publish a website so quickly? With Framer and Wonder template, you can make it a reality in just a few clicks! It`s truly amazing how efficient this process is, and how easy it is to get your website up and running in no time.',
      svg: (
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
            d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0M3.124 7.5A8.969 8.969 0 015.292 3m13.416 0a8.969 8.969 0 012.168 4.5"
          />
        </svg>
      ),
    },
  ]
  const handleItem = (index) => {
    setCurrentBox(index)
  }

  useEffect(() => {
    wrapGrid(refGridBox.current)
  }, [])

  return (
    <WrapperFeatures id="features">
      <TitleH4>features</TitleH4>
      <ContainerFeatures>
        <FlexStyled style={{ gap: '3rem', alignItems: 'start' }}>
          <FeaturesContent>
            <TitleH1>{featuresItems[currentBox].name}</TitleH1>
            <ContentP>{featuresItems[currentBox].content}</ContentP>
            <div>
              <Link href={'#'}>
                <ButtonDefault bg="black" color="white" margin="right">
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
                </ButtonDefault>
              </Link>
              <Link href={'#'}>Learn more</Link>
            </div>
          </FeaturesContent>
          <FeaturesBox ref={refGridBox}>
            {featuresItems.map((item, index) => (
              <BoxIcon
                key={index}
                bg={item.color}
                active={currentBox}
                onClick={() => handleItem(index)}
              >
                {item.svg}
              </BoxIcon>
            ))}
          </FeaturesBox>
        </FlexStyled>
      </ContainerFeatures>
    </WrapperFeatures>
  )
}
