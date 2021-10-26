import { forwardRef } from 'react'
import { IconProps } from './types'

export const IconEntryPoint24 = forwardRef<SVGSVGElement, IconProps>(
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
          <path d="M12 4.5a7.498 7.498 0 00-6.561 3.864.75.75 0 01-1.312-.728 9 9 0 110 8.728.75.75 0 011.312-.728A7.5 7.5 0 1012 4.5z" />
          <path d="M3 12a.75.75 0 01.75-.75h9.614l-3.129-2.955a.75.75 0 011.03-1.09l4.5 4.25a.75.75 0 010 1.09l-4.5 4.25a.75.75 0 01-1.03-1.09l3.129-2.955H3.75A.75.75 0 013 12z" />
        </g>
      </svg>
    )
  }
)
