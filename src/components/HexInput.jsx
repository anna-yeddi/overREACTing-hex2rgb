import React from 'react'
import PropTypes from 'prop-types'

function HexInput(props) {
  const handleInput = (e) => {
    const { value } = e.target
    props.onHexInput(value)
  }

  return (
    <input
      name="hex"
      id="hex-input"
      value={props.hex}
      className="input-text"
      aria-describedby="hex-result"
      aria-invalid={!props.isValidHex}
      placeholder="#xxxxxx"
      maxLength="7"
      onChange={handleInput}
      required
    />
  )
}

HexInput.propTypes = {
  hex: PropTypes.string.isRequired,
  onHexInput: PropTypes.func.isRequired,
  isValidHex: PropTypes.bool.isRequired,
}

export default HexInput
