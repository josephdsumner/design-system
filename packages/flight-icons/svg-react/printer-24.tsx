import { forwardRef } from 'react'
import { IconProps } from './types'

export const IconPrinter24 = forwardRef<SVGSVGElement, IconProps>(
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
        <path
          fill={color}
          d="M5 3.75V8H3.75A2.75 2.75 0 001 10.75v5.5A2.75 2.75 0 003.75 19H5v2.25c0 .966.784 1.75 1.75 1.75h10.5A1.75 1.75 0 0019 21.25V19h1.25A2.75 2.75 0 0023 16.25v-5.5A2.75 2.75 0 0020.25 8H19V3.75A2.75 2.75 0 0016.25 1h-8.5A2.75 2.75 0 005 3.75zM7.75 2.5c-.69 0-1.25.56-1.25 1.25V8h11V3.75c0-.69-.56-1.25-1.25-1.25h-8.5zM19 17.5h1.25c.69 0 1.25-.56 1.25-1.25v-5.5c0-.69-.56-1.25-1.25-1.25H3.75c-.69 0-1.25.56-1.25 1.25v5.5c0 .69.56 1.25 1.25 1.25H5v-2.75c0-.966.784-1.75 1.75-1.75h10.5c.966 0 1.75.784 1.75 1.75v2.75zM6.5 14.75a.25.25 0 01.25-.25h10.5a.25.25 0 01.25.25v6.5a.25.25 0 01-.25.25H6.75a.25.25 0 01-.25-.25v-6.5z"
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    )
  }
)
