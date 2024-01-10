import * as RadixToast from '@radix-ui/react-toast'
import { X } from 'phosphor-react'
import { ComponentProps } from 'react'
import {
  CloseButton,
  Description,
  Title,
  ToastContainer,
  ToastViewport,
} from './styles'

export interface ToastProps extends ComponentProps<typeof ToastContainer> {
  title: string
  description?: string
  open: boolean
}

export function Toast({
  title,
  description = undefined,
  open,
  ...props
}: ToastProps) {
  return (
    <RadixToast.Provider swipeDirection="right">
      <ToastContainer open={open} {...props}>
        <Title as="h2">{title}</Title>

        <Description as="span">{description}</Description>

        <CloseButton asChild>
          <X size={20} />
        </CloseButton>
      </ToastContainer>

      <ToastViewport />
    </RadixToast.Provider>
  )
}
