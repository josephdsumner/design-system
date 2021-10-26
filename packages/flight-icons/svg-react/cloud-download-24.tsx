import { forwardRef } from 'react'
import { IconProps } from './types'

export const IconCloudDownload24 = forwardRef<SVGSVGElement, IconProps>(
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
          <path d="M12.178 1.615a8.87 8.87 0 00-8.103.832 8.971 8.971 0 00-2.883 3.06 9.05 9.05 0 00-.404 8.189 8.99 8.99 0 002.566 3.333.75.75 0 10.94-1.168 7.49 7.49 0 01-2.137-2.777 7.56 7.56 0 01.338-6.832 7.472 7.472 0 012.4-2.549 7.37 7.37 0 016.734-.692 7.431 7.431 0 012.859 2.008 7.521 7.521 0 011.64 3.104.75.75 0 00.726.564h1.288c1 .001 1.97.35 2.746.987a4.413 4.413 0 011.52 2.518 4.444 4.444 0 01-.394 2.923c-.46.9-1.212 1.61-2.13 2.016a.75.75 0 00.607 1.372 5.882 5.882 0 002.858-2.705 5.945 5.945 0 00.527-3.91 5.914 5.914 0 00-2.036-3.374 5.84 5.84 0 00-3.698-1.327h-.726a9.017 9.017 0 00-1.802-3.159 8.932 8.932 0 00-3.436-2.413z" />
          <path d="M12 22h.012a.747.747 0 00.533-.235l4.25-4.5a.75.75 0 00-1.09-1.03l-2.955 3.129V12.75a.75.75 0 00-1.5 0v6.614l-2.955-3.129a.75.75 0 00-1.09 1.03l4.248 4.498a.748.748 0 00.535.237H12z" />
        </g>
      </svg>
    )
  }
)
