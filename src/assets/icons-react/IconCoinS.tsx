import { SVGProps } from "react"
export const IconCoinS = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={18}
    height={17}
    fill="none"
    {...props}
  >
    <circle cx={9} cy={10.5} r={6} fill="#F9E160" />
    <g filter="url(#a)">
      <circle cx={9} cy={10.5} r={4.983} fill="#FE881C" fillOpacity={0.72} />
    </g>
    <g filter="url(#b)">
      <path
        stroke="#FFEA7C"
        strokeWidth={0.857}
        d="m8.857 7.929-2.714 3.857h5.428L8.857 7.929Z"
        shapeRendering="crispEdges"
      />
    </g>
    <g
      filter="url(#c)"
      style={{
        mixBlendMode: "overlay",
      }}
    >
      <circle cx={9.102} cy={8.771} r={3.254} fill="#fff" />
    </g>
    <defs>
      <filter
        id="a"
        width={9.966}
        height={10.169}
        x={4.017}
        y={5.517}
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
        <feColorMatrix
          in="SourceAlpha"
          result="hardAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        />
        <feMorphology
          in="SourceAlpha"
          radius={0.203}
          result="effect1_innerShadow_6066_403"
        />
        <feOffset dy={0.203} />
        <feComposite in2="hardAlpha" k2={-1} k3={1} operator="arithmetic" />
        <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
        <feBlend in2="shape" result="effect1_innerShadow_6066_403" />
      </filter>
      <filter
        id="b"
        width={7.08}
        height={5.231}
        x={5.317}
        y={7.184}
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          result="hardAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        />
        <feOffset dy={0.2} />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
        <feBlend
          in2="BackgroundImageFix"
          result="effect1_dropShadow_6066_403"
        />
        <feBlend
          in="SourceGraphic"
          in2="effect1_dropShadow_6066_403"
          result="shape"
        />
      </filter>
      <filter
        id="c"
        width={16.271}
        height={16.271}
        x={0.966}
        y={0.635}
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
        <feGaussianBlur
          result="effect1_foregroundBlur_6066_403"
          stdDeviation={2.441}
        />
      </filter>
    </defs>
  </svg>
)