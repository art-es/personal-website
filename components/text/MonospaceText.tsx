import { Text } from 'rebass'

type Props = { children?: any, sx?: any }

const MonospacedText = ({ children, sx }: Props) => {
  return <Text className="monospaced" sx={sx}>{children}</Text>
}

export default MonospacedText
