import React from 'react'
import Footer from './Footer'
export default function Calculator() {
  return (
    <>
      <div className="body">
        <div className="calculator">
          <input type="text" name="inputText" disabled id="screen" placeholder='0' />
          <div>
            <button id='ac'>AC</button>
            <button id='del'>DEL</button>
            <button id='percentage'>%</button>
            <button id='divide'>/</button>
          </div>
          <div>
            <button>7</button>
            <button>8</button>
            <button>9</button>
            <button id='mul'>X</button>
          </div>
          <div>
            <button>4</button>
            <button>5</button>
            <button>6</button>
            <button id='add'>+</button>
          </div>
          <div>
            <button>1</button>
            <button>2</button>
            <button>3</button>
            <button id='sub'>-</button>
          </div>
          <div>
            <button>0</button>
            <button>00</button>
            <button>.</button>
            <button id='equal'>=</button>
          </div>
        </div>
        <Footer />
      </div>
    </>
  )
}
