import { SVGProps } from "react"
export const IconCard = (props: SVGProps<SVGSVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={376}
        height={147}
        fill="none"
        {...props}
    >
        <g filter="url(#a)">
            <path
                fill="#031E2B"
                d="M4 12C4 5.373 9.373 0 16 0h343.309c6.891 0 12.367 5.79 11.981 12.671l-6.444 115A12 12 0 0 1 352.865 139H16c-6.627 0-12-5.373-12-12V12Z"
            />
            <path
                stroke="#09222D"
                d="M4.5 12C4.5 5.649 9.649.5 16 .5h343.309c6.604 0 11.851 5.55 11.482 12.143l-6.444 115a11.5 11.5 0 0 1-11.482 10.857H16c-6.351 0-11.5-5.149-11.5-11.5V12Z"
            />
        </g>
        <defs>
            <filter
                id="a"
                width={375.309}
                height={147}
                x={0}
                y={0}
                colorInterpolationFilters="sRGB"
                filterUnits="userSpaceOnUse"
            >
                <feFlood floodOpacity={0} result="BackgroundImageFix" />
                <feColorMatrix
                    in="SourceAlpha"
                    result="hardAlpha"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                />
                <feOffset dy={4} />
                <feGaussianBlur stdDeviation={2} />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
                <feBlend
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_6066_1100"
                />
                <feBlend
                    in="SourceGraphic"
                    in2="effect1_dropShadow_6066_1100"
                    result="shape"
                />
            </filter>
        </defs>
    </svg>
)