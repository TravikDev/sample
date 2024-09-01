import { SVGProps } from "react"
const IconCoin = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.width}
    height={props.height}
    fill="none"
    {...props}
  >
    <circle cx={10} cy={12} r={7} fill="#F9E160" />
    <g filter="url(#a)">
      <circle cx={10} cy={12} r={5.814} fill="#FE881C" fillOpacity={0.72} />
    </g>
    <g filter="url(#b)">
      <path
        stroke="#FFEA7C"
        d="m9.833 9-3.166 4.5H13L9.833 9Z"
        shapeRendering="crispEdges"
      />
    </g>
    <g
      filter="url(#c)"
      style={{
        mixBlendMode: "overlay",
      }}
    >
      <circle cx={10.119} cy={9.983} r={3.797} fill="#fff" />
    </g>
    <defs>
      <filter
        id="a"
        width={11.627}
        height={11.864}
        x={4.187}
        y={6.187}
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
          radius={0.237}
          result="effect1_innerShadow_4050_385"
        />
        <feOffset dy={0.237} />
        <feComposite in2="hardAlpha" k2={-1} k3={1} operator="arithmetic" />
        <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
        <feBlend in2="shape" result="effect1_innerShadow_4050_385" />
      </filter>
      <filter
        id="b"
        width={8.26}
        height={6.102}
        x={5.704}
        y={8.131}
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          result="hardAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        />
        <feOffset dy={0.233} />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
        <feBlend
          in2="BackgroundImageFix"
          result="effect1_dropShadow_4050_385"
        />
        <feBlend
          in="SourceGraphic"
          in2="effect1_dropShadow_4050_385"
          result="shape"
        />
      </filter>
      <filter
        id="c"
        width={18.983}
        height={18.983}
        x={0.627}
        y={0.492}
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
        <feGaussianBlur
          result="effect1_foregroundBlur_4050_385"
          stdDeviation={2.847}
        />
      </filter>
    </defs>
  </svg>
)
export default IconCoin
