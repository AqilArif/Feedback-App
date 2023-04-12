import React from 'react'
import PropTypes from 'prop-types'

const Header = ({text, bgColor, textColor}) => {
    
  const headerStyle = {
    backgroundColor: bgColor,
    color: textColor
  }

  return (
    <header style={headerStyle}>
     <div className='container'>
        <h1 className='text-center'>
            {text}
        </h1>
     </div>
    </header>
  )
}

Header.defaultProps = {
    text: 'Feedback UI',
    bgColor: 'rgba(0,0,0,0.4)',
    textColor: '#ff6a95'
}

// With the help of propTypes you should validate the props like : text: PropTypes.string.isRequired and etc...

Header.propTypes = {
    text: PropTypes.string, // this will only accept the props as a string
    bgColor: PropTypes.string,
    textColor: PropTypes.string,
}

export default Header