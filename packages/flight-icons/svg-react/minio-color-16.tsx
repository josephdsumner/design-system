import { forwardRef, useMemo } from 'react';
import { IconProps } from './types';

export const IconMinioColor16 = forwardRef<SVGSVGElement, IconProps>(
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
                <g fill="#C72C48">
                    <path d="M9.548 2.586l1.57 2.57a.03.03 0 010 .036.029.029 0 01-.02.009.028.028 0 01-.02-.01L9.041 3.07l.506-.484zM8.892 8.84v.778l-.737.375v-.774l.737-.38z" />
                    <path d="M6.078 9.507a6.99 6.99 0 012.077-2.571v1.497L6.078 9.507zM4.88 10.895L8.155 9.23v3.81l.737.959V8.841l.448-.231a2.221 2.221 0 00.61-3.515L8.266 3.333a.374.374 0 01.547-.51l.237.247.499-.486c-.598-.776-1.332-.677-1.753-.29a1.075 1.075 0 00-.046 1.518l1.704 1.776A1.521 1.521 0 019.12 7.93l-.231.12V5.643a7.71 7.71 0 00-4.01 5.243v.009z" />
                </g>
            </svg>
        );
    }
);
