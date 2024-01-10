import { Button, Tooltip, TooltipProps } from '@fadel-ui/react'
import type { Meta, StoryObj } from '@storybook/react'

export default {
  title: 'Data Display/Tooltip',
  component: Tooltip,
  args: {
    content: '21 de Outubro - Indisponível',
    children: <Button variant="primary">Selecionar dia</Button>,
  },
  argTypes: {
    children: {
      table: {
        disable: true,
      },
    },
    delayDuration: {
      control: {
        type: 'number',
      },
    },
  },
} as Meta<TooltipProps>

export const Primary: StoryObj<TooltipProps> = {}
