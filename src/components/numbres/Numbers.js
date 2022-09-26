import React from 'react'
import CountUp from 'react-countup';

import './numbers.css'

export default function Numbers() {


  return (
    <section className='numbers'>
    <div className='container'>
      <div className='row'>
          <div className='col-md-3'>
            <h2><CountUp end={1287} delay={1}/>+</h2>
            <h6>SAVINGS</h6>
          </div>
          <div className='col-md-3'>
            <h2><CountUp end={5786} delay={1}/>+</h2>
            <h6>PHOTOS</h6>
          </div>
          <div className='col-md-3'>
            <h2><CountUp end={1440} delay={1}/>+</h2>
            <h6>ROCKETS</h6>
          </div>
          <div className='col-md-3'>
            <h2><CountUp end={7110} delay={1}/>+</h2>
            <h6>GLOBES</h6>
          </div>
      </div>
    </div>
   </section>
  )
}
