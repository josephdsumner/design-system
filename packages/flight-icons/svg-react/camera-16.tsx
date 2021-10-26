import { forwardRef } from 'react'
import { IconProps } from './types'

export const IconCamera16 = forwardRef<SVGSVGElement, IconProps>(
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
          <path d="M3 6a1 1 0 011-1h.01a1 1 0 010 2H4a1 1 0 01-1-1z" />
          <path
            d="M8 5a3 3 0 100 6 3 3 0 000-6zM6.5 8a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path
            d="M5.056 1.696A1.25 1.25 0 016.176 1h3.648c.475 0 .91.27 1.12.696l.54 1.093 1.457.124A2.25 2.25 0 0115 5.155v6.595A2.25 2.25 0 0112.75 14h-9.5A2.25 2.25 0 011 11.75V5.155a2.25 2.25 0 012.059-2.242l1.456-.124.541-1.093zm1.276.804l-.66 1.333a.75.75 0 01-.608.414l-1.878.16a.75.75 0 00-.686.748v6.595c0 .414.336.75.75.75h9.5a.75.75 0 00.75-.75V5.155a.75.75 0 00-.686-.748l-1.878-.16a.75.75 0 01-.608-.414L9.668 2.5H6.332z"
            fillRule="evenodd"
            clipRule="evenodd"
          />
        </g>
      </svg>
    )
  }
)
