import * as React from "react"
import { SVGProps } from "react"
export const EnergyIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={64}
    height={64}
    fill="none"
    {...props}
  >
    <g filter="url(#a)">
      <circle cx={15} cy={14} r={11.5} fill="url(#b)" stroke="url(#c)" />
      <circle
        cx={15}
        cy={14}
        r={9.75}
        fill="url(#d)"
        stroke="url(#e)"
        strokeWidth={0.5}
      />
      <path
        fill="#288F44"
        d="m14.023 15.423-.912-.29c-1.343-.426-2.014-.64-2.155-1.169-.142-.529.334-1.048 1.285-2.087l3.726-4.072c.602-.657.902-.986 1.076-.885.174.1.04.525-.23 1.374L15.65 11.95c-.071.225-.107.337-.059.429.048.092.16.127.384.199l.913.29c1.343.426 2.014.64 2.155 1.168.142.53-.334 1.05-1.285 2.088l-3.726 4.072c-.602.657-.902.986-1.076.885-.174-.1-.04-.525.23-1.374l1.162-3.656c.07-.225.107-.337.059-.429-.048-.092-.16-.127-.385-.199Z"
      />
    </g>
    <defs>
      <linearGradient
        id="b"
        x1={15}
        x2={15}
        y1={2}
        y2={26}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#B9EB64" />
        <stop offset={1} stopColor="#94D55B" />
      </linearGradient>
      <linearGradient
        id="c"
        x1={15}
        x2={15}
        y1={2}
        y2={26}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#D1FF77" />
        <stop offset={1} stopColor="#548B43" />
      </linearGradient>
      <linearGradient
        id="d"
        x1={15}
        x2={15}
        y1={4}
        y2={24}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#C0F665" />
        <stop offset={1} stopColor="#A3E469" />
      </linearGradient>
      <linearGradient
        id="e"
        x1={15}
        x2={15}
        y1={4}
        y2={24}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#D1FF86" />
        <stop offset={1} stopColor="#6EA34E" />
      </linearGradient>
      <filter
        id="a"
        width={32}
        height={32}
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
        <feOffset dx={1} dy={2} />
        <feGaussianBlur stdDeviation={2} />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix values="0 0 0 0 0.0392157 0 0 0 0 0.117647 0 0 0 0 0.145098 0 0 0 0.8 0" />
        <feBlend
          in2="BackgroundImageFix"
          result="effect1_dropShadow_4005_2070"
        />
        <feBlend
          in="SourceGraphic"
          in2="effect1_dropShadow_4005_2070"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
)
