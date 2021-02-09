import React, { useState } from 'react'
import { motion } from 'framer-motion'

const Toggle = ({ children }) => {
  const [toggle, setToggle] = useState(true)

  return <div onClick={() => setToggle(!toggle)}>{toggle ? children : ''}</div>
}

export default Toggle
