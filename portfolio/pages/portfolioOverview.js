import Head from 'next/head'
import Profileoverviewcard from '../components/cards/profileoverviewcard'

function PortfolioOverViewpage() {
  return (
    <>
      <Head>
        <title>Portfolio Overview</title>
        <meta
          name='Portfolio Overview'
          content='initial-scale=1.0, width=device-width'
        />
      </Head>

      <div className='container mt-4'>
        <div className='row'>
          <Profileoverviewcard />
          <Profileoverviewcard />
          <Profileoverviewcard />
          <Profileoverviewcard />
          <Profileoverviewcard />
          <Profileoverviewcard />
          <Profileoverviewcard />
          <Profileoverviewcard />
          <Profileoverviewcard />
          <Profileoverviewcard />
          <Profileoverviewcard />
        </div>
      </div>
    </>
  )
}

export default PortfolioOverViewpage
