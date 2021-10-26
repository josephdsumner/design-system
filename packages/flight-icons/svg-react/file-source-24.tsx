import { forwardRef } from 'react'
import { IconProps } from './types'

export const IconFileSource24 = forwardRef<SVGSVGElement, IconProps>(
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
          <path d="M13.15 12.3a.75.75 0 011.05-.15l3 2.25a.75.75 0 010 1.2l-3 2.25a.75.75 0 11-.9-1.2L15.5 15l-2.2-1.65a.75.75 0 01-.15-1.05zM10.7 13.35a.75.75 0 10-.9-1.2l-3 2.25a.75.75 0 000 1.2l3 2.25a.75.75 0 10.9-1.2L8.5 15l2.2-1.65z" />
          <path
            d="M5.75 1A2.75 2.75 0 003 3.75v16.5A2.75 2.75 0 005.75 23h12.5A2.75 2.75 0 0021 20.25V8.664c0-.464-.184-.909-.513-1.237l-5.914-5.914A1.75 1.75 0 0013.336 1H5.75zM4.5 3.75c0-.69.56-1.25 1.25-1.25H13v5.75c0 .414.336.75.75.75h5.75v11.25c0 .69-.56 1.25-1.25 1.25H5.75c-.69 0-1.25-.56-1.25-1.25V3.75zM18.44 7.5L14.5 3.56V7.5h3.94z"
            fillRule="evenodd"
            clipRule="evenodd"
          />
        </g>
      </svg>
    )
  }
)
