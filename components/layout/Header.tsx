import { Flex } from 'rebass'
import Image from 'next/image'

const Header = () => {
  return (
    <Flex sx={{ justifyContent: 'center', alignItems: 'center' }}>
      <Image src="/images/bear.svg" alt="logo" width={120} height={120} />
    </Flex>
  )
}

export default Header
