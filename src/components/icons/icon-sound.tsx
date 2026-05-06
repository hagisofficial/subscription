import { FC } from 'react'

import { IconProps } from '@/interfaces/ui'

const IconSound: FC<IconProps> = ({ className }) => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 14 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    preserveAspectRatio="none"
    className={className}
  >
    <path
      d="M0.75 3.5L0.75 10.5M6.75 0L6.75 14M12.75 3.5V10.5"
      stroke="currentColor"
      strokeWidth="1.5"
    />
  </svg>
)

export default IconSound
