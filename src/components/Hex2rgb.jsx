import React, { useState } from 'react'
import PropTypes from 'prop-types'
import HexInput from '../components/HexInput'

function Hex2rgb(props) {
  const [hex, setHex] = useState(props.hex)
  const [isFilled, setIsFilled] = useState(true)
  const [bgColor, setBgColor] = useState('')

  // Validate input:
  const hexRegex = new RegExp('^#[0-9a-f]{6}', 'i')
  const isValidHex = hexRegex.test(hex)
  const isLongHex = hex.length === 7

  // Convert HEX to RGB values:
  const rgbFrom = (hex) => {
    let r = 0,
      g = 0,
      b = 0

    if (hex.length === 7) {
      r = '0x' + hex[1] + hex[2]
      g = '0x' + hex[3] + hex[4]
      b = '0x' + hex[5] + hex[6]
    }

    return 'rgb(' + +r + ',' + +g + ',' + +b + ')'
  }

  const handleHexInput = (value) => {
    setHex(value)
    if (isLongHex) {
      setIsFilled(hex)
    }
    console.log('Hex set to: ', hex)
  }

  const handleConvert = (hex) => {
    setBgColor((prevValue) => {})
    console.log('Bg set to: ', bgColor)
  }

  return (
    <div className="container" style={{ backgroundColor: bgColor }}>
      <label htmlFor="hex-input" className="hex-input-label">
        HEX <span className="hex-input-inner">Code</span>
      </label>
      <HexInput onHexInput={handleHexInput} hex={hex} />
      <div
        className={`result result-${isValidHex ? 'rgb' : 'error'}`}
        id="hex-result">
        {isValidHex ? rgbFrom(hex) : 'Error: invalid HEX code'}
      </div>
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
