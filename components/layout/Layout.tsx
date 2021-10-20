import { Box } from 'rebass'

type Props = { children?: any }

const Layout = ({ children }: Props) => {
  return (
    <Box sx={{
      minHeight: '100vh',
      backgroundImage: 'url("/images/bg.png")',
      backgroundSize: 'cover',
    }}>
      <Box sx={{
        backgroundColor: '#fff',
        minHeight: '100vh',
        maxWidth: 768,
        mx: 'auto',
        px: 3,
      }}>
        {children}
      </Box>
    </Box>
  )
}

export default Layout
