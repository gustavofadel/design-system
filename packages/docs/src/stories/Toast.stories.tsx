import { Toast, ToastProps } from '@fadel-ui/react'
import type { Meta, StoryObj } from '@storybook/react'

export default {
  title: 'Data Display/Toast',
  component: Toast,
  args: {
    title: 'Agendamento realizado',
    description: 'Quarta-feira, 23 de Outubro às 16h',
    open: true,
  },
  argTypes: {
    open: {
      control: {
        type: 'boolean',
      },
    },
  },
} as Meta<ToastProps>

export const Primary: StoryObj<ToastProps> = {}
