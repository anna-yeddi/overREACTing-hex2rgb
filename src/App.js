import React from 'react'
import './App.css'
import Hex2rgb from './components/Hex2rgb'

function App() {
  const values = {
    hex: '#00a0a0',
    rgb: 'rgb(0,160,160)',
  }

  return (
    <>
      <Hex2rgb hex={values.hex} rgb={values.rgb} />
    </>
  )
}

export default App
