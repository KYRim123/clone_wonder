import Link from 'next/link'
import React from 'react'
import styled from 'styled-components'
import { TitleH4, TitleH1 } from './StylesComponent'
import WrapperIcon from './icons/WrapperIcon'
const AnswerStyled = styled.div`
  padding-top: 5rem;
`
const AnswerTitle = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding-top: 5rem;
`
const AnswerLink = styled(Link)`
  display: flex;
  justify-content: space-between;
  text-align: left;
  display: flex;
  color: var(--text-gray);
  font-size: 2rem;
  padding: 2rem;
  border-bottom: 1px solid var(--text-gray);
  :hover {
    color: var(--color-black);
  }
`
export default function Answer() {
  return (
    <AnswerStyled>
      <AnswerTitle>
        <TitleH4>answers for the</TitleH4>
        <TitleH1>Frequently asked questions</TitleH1>
      </AnswerTitle>
      <AnswerLink href={'#'}>
        <h3>What is Wonder and what does it do?</h3>
        <WrapperIcon>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
          </svg>
        </WrapperIcon>
      </AnswerLink>
      <AnswerLink href={'#'}>
        <h3>How do I get started with using your product?</h3>
        <WrapperIcon>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
          </svg>
        </WrapperIcon>
      </AnswerLink>
      <AnswerLink href={'#'}>
        <h3>What are the pricing plans for your product?</h3>
        <WrapperIcon>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
          </svg>
        </WrapperIcon>
      </AnswerLink>
      <AnswerLink href={'#'}>
        <h3>Is there a free trial available for your product?</h3>
        <WrapperIcon>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
          </svg>
        </WrapperIcon>
      </AnswerLink>
    </AnswerStyled>
  )
}
