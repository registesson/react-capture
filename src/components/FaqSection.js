import React from 'react'
import { About } from '../styles'
import styled from 'styled-components'
import Toggle from './Toggle'
import { motion } from 'framer-motion'

const FaqSection = () => {
  return (
    <Faq>
      <h2>
        Any Questions <span>FAQ</span>
      </h2>
      <Toggle>
        <motion.div className="question">
          <h4>How Do I Start</h4>
          <div className="answer">
            <p>Lorem ipsum dolor sit amet.</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi,
              doloremque.
            </p>
          </div>
          <div className="faq-line"></div>
        </motion.div>
      </Toggle>
      <Toggle>
        <motion.div className="question">
          <h4>Daily Schedule</h4>
          <div className="answer">
            <p>Lorem ipsum dolor sit amet.</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi,
              doloremque.
            </p>
          </div>
          <div className="faq-line"></div>
        </motion.div>
      </Toggle>
      <Toggle>
        <motion.div className="question">
          <h4>Different Payment Methodes</h4>
          <div className="answer">
            <p>Lorem ipsum dolor sit amet.</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi,
              doloremque.
            </p>
          </div>
          <div className="faq-line"></div>
        </motion.div>
      </Toggle>
      <Toggle>
        <motion.div className="question">
          <h4>What Products do you anwser?</h4>
          <div className="answer">
            <p>Lorem ipsum dolor sit amet.</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi,
              doloremque.
            </p>
          </div>
          <div className="faq-line"></div>
        </motion.div>
      </Toggle>
    </Faq>
  )
}

const Faq = styled(About)`
  display: block;
  span {
    display: block;
  }
  h2 {
    padding-bottom: 2rem;
    font-weight: lighter;
  }
  .faq-line {
    background: #cccccc;
    height: 0.2rem;
    margin: 2rem 0rem;
    width: 100%;
  }
  .question {
    padding: 3rem 0rem;
    cursor: pointer;
  }
  .answer {
    padding: 2rem 0rem;
    p {
      padding: 1rem 0rem;
    }
  }
`

export default FaqSection
