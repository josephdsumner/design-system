import { forwardRef, useMemo } from 'react';
import { IconProps } from './types';

export const IconService24 = forwardRef<SVGSVGElement, IconProps>(
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
                <g fill={color}>
                    <path d="M10.559 1.006a2.75 2.75 0 012.882 0l7.75 4.77A2.75 2.75 0 0122.5 8.116V9.5a.75.75 0 01-1.5 0V8.117a1.25 1.25 0 00-.595-1.064l-7.75-4.77a1.25 1.25 0 00-1.31 0l-7.75 4.77A1.25 1.25 0 003 8.117v7.765c0 .434.225.837.595 1.065l5.548 3.414a.75.75 0 01-.786 1.277l-5.548-3.414A2.75 2.75 0 011.5 15.882V8.117a2.75 2.75 0 011.309-2.342l7.75-4.769z" />
                    <path
                        fillRule="evenodd"
                        d="M17.5 11.15v-.372a1.25 1.25 0 00-2.5 0v.372a5.22 5.22 0 00-1.49.62l-.265-.265a1.25 1.25 0 10-1.768 1.768l.272.273a5.23 5.23 0 00-.606 1.482h-.393a1.25 1.25 0 000 2.5H11.157c.13.523.34 1.015.614 1.462a.807.807 0 00-.016.016l-.278.278a1.25 1.25 0 001.768 1.767l.278-.277.022-.024c.446.269.936.473 1.456.6l-.001.035v.393a1.25 1.25 0 102.5 0v-.392-.036a5.221 5.221 0 001.455-.6l.022.023.278.278a1.25 1.25 0 101.768-1.767l-.278-.278-.016-.016c.274-.447.483-.94.614-1.462H21.75a1.25 1.25 0 100-2.5h-.393a5.227 5.227 0 00-.606-1.482l.272-.273a1.25 1.25 0 00-1.768-1.768l-.265.266a5.22 5.22 0 00-1.49-.621zM16.25 13A3.246 3.246 0 0013 16.25a3.246 3.246 0 003.25 3.25 3.246 3.246 0 003.25-3.25A3.246 3.246 0 0016.25 13z"
                        clipRule="evenodd"
                    />
                </g>
            </svg>
        );
    }
);
