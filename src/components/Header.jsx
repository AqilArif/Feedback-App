import React from 'react'
// import PropTypes from 'prop-types'

const Header = ({text}) => {
  return (
    <>
     <h1>{text}</h1>
    </>
  )
}

Header.defaultProps = {
    text: 'Feedback UI'
}

// With the help of propTypes you should validate the props like : text: PropTypes.string.isRequired and etc...

// Header.propTypes = {
//     text: PropTypes.string, // this will only accept the props as a string
// }

export default Header