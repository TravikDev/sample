import * as React from "react"
import { SVGProps } from "react"
const DividerSvg = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={368}
    height={1}
    fill="none"
    {...props}
  >
    <path stroke="#fff" d="M0 .5h368" opacity={0.1} />
  </svg>
)
export default DividerSvg
