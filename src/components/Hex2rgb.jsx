import React, { useState } from 'react'
import PropTypes from 'prop-types'

function Hex2rgb(props) {
  const hexRegex = new RegExp('^#[0-9a-f]{6}', 'i')
  const [hex, setHex] = useState('')

  const handleChange = ({ target }) => {
    setHex(target.value)
    console.log(hex)
  }

  // Validate input
  // and run converter only when its length is 7
  const hexUpdated = (hex) => {
    if (!hexRegex.test(hex)) {
      return 'error'
    }
    return hex.length === 7 && hex
  }

  // Convert HEX to RGB values:
  const rgbFrom = (hex) => {
    if (hex === 'error') {
      return (
        <span className="error" id="hex-error">
          Error: invalid HEX
        </span>
      )
    } else {
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
  }

  return (
    <div className="container" style={{ backgroundColor: hexUpdated(hex) }}>
      <label htmlFor="hex-input" className="hex-input-label">
        HEX <span className="hex-input-inner">Code</span>
      </label>
      <input
        name="hex"
        id="hex-input"
        value={hex.value}
        className="input-text"
        aria-describedby="hex-error"
        placeholder="#xxxxxx"
        onChange={handleChange}
        maxLength="7"
        required
      />
      <div className="result">{rgbFrom(hexUpdated(hex))}</div>
    </div>
  )
}

Hex2rgb.propTypes = {}

export default Hex2rgb
