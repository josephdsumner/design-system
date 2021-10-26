import { forwardRef } from 'react'
import { IconProps } from './types'

export const IconGitPullRequest16 = forwardRef<SVGSVGElement, IconProps>(
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
        <g fill={color} fillRule="evenodd" clipRule="evenodd">
          <path d="M5 6.905A3.001 3.001 0 004.25 1a3 3 0 00-.75 5.905V14A.75.75 0 005 14V6.905zM2.75 4a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM12.5 5.25v3.595a3.001 3.001 0 01-.75 5.905A3 3 0 0111 8.845V5.25a.75.75 0 00-.75-.75H9A.75.75 0 019 3h1.25a2.25 2.25 0 012.25 2.25zm-2.25 6.5a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z" />
        </g>
      </svg>
    )
  }
)
