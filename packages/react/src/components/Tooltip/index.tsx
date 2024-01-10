import * as RadixTooltip from '@radix-ui/react-tooltip'
import { ComponentProps } from 'react'

import { Arrow, Content } from './styles'

export interface TooltipProps extends ComponentProps<typeof RadixTooltip.Root> {
  content: string
}

export function Tooltip({ children, content, ...props }: TooltipProps) {
  return (
    <RadixTooltip.Provider>
      <RadixTooltip.Root {...props}>
        <RadixTooltip.Trigger asChild>{children}</RadixTooltip.Trigger>

        <RadixTooltip.Portal>
          <Content sideOffset={5}>
            {content}
            <Arrow />
          </Content>
        </RadixTooltip.Portal>
      </RadixTooltip.Root>
    </RadixTooltip.Provider>
  )
}
