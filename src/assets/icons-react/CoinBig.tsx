import { SVGProps } from "react"
const IconCoinBig = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={43}
    height={44}
    fill="none"
    {...props}
  >
    <circle cx={18} cy={24} r={18} fill="#F9E160" />
    <g filter="url(#a)">
      <circle cx={18} cy={24} r={14.949} fill="#FE881C" fillOpacity={0.72} />
    </g>
    <g filter="url(#b)">
      <path
        stroke="#FFEA7C"
        strokeWidth={2.571}
        d="M17.571 16.286 9.428 27.858h16.286l-8.143-11.572Z"
        shapeRendering="crispEdges"
      />
    </g>
    <g
      filter="url(#c)"
      style={{
        mixBlendMode: "overlay",
      }}
    >
      <circle cx={18.305} cy={18.814} r={9.763} fill="#fff" />
    </g>
    <defs>
      <filter
        id="a"
        width={29.898}
        height={30.509}
        x={3.051}
        y={9.051}
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
          radius={0.61}
          result="effect1_innerShadow_4062_817"
        />
        <feOffset dy={0.61} />
        <feComposite in2="hardAlpha" k2={-1} k3={1} operator="arithmetic" />
        <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
        <feBlend in2="shape" result="effect1_innerShadow_4062_817" />
      </filter>
      <filter
        id="b"
        width={21.239}
        height={15.692}
        x={6.952}
        y={14.052}
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          result="hardAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        />
        <feOffset dy={0.6} />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
        <feBlend
          in2="BackgroundImageFix"
          result="effect1_dropShadow_4062_817"
        />
        <feBlend
          in="SourceGraphic"
          in2="effect1_dropShadow_4062_817"
          result="shape"
        />
      </filter>
      <filter
        id="c"
        width={48.813}
        height={48.813}
        x={-6.102}
        y={-5.593}
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
        <feGaussianBlur
          result="effect1_foregroundBlur_4062_817"
          stdDeviation={7.322}
        />
      </filter>
    </defs>
  </svg>
)
export default IconCoinBig
