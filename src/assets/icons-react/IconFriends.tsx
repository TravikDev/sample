import { SVGProps } from "react"
export const IconFriends = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <path
      fill="#fff"
      fillRule="evenodd"
      d="M13.325 15.076c-.437-.05-.88-.076-1.325-.076-1.981 0-3.907.508-5.479 1.447-1.22.728-2.174 1.684-2.78 2.771-.275.494.055 1.072.607 1.187 3.509.732 7.096.954 10.652.669V21h-1a3 3 0 0 1-.675-5.924Z"
      clipRule="evenodd"
    />
    <path
      stroke="#fff"
      strokeLinecap="round"
      strokeWidth={2.5}
      d="M18 14v8M22 18h-8"
    />
    <circle cx={12} cy={8} r={5} fill="#fff" />
  </svg>
)
