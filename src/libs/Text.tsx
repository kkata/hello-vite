import { VFC } from 'react'

type Props = {
  text: string
  className?: string
}

export const Text: VFC<Props> = ({ text, className = '' }) => {
  return <p className={className}>{text}</p>
}
