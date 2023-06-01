import React from 'react'
import Center from './Center'
import styled from 'styled-components'
import { TitleComponentH4 } from './Features'
import { AiFillStar } from 'react-icons/ai'
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
  .icon {
    position: absolute;
    width: 2rem;
    height: 2rem;
    right: 0;
  }
  img {
    width: 4rem;
    height: 4rem;
    border-radius: 50%;
    border: 1px solid var(--color-purple);
    object-fit: cover;
  }
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
  return (
    <Center>
      <TestStyled>
        <TitleComponentH4>testimonials</TitleComponentH4>
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
          <li>
            <Info>
              <img
                src="https://framerusercontent.com/images/K7mwPf64c1OQU2Uw9LnfRkDvxGg.png?scale-down-to=512"
                alt=""
              />
              <InfoDetail>
                <h4>Maren T.</h4>
                <p>2 months ago</p>
              </InfoDetail>
              <img className="icon" src="./gg.png" alt="gg" />
            </Info>
            <Starts>
              <AiFillStar className="icon" />
              <AiFillStar className="icon" />
              <AiFillStar className="icon" />
              <AiFillStar className="icon" />
              <AiFillStar className="icon" />
            </Starts>
            <p className="comment">
              Wonder has made my design process faster and more efficient. Its pre-built components
              and easy-to-use interface have allowed me to create stunning prototypes in record
              time.
            </p>
          </li>
          <li>
            <Info>
              <img
                src="https://framerusercontent.com/images/ajvCgLPNOCStQ6c7jmhca08DHw.png"
                alt=""
              />
              <InfoDetail>
                <h4>Maren T.</h4>
                <p>2 months ago</p>
              </InfoDetail>
              <img className="icon" src="./gg.png" alt="gg" />
            </Info>
            <Starts>
              <AiFillStar className="icon" />
              <AiFillStar className="icon" />
              <AiFillStar className="icon" />
              <AiFillStar className="icon" />
              <AiFillStar className="icon" />
            </Starts>
            <p className="comment">
              As someone who is new to Framer, Wonder has been a lifesaver. Its intuitive layout and
              helpful documentation have made it easy for me to get started and create
              professional-looking designs.
            </p>
          </li>
          <li>
            <Info>
              <img src="https://framerusercontent.com/images/Vyz5psHR6CbUfzmutE4Vl2o.png" alt="" />
              <InfoDetail>
                <h4>Maren T.</h4>
                <p>2 months ago</p>
              </InfoDetail>
              <img className="icon" src="./twitter.png" alt="gg" />
            </Info>
            {/* <Starts>
              <AiFillStar className="icon" />
              <AiFillStar className="icon" />
              <AiFillStar className="icon" />
              <AiFillStar className="icon" />
              <AiFillStar className="icon" />
            </Starts> */}
            <p className="comment">
              I've been using Wonder for a few months now, and I can't imagine going back to
              designing without it. The template's customization options and flexibility make it
              perfect for any project.
            </p>
          </li>
          <li>
            <Info>
              <img
                src="https://framerusercontent.com/images/ZqZVXUVUMJSP49qs8ZXd38Rnq2k.png"
                alt=""
              />
              <InfoDetail>
                <h4>Maren T.</h4>
                <p>2 months ago</p>
              </InfoDetail>
              <img className="icon" src="./twitter.png" alt="gg" />
            </Info>
            <Starts>
              <AiFillStar className="icon" />
              <AiFillStar className="icon" />
              <AiFillStar className="icon" />
              <AiFillStar className="icon" />
              <AiFillStar className="icon" />
            </Starts>
            <p className="comment">
              The attention to detail in Wonder is incredible. The animations and transitions are
              seamless and add a level of polish to my designs that I couldn't achieve on my own.
            </p>
          </li>
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
    </Center>
  )
}
