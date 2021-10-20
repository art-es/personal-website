import type { NextPage } from 'next'
import Head from 'next/head'
import { Flex, Box } from 'rebass'
import HandDrawnText from '../components/text/HandDrawnText'

const Introduction = () => (
  <Box sx={{ marginTop: '20px' }}>
    <HandDrawnText>
      <p>
        {"Hello, everyone! I'm "}
        <a href="https://github.com/art-es/" target="_blank" rel="noreferrer">{"art-es"}</a>
        {/* {" (*′☉.̫☉)"} */}
      </p>
      <p>{"Sorry for that strange design, I'm just a backend developer who wants to make his personal website..."}</p>
      <p></p>
      <p>{"Thank you for reading! ৲( ᵒ ૩ᵕ )৴♡*৹"}</p>
    </HandDrawnText>
  </Box>
)

const PetProjects = () => (
  <Box sx={{ marginTop: '20px' }}>
    <h1 className="monospaced" style={{ textAlign: 'center' }}>
      Pet Projects
      <span className="helper" style={{ fontSize: '0.5em' }}> (?)</span>
    </h1>
    <HandDrawnText sx={{ color: '#495057' }}>Coming soon or not so soon... </HandDrawnText>
  </Box>
)

const Website: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Personal Website | Homepage</title>
        <meta name="description" content="Homepage" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Flex sx={{ maxWidth: '75%', mx: 'auto', px: 3 }}>
        <div style={{ display: 'grid' }}>
          <Introduction />
          <PetProjects />
        </div>
      </Flex>
    </div>
  )
}

export default Website
