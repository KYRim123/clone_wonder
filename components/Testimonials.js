import React from 'react'
import styled from 'styled-components'
import { AiFillStar } from 'react-icons/ai'
import ImageComponent from './Image'
import { TitleH4 } from './StylesComponent'
const TestStyled = styled.div`
  margin-top: 10rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`
const ListComments = styled.div`
  position: relative;
  padding: 2rem;
  display: flex;
  gap: 2rem;
  li {
    border: 1px solid rgb(229, 224, 224);
    width: 28rem;
    padding: 2rem;
    border-radius: 2rem;
    list-style: none;
  }
`
const Info = styled.div`
  display: flex;
  position: relative;
`
const InfoDetail = styled.div`
  padding-left: 1rem;
`
const Starts = styled.div`
  padding: 2rem 0;
  .icon {
    color: rgb(214, 163, 53);
    font-size: 2.5rem;
  }
`
const Btn = styled.div`
  position: absolute;
  background-color: var(--bg-black);
  border-radius: 50%;
  padding: 0.5rem;
  cursor: pointer;
  .icon {
    width: 2.5rem;
    height: 2rem;
    color: white;
  }
`
export default function Testimonials() {
  const listComments = [
    {
      link: 'https://framerusercontent.com/images/K7mwPf64c1OQU2Uw9LnfRkDvxGg.png?scale-down-to=512',
      name: 'Maren T.',
      time: '2 months ago',
      icon: '/gg.png',
    },
    {
      link: 'https://framerusercontent.com/images/K7mwPf64c1OQU2Uw9LnfRkDvxGg.png?scale-down-to=512',
      name: 'Maren T.',
      time: '2 months ago',
      icon: '/twitter.png',
    },
    {
      link: 'https://framerusercontent.com/images/K7mwPf64c1OQU2Uw9LnfRkDvxGg.png?scale-down-to=512',
      name: 'Maren T.',
      time: '1 months ago',
      icon: '/gg.png',
    },
    {
      link: 'https://framerusercontent.com/images/K7mwPf64c1OQU2Uw9LnfRkDvxGg.png?scale-down-to=512',
      name: 'Maren T.',
      time: '3 months ago',
      icon: '/twitter.png',
    },
  ]
  return (
    <TestStyled>
      <TitleH4>testimonials</TitleH4>
      <h1>What people say</h1>
      <ListComments>
        <Btn style={{ left: 0, top: '50%' }}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 icon"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
          </svg>
        </Btn>

        {listComments.length > 0 &&
          listComments.map((comment, index) => (
            <li key={index}>
              <Info>
                <ImageComponent
                  styles={{
                    width: '4rem',
                    height: '4rem',
                    borderRadius: '50%',
                    border: '1px solid var(--color-purple)',
                    objectFit: 'cover',
                  }}
                >
                  {comment.link}
                </ImageComponent>
                <InfoDetail>
                  <h4>{comment.name}</h4>
                  <p>{comment.time}</p>
                </InfoDetail>
                <ImageComponent
                  styles={{ position: 'absolute', width: '2rem', height: '2rem', right: '0' }}
                  alt="gg"
                >
                  {comment.icon}
                </ImageComponent>
              </Info>
              <Starts>
                <AiFillStar className="icon" />
                <AiFillStar className="icon" />
                <AiFillStar className="icon" />
                <AiFillStar className="icon" />
                <AiFillStar className="icon" />
              </Starts>
              <p className="comment">
                Wonder has made my design process faster and more efficient. Its pre-built
                components and easy-to-use interface have allowed me to create stunning prototypes
                in record time.
              </p>
            </li>
          ))}

        <Btn style={{ right: 0, top: '50%' }}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 icon"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
          </svg>
        </Btn>
      </ListComments>
    </TestStyled>
  )
}
