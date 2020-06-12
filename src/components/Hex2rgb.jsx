import React from 'react'
import PropTypes from 'prop-types'

function Hex2rgb(props) {
  const hexDefault = '#34495e'

  return (
    <div className="container" style={{ backgroundColor: { hexDefault } }}>
      <label htmlFor="hex-input" className="hex-input-label">
        HEX <span className="hex-input-inner">Code</span>
      </label>
      <input
        name="hex"
        id="hex-input"
        value="#34495e"
        className="input-text"
        aria-describedby="hex-error"
        placeholder="#xxxxxx"
        onChange={console.log('changed!')}
        required
      />
      <div className="result">rgb(52, 73, 94)</div>
      <div className="error" id="hex-error">
        Error!
      </div>
    </div>
  )
}

Hex2rgb.propTypes = {}

export default Hex2rgb
