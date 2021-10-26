import { forwardRef } from 'react'
import { IconProps } from './types'

export const IconMaximize16 = forwardRef<SVGSVGElement, IconProps>(
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
          <path d="M10.25 1a.75.75 0 000 1.5h2.19L9.47 5.47a.75.75 0 001.06 1.06l2.97-2.97v2.19a.75.75 0 001.5 0v-4a.75.75 0 00-.75-.75h-4zM2.5 10.25a.75.75 0 00-1.5 0v4c0 .414.336.75.75.75h4a.75.75 0 000-1.5H3.56l2.97-2.97a.75.75 0 10-1.06-1.06L2.5 12.44v-2.19z" />
        </g>
      </svg>
    )
  }
)
