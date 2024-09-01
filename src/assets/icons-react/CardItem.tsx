import * as React from "react"
import { SVGProps } from "react"
const CardItem = (props: SVGProps<SVGSVGElement>) => (
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
        d="M4 12C4 5.373 9.373 0 16 0h343.309c6.891 0 12.367 5.79 11.981 12.671L368.106 69.5l-3.26 58.171A12 12 0 0 1 352.865 139H16c-6.627 0-12-5.373-12-12V12Z"
      />
      <path
        stroke="url(#b)"
        d="M16 .5h343.309c6.604 0 11.851 5.55 11.482 12.143l-3.184 56.829-3.26 58.171a11.5 11.5 0 0 1-11.482 10.857H16c-6.351 0-11.5-5.149-11.5-11.5V12C4.5 5.649 9.649.5 16 .5Z"
      />
    </g>
    <defs>
      <linearGradient
        id="b"
        x1={188}
        x2={188}
        y1={0}
        y2={139}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#65508A" />
        <stop offset={1} stopColor="#06353C" />
      </linearGradient>
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
        <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
        <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_31_4214" />
        <feBlend
          in="SourceGraphic"
          in2="effect1_dropShadow_31_4214"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
)
export default CardItem
