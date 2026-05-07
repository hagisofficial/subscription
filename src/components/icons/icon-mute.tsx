
import { FC } from 'react'

import { IconProps } from '@/interfaces/ui'

const IconMute: FC<IconProps> = ({ className }) => (
<svg xmlns="http://www.w3.org/2000/svg" width="18" height="16" viewBox="0 0 18 16" fill="none" className={className}>
    <line x1="2.75" y1="4.87305" x2="2.75" y2="7.87305" stroke="#F5F5F0" strokeWidth="1.5"/>
    <line x1="2.75" y1="10.373" x2="2.75" y2="12.373" stroke="#F5F5F0" strokeWidth="1.5"/>
    <line x1="8.75" y1="1.37305" x2="8.75" y2="8.37305" stroke="#F5F5F0" strokeWidth="1.5"/>
    <line y1="7.62305" x2="18" y2="7.62305" stroke="#F5F5F0" strokeWidth="1.5"/>
    <line x1="8.75" y1="10.373" x2="8.75" y2="15.373" stroke="#F5F5F0" strokeWidth="1.5"/>
    <line x1="14.75" y1="4.87305" x2="14.75" y2="7.87305" stroke="#F5F5F0" strokeWidth="1.5"/>
    <line x1="14.75" y1="10.373" x2="14.75" y2="12.373" stroke="#F5F5F0" strokeWidth="1.5"/>
</svg>
)

export default IconMute
