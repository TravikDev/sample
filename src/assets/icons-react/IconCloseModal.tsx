import { SVGProps } from "react"
export const IconCloseModal = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <circle cx={12} cy={12} r={10} fill="#7E869E" fillOpacity={0.25} />
    <path
      stroke="url(#a)"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m16.444 7.556-8.888 8.889"
    />
    <path
      stroke="url(#b)"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m7.556 7.556 8.889 8.889"
    />
    <defs>
      <linearGradient
        id="a"
        x1={12}
        x2={12}
        y1={16.445}
        y2={7.556}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#031B22" />
        <stop offset={1} stopColor="#001315" />
      </linearGradient>
      <linearGradient
        id="b"
        x1={12}
        x2={12}
        y1={16.445}
        y2={7.556}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#031B22" />
        <stop offset={1} stopColor="#001315" />
      </linearGradient>
    </defs>
  </svg>
)