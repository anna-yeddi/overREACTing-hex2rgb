import React from 'react'
import PropTypes from 'prop-types'

function Rgb(props) {
  console.log(props)
  const hex = props.hex
  // const isValidHex = props.isValidHex

  // Validate input:
  const hexRegex = new RegExp('^#[0-9a-f]{6}', 'i')
  const isValidHex = hexRegex.test(hex) && hex.length === 7

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
    <div
      className={`result result-${isValidHex ? 'rgb' : 'error'}`}
      id="hex-result">
      {isValidHex ? rgbFrom(hex) : 'Error: invalid HEX code'}
    </div>
  )
}

Rgb.propTypes = {
  // hex: PropTypes.string.isRequired,
  // isValidHex: PropTypes.bool.isRequired,
}

export default Rgb
