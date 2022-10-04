import React from 'react'
import { useState } from 'react'
import { showOrHide } from '../../src/slices/toggleSlice'
import { useDispatch, useSelector } from 'react-redux'
import { increment, decrement } from '../../src/slices/incOrdec'


const Input = () => {
  const [value, setValue] = useState('')


  const dispatch = useDispatch()
  const currentState = useSelector((state) => state.showHide.value)
  const counter = useSelector((state) => state.incOrHide.counter)

  const handelChange = (e) => {
    setValue(e.target.value)
  }

  return (
    <div>
      <input type='text' onChange={handelChange} />
      <button onClick={() => { dispatch(showOrHide({ value: !currentState })) }}>show/hide</button>
      {currentState && <h3>{value}</h3>}
      <h3>{currentState.toString()}</h3>
      <div>
        <button onClick={() => { dispatch(increment({ counter })) }}>+</button>
        <span> {counter} </span>
        <button onClick={() => { dispatch(decrement({ counter })) }}>-</button>
      </div>
    </div >
  )
}

export default Input