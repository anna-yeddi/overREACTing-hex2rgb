import React from 'react'
import PropTypes from 'prop-types'

function Hex2rgb(props) {
  return (
    <div className="container" style={{ backgroundColor: '#34495e' }}>
      <label htmlFor="hex-input">HEX Color Code</label>
      <input
        name="hex"
        id="hex-input"
        value="#34495e"
        className="input"
        aria-describedby="hex-error"
        placeholder="#xxxxxx"
        onChange={console.log('changed!')}
        required
      />
      <div className="result">rgb(52, 73, 94)</div>
      <span className="error" id="hex-error"></span>
    </div>
  )
}

Hex2rgb.propTypes = {}

export default Hex2rgb
