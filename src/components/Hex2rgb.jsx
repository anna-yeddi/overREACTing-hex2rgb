import React, { useState } from 'react'
import PropTypes from 'prop-types'
import HexInput from '../components/HexInput'

function Hex2rgb(props) {
  const [hex, setHex] = useState(props.hex)
  const [rgb, setRgb] = useState(props.rgb)

  // Validate input:
  const hexRegex = new RegExp('^#[0-9a-f]{6}', 'i')
  const isValidHex = hexRegex.test(hex)

  // Convert HEX to RGB values:
  const hex2rgbConvert = (hex) => {
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

    // Check length and validity to update output
    setRgb((prevRgb) => {
      if (value.length === 7) {
        if (hexRegex.test(value)) {
          return hex2rgbConvert(value)
        } else {
          // trigger error
          return false
        }
      } else {
        return prevRgb
      }
    })
  }

  return (
    <div className="container" style={{ backgroundColor: rgb }}>
      <label htmlFor="hex-input" className="hex-input-label">
        HEX <span className="hex-input-inner">Code</span>
      </label>
      <HexInput onHexInput={handleHexInput} hex={hex} isValidHex={isValidHex} />
      <div className={`result result-${rgb ? 'rgb' : 'error'}`} id="hex-result">
        {rgb ? rgb : 'Error: invalid HEX code'}
      </div>
    </div>
  )
}

Hex2rgb.propTypes = {
  hex: PropTypes.string.isRequired,
  rgb: PropTypes.string.isRequired,
}

export default Hex2rgb
