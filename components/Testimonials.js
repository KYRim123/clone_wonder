import React, { useState } from 'react'
import styled, { css } from 'styled-components'
import { AiFillStar } from 'react-icons/ai'
import ImageComponent from './Image'
import { TitleH1, TitleH4, centerItem } from './StylesComponent'

const Wrapper = styled.div``

const Container = styled.div`
  margin-top: 10rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`
const WrapperListComment = styled.div`
  position: relative;
  overflow: hidden;
  width: 100%;
  padding: 4rem 2rem;
`
const Comments = styled.div`
  display: flex;
  gap: 2rem;
  transition: transform 0.8s linear;
  li {
    border: 1px solid rgb(229, 224, 224);
    padding: 2rem;
    border-radius: 2rem;
    list-style: none;
    flex: 0 0 25rem;
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
  cursor: pointer;
  ${(props) =>
    props.type === 'prev' &&
    css`
      left: 0;
      top: 50%;
    `}
  ${(props) =>
    props.type === 'next' &&
    css`
      right: 0;
      top: 50%;
    `}
  span {
    ${centerItem}
    position: relative;
    padding: 2rem;
    border-radius: 50%;
    background-color: #666;
    z-index: 1;
    ::after {
      content: '';
      position: absolute;
      height: 8px;
      width: 8px;
      ${(props) =>
        props.type === 'next' &&
        css`
          border-top: 2px solid #fff;
          border-right: 2px solid #fff;
        `}
      ${(props) =>
        props.type === 'prev' &&
        css`
          border-bottom: 2px solid #fff;
          border-left: 2px solid #fff;
        `}
      transform: rotate(45deg);
    }
  }
`
export default function Testimonials() {
  const [crListComment, setCrListComment] = useState(0)
  const comments = [
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
      name: 'Maren C.',
      time: '3 months ago',
      icon: '/twitter.png',
    },
  ]
  return (
    <Wrapper>
      <Container>
        <TitleH4>testimonials</TitleH4>
        <TitleH1>What people say</TitleH1>
        <WrapperListComment>
          {crListComment !== 0 && (
            <Btn type="prev" onClick={() => setCrListComment(crListComment - 1)}>
              <span></span>
            </Btn>
          )}
          {crListComment === 0 && (
            <Btn type="next" onClick={() => setCrListComment(crListComment + 1)}>
              <span></span>
            </Btn>
          )}
          <Comments style={{ transform: `translateX(${crListComment * -100}%)` }}>
            {comments.length > 0 &&
              comments.map((comment, index) => (
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
                    components and easy-to-use interface have allowed me to create stunning
                    prototypes in record time.
                  </p>
                </li>
              ))}
          </Comments>
        </WrapperListComment>
      </Container>
    </Wrapper>
  )
}
