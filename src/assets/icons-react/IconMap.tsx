import { SVGProps } from "react"
export const IconMap = (props: SVGProps<SVGSVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={24}
        height={24}
        fill="none"
        {...props}
    >
        <rect
            width={4}
            height={4}
            x={6}
            y={18}
            fill="#fff"
            stroke="#fff"
            strokeWidth={2}
            rx={2}
            transform="rotate(90 6 18)"
        />
        <rect
            width={4}
            height={4}
            x={18}
            y={9}
            stroke="#fff"
            strokeWidth={2}
            rx={2}
            transform="rotate(-90 18 9)"
        />
        <rect
            width={4}
            height={4}
            x={7}
            y={13}
            fill="#fff"
            stroke="#fff"
            strokeWidth={2}
            rx={2}
            transform="rotate(-90 7 13)"
        />
        <path
            stroke="#fff"
            strokeWidth={2}
            d="m19 8.5-1.66 2.845c-.816 1.4-1.225 2.1-1.89 2.35a2 2 0 0 1-.327.092c-.698.134-1.412-.25-2.839-1.019-1.455-.783-2.182-1.175-2.89-1.032a1.999 1.999 0 0 0-.329.097c-.673.261-1.074.983-1.876 2.428L4 20"
        />
    </svg>
)