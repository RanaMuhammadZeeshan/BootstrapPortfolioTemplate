import Link from 'next/link'

function Navbar() {
  return (
    <nav className='navbar navbar-expand-lg navbar-light bg-light'>
      <div className='container'>
        <Link href={'/'}>
          <>
            <span className='navbar-brand'>
              <img
                className='rounded-circle align-middle me-2'
                src='/images/50x50.png'
                alt='profile picture'
              />
              <Link href={'/'}>
                <a className='navbar-brand'>Portfolio</a>
              </Link>
            </span>
            <button
              className='navbar-toggler'
              type='button'
              data-bs-toggle='collapse'
              data-bs-target='#navbar'
              aria-controls='navbar'
              aria-expanded='false'
              aria-label='Toggle Navigation'
            >
              <span className='navbar-toggler-icon'></span>
            </button>
            <div className='collapse navbar-collapse' id='navbar'>
              <ul className='navbar-nav ms-auto'>
                <li className='nav-item active' aria-current='page'>
                  <Link href={'/'}>
                    <a className='nav-link'>Home</a>
                  </Link>
                </li>
                <li className='nav-item'>
                  <Link href={'/portfolioOverview'}>
                    <a className='nav-link'>Portfolio</a>
                  </Link>
                </li>
              </ul>
            </div>
          </>
        </Link>
      </div>
    </nav>
  )
}

export default Navbar
