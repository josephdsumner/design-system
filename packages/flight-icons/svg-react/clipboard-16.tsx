import { forwardRef, useMemo } from 'react';
import { IconProps } from './types';

export const IconClipboard16 = forwardRef<SVGSVGElement, IconProps>(
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
                width={16}
                height={16}
                fill="none"
                viewBox="0 0 16 16"
                aria-hidden={!title}
                ref={svgRef}
                aria-labelledby={titleId}
                {...props}
            >
                {title ? <title id={titleId}>{title}</title> : null}
                <path
                    fill={color}
                    fillRule="evenodd"
                    d="M11.975 1h.775A2.25 2.25 0 0115 3.25v10.5A2.25 2.25 0 0112.75 16h-9.5A2.25 2.25 0 011 13.75V3.25A2.25 2.25 0 013.25 1h.775c.116-.57.62-1 1.225-1h5.5c.605 0 1.11.43 1.225 1zM4 2.5h-.75a.75.75 0 00-.75.75v10.5c0 .414.336.75.75.75h9.5a.75.75 0 00.75-.75V3.25a.75.75 0 00-.75-.75H12v.25C12 3.44 11.44 4 10.75 4h-5.5C4.56 4 4 3.44 4 2.75V2.5zm1.5 0v-1h5v1h-5z"
                    clipRule="evenodd"
                />
            </svg>
        );
    }
);
