import React from 'react'
import './styles.module.css'

var styles = {
  primary: '_3ljpl',
  dashed: '_27xYC',
  text: '_5bXm4',
  link: '_71S8l',
  default: '_3UK6o'
}

export const Button = (props) => {
  if (props.type === 'primary') {
    return (
      <button className={styles.primary} {...props}>
        {props.text}
      </button>
    )
  } else if (props.type === 'default') {
    return (
      <button className={styles.default} {...props}>
        {props.text}
      </button>
    )
  } else if (props.type === 'dashed') {
    return (
      <button className={styles.dashed} {...props}>
        {props.text}
      </button>
    )
  } else if (props.type === 'text') {
    return (
      <button className={styles.text} {...props}>
        {props.text}
      </button>
    )
  } else if (props.type === 'link') {
    return (
      <button className={styles.link} {...props}>
        {props.text}
      </button>
    )
  }
}
