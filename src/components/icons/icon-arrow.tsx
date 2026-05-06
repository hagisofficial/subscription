import { FC } from 'react'

import { IconProps } from '@/interfaces/ui'

const IconArrow: FC<IconProps> = ({ className }) => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    preserveAspectRatio="none"
    className={className}
  >
    <path
      d="M2 8H14"
      stroke="currentColor"
      strokeWidth="1.25"
      strokeLinejoin="round"
    />
    <path
      d="M10 4L14 8L10 12"
      stroke="currentColor"
      strokeWidth="1.25"
      strokeLinejoin="round"
    />
  </svg>
)

export default IconArrow
