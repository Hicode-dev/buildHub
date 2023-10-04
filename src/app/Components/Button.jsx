import Link from 'next/link'
import React from 'react'

const Button = (props) => {
  return (
   <button className={props.className}><Link href='/waitlist'>{props.text}</Link></button>
  )
}

export default Button