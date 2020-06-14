import React, { useState } from 'react'
import PropTypes from 'prop-types'

function Hex2rgb(props) {
  const [hex, setHex] = useState({
    value: '',
    isValid: true,
  })

  // Update state and validate input
  const handleChange = ({ target }) => {
    const hexRegex = new RegExp('^#[0-9a-f]{6}', 'i')
    const isValidValue =
      hexRegex.test(target.value) && target.value.length === 7

    setHex(() => ({
      value: target.value,
      isValid: isValidValue,
    }))
    console.log(hex)
  }

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

  return (
    <div className="container" style={{ backgroundColor: rgbFrom(hex.value) }}>
      <label htmlFor="hex-input" className="hex-input-label">
        HEX <span className="hex-input-inner">Code</span>
      </label>
      <input
        name="hex"
        id="hex-input"
        value={hex.value}
        className="input-text"
        aria-describedby="hex-result"
        aria-valid={hex.isValid}
        placeholder="#xxxxxx"
        maxLength="7"
        onChange={handleChange}
        required
      />
      <div
        className={`result result-${hex.isValid ? 'rgb' : 'error'}`}
        id="hex-result">
        {hex.isValid ? rgbFrom(hex.value) : 'Error: invalid HEX code'}
      </div>
    </div>
  )
}

Hex2rgb.propTypes = {}

export default Hex2rgb
