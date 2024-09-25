import { SVGProps } from "react"
export const IconFriendUser = (props: SVGProps<SVGSVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={16}
        height={17}
        fill="none"
        {...props}
    >
        <path
            stroke="#838D90"
            strokeLinecap="round"
            strokeWidth={1.5}
            d="M13.152 14.132c-.304-.85-.974-1.602-1.905-2.138-.932-.537-2.073-.827-3.247-.827s-2.315.29-3.247.827c-.931.536-1.6 1.287-1.905 2.138"
        />
        <circle
            cx={8}
            cy={5.834}
            r={2.667}
            stroke="#838D90"
            strokeLinecap="round"
            strokeWidth={1.5}
        />
    </svg>
)