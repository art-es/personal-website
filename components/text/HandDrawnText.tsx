import { Text } from 'rebass'

type Props = { children?: any, sx?: any, className?: any }

const HandDrawnText = ({ children, sx, className }: Props) => {
  return <Text className={'hand-drawn ' + className} sx={sx}>{children}</Text>
}

export default HandDrawnText
