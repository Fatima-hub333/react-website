import React from 'react'
import { Feature } from '../../components'
import './whatGPT3.css'

const WhatGPT3 = () => {
  return (
    <div className='gpt3__whatgpt3 section__margin' id='whpt3'>
      <div className='gpt3__whatgpt3-feature'>
        <Feature />
      </div>
      <div className='gpt3__whatgpt3-heading'>
        <h1 className='gradient__text'>The Possibilities beyond your imagination</h1>
        <p>Explore the Library</p>
      </div>
      <div className='gpt3__whatgpt3-container'>
        <Feature />
        <Feature />
        <Feature />
      </div>
    </div>
  )
}

export default WhatGPT3