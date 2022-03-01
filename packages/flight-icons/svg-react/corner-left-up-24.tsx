import { forwardRef, useMemo } from 'react';
import { IconProps } from './types';

export const IconCornerLeftUp24 = forwardRef<SVGSVGElement, IconProps>(
    ({ color = 'currentColor', title, ...props }, svgRef) => {
        const titleId = useMemo(
            () =>
                title
                    ? 'title-' + Math.random().toString(36).substr(2, 9)
                    : undefined,
            [title]
        );
        return (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                fill="none"
                viewBox="0 0 24 24"
                aria-hidden={!title}
                ref={svgRef}
                aria-labelledby={titleId}
                {...props}
            >
                {title ? <title id={titleId}>{title}</title> : null}
                <path
                    fill={color}
                    d="M13.957 9.768a.75.75 0 001.085-1.036l-5.25-5.5a.75.75 0 00-1.085 0l-5.25 5.5a.75.75 0 001.086 1.036L8.5 5.622V16.5c0 1.312.49 2.578 1.375 3.52.887.942 2.1 1.48 3.375 1.48h7a.75.75 0 000-1.5h-7a3.135 3.135 0 01-2.282-1.009A3.639 3.639 0 0110 16.5V5.622l3.957 4.146z"
                />
            </svg>
        );
    }
);
