import React from 'react'
import styles from './button.module.css'

const Button = ({children, style, ...props}) => {
  return (
    <button style={style} {...props} className={`${styles.button} ${props?.className}`}>
      {children}
    </button>
  )
}

export default Button