import React from 'react'
import { useState } from 'react'
import { showOrHide } from '../store'
import { useDispatch, useSelector } from 'react-redux'

const Input = () => {
  const [value, setValue] = useState('')

  const dispatch = useDispatch()
  const currentState = useSelector((state) => state.showHide.value)

  const handelChange = (e) => {
    setValue(e.target.value)
  }

  return (
    <div>
      <input type='text' onChange={handelChange} />
      <button onClick={() => { dispatch(showOrHide({ value: !currentState })) }}>show/hide</button>
      {currentState && <h3>{value}</h3>}
      <h3>{currentState.toString()}</h3>
    </div >
  )
}

export default Input