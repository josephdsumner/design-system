import { forwardRef, useMemo } from 'react';
import { IconProps } from './types';

export const IconVagrantFill24 = forwardRef<SVGSVGElement, IconProps>(
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
                    fillRule="evenodd"
                    d="M2 0a2 2 0 00-2 2v20a2 2 0 002 2h20a2 2 0 002-2V2a2 2 0 00-2-2H2zm7.667 5.559H5v3.4l4.667 9.482h4.666L9.667 8.96V5.559zm4.666 0v3.4l-1.937 3.933 2.335 4.739L19 8.96V5.559h-4.667z"
                    clipRule="evenodd"
                />
            </svg>
        );
    }
);
