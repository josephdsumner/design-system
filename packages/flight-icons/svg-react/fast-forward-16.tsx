import { forwardRef } from 'react'
import { IconProps } from './types'

export const IconFastForward16 = forwardRef<SVGSVGElement, IconProps>(
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
        <path
          fill={color}
          d="M8.926 3.364A1.25 1.25 0 007 4.416v1.806L2.962 3.427A1.25 1.25 0 001 4.454v7.092a1.25 1.25 0 001.962 1.027L7 9.778v1.806a1.25 1.25 0 001.926 1.052L14.5 9.052a1.25 1.25 0 000-2.103L8.926 3.364zM13.363 8L8.5 11.126V4.874L13.363 8zM2.5 11.069V4.93L6.932 8 2.5 11.069z"
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    )
  }
)
