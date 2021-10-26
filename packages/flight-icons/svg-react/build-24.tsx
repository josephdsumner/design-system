import { forwardRef } from 'react'
import { IconProps } from './types'

export const IconBuild24 = forwardRef<SVGSVGElement, IconProps>(
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
          d="M14.05 2.5a7.45 7.45 0 00-6.625 10.86 1.284 1.284 0 01-.29 1.556l-4.92 3.894a.75.75 0 01-.93-1.176l4.727-3.743a8.95 8.95 0 019.013-12.839c1.1.12 1.369 1.403.703 2.068L12.75 6.1v3.016l2.135 2.134H17.9l2.979-2.978c.665-.666 1.948-.396 2.067.703a8.95 8.95 0 01-12.704 9.078l-3.677 4.663a.75.75 0 01-1.178-.93l3.827-4.851a.763.763 0 01.059-.066 1.284 1.284 0 011.478-.236 7.45 7.45 0 0010.746-6.859l-2.606 2.607c-.237.236-.558.37-.893.37h-3.212c-.335 0-.657-.133-.893-.37l-2.274-2.274a1.262 1.262 0 01-.37-.893V6c0-.335.133-.656.37-.892l2.605-2.606a7.62 7.62 0 00-.175-.002z"
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    )
  }
)
