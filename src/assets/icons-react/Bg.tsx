import { SVGProps } from "react"
const Bg = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={1214}
    height={1273}
    fill="none"
    {...props}
  >
    <g filter="url(#a)">
      <ellipse cx={390} cy={718.5} fill="#0C452E" rx={140} ry={141.5} />
      <ellipse
        cx={482}
        cy={411}
        fill="#464163"
        fillOpacity={0.8}
        rx={176}
        ry={161}
      />
      <ellipse cx={794} cy={561.5} fill="#0C3E45" rx={170} ry={170.5} />
      <ellipse
        cx={760.5}
        cy={847}
        fill="#341632"
        fillOpacity={0.5}
        rx={186.5}
        ry={176}
      />
    </g>
    <defs>
      <filter
        id="a"
        width={1214}
        height={1273}
        x={0}
        y={0}
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
        <feGaussianBlur
          result="effect1_foregroundBlur_30_1626"
          stdDeviation={125}
        />
      </filter>
    </defs>
  </svg>
)
export default Bg
