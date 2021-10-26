import { forwardRef } from 'react'
import { IconProps } from './types'

export const IconArrowDownRight16 = forwardRef<SVGSVGElement, IconProps>(
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
          d="M3.22 4.28a.75.75 0 011.06-1.06l7.22 7.22V6.75a.75.75 0 011.5 0v5.5a.747.747 0 01-.75.75h-5.5a.75.75 0 010-1.5h3.69L3.22 4.28z"
        />
      </svg>
    )
  }
)
