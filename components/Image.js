import React from 'react'
import Image from 'next/image'

export default function ImageComponent({ alt, children, styles }) {
  return (
    <Image
      width={500}
      height={500}
      src={children}
      alt={alt ? 'img':alt}
      style={{...styles}}
    />
  )
}
