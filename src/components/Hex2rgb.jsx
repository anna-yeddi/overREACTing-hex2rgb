import React, { useState } from 'react'
import PropTypes from 'prop-types'
import HexInput from '../components/HexInput'
import Rgb from '../components/Rgb'

function Hex2rgb(props) {
  const [hex, setHex] = useState(props.hex)
  const [isFilled, setIsFilled] = useState(true)

  // // Validate input:
  // const hexRegex = new RegExp('^#[0-9a-f]{6}', 'i')
  // const isValidHex = hexRegex.test(hex) && hex.length === 7

  const handleChange = ({ target }) => {
    // setHex(target.value)
    console.log(target)
    console.log(hex)
  }
  const handleConvert = (hex) => {
    // setHex(target.value)
    console.log('Hex set to: ', hex)
  }

  const handleHexInput = (value) => {
    setHex(value)
    console.log('Hex set to: ', hex)
  }

  return (
    <div className="container" style={{ backgroundColor: hex }}>
      <label htmlFor="hex-input" className="hex-input-label">
        HEX <span className="hex-input-inner">Code</span>
      </label>
      <HexInput onHexInput={handleHexInput} hex={hex} />
      <Rgb onConvert={handleConvert} hex={hex && isFilled} />
    </div>
  )
}

Hex2rgb.defaultProps = {
  hex: '#00a0a0',
  rgb: 'rgb(0,160,160)',
}

Hex2rgb.propTypes = {
  hex: PropTypes.string.isRequired,
  rgb: PropTypes.string.isRequired,
}

export default Hex2rgb
