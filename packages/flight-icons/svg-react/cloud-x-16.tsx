import { forwardRef } from 'react'
import { IconProps } from './types'

export const IconCloudX16 = forwardRef<SVGSVGElement, IconProps>(
  ({ color = 'currentColor', ...props }, forwardedRef) => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="none"
        viewBox="0 0 16 16"
        {...props}
        ref={forwardedRef}
      >
        <g fill={color}>
          <path d="M3.932 1.373a6.041 6.041 0 016.239 1.28 5.998 5.998 0 011.505 2.284h.28c1.071 0 2.1.424 2.858 1.18a4.025 4.025 0 01-.665 6.239.75.75 0 01-.812-1.262 2.524 2.524 0 00.418-3.914 2.551 2.551 0 00-1.8-.742h-.83a.75.75 0 01-.726-.562A4.496 4.496 0 009.14 3.74a4.541 4.541 0 00-4.688-.96 4.52 4.52 0 00-2.006 1.466 4.488 4.488 0 00.386 5.942.75.75 0 01-1.055 1.066 5.982 5.982 0 01-.515-7.928 6.02 6.02 0 012.67-1.954z" />
          <path d="M10.78 9.22a.75.75 0 010 1.06L9.06 12l1.72 1.72a.75.75 0 11-1.06 1.06L8 13.06l-1.72 1.72a.75.75 0 01-1.06-1.06L6.94 12l-1.72-1.72a.75.75 0 111.06-1.06L8 10.94l1.72-1.72a.75.75 0 011.06 0z" />
        </g>
      </svg>
    )
  }
)
