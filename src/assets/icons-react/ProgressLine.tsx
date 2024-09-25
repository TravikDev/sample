import { SVGProps } from "react"
export const ProgressLine = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={113}
    height={12}
    fill="none"
    {...props}
  >
    <rect width={113} height={12} fill="url(#a)" rx={6} />
    <defs>
      <linearGradient
        id="a"
        x1={0}
        x2={113}
        y1={6}
        y2={6}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#336C5C" />
        <stop offset={0.5} stopColor="#3FA877" />
        <stop offset={1} stopColor="#CDFE64" />
      </linearGradient>
    </defs>
  </svg>
)
