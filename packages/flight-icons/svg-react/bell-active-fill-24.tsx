import { forwardRef } from 'react'
import { IconProps } from './types'

export const IconBellActiveFill24 = forwardRef<SVGSVGElement, IconProps>(
  ({ color = 'currentColor', ...props }, forwardedRef) => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="none"
        viewBox="0 0 24 24"
        {...props}
        ref={forwardedRef}
      >
        <g fill={color}>
          <path d="M22.25 16.5c-1.231 0-2.25-1.046-2.25-2.35V8.983a7.54 7.54 0 00-.05-.872.75.75 0 00-.856-.655 4 4 0 01-4.402-5.185.75.75 0 00-.499-.948A7.643 7.643 0 0012 1C7.702 1 4 4.665 4 8.983v5.167c0 1.304-1.019 2.35-2.25 2.35a.75.75 0 000 1.5h20.5a.75.75 0 000-1.5z" />
          <path d="M18.5 6a2.5 2.5 0 100-5 2.5 2.5 0 000 5zM10.42 20.414a.75.75 0 00-1.34.672C9.63 22.188 10.703 23 12 23c1.296 0 2.369-.812 2.92-1.914a.75.75 0 10-1.34-.672c-.347.691-.953 1.086-1.58 1.086-.627 0-1.233-.395-1.58-1.086z" />
        </g>
      </svg>
    )
  }
)
