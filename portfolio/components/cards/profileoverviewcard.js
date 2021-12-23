import Link from 'next/link'

function Profileoverviewcard() {
  return (
    <div className='col-12 col-md-6 col-xl-4 mb-4'>
      <div className='card'>
        <div className='badge bg-primary position-absolute mt-3 ms-3'>Tag</div>
        <img
          className='card-img-top'
          src='/images/510x400.png'
          alt='Portfolio Item Heading'
        />
        <div className='card-body'>
          <h3 className='card-title'>portfolio Item Heading</h3>
          <p className='card-text'>
            {' '}
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
            pulvinar purus vitae nisl semper, a ornare purus euismod. Quisque id
            dapibus ligula, vel finibus lectus. Aliquam neque diam, iaculis non
            arcu a, fringilla viverra libero. Mauris pharetra quis nulla eget
            fermentum.
          </p>
          <Link href={'/project'}>
            <a className='btn btn-primary w-100 stretched-link'>See Item</a>
          </Link>
        </div>

        <div className='card-footer small'>Created DD-MM-YYYY</div>
      </div>
    </div>
  )
}

export default Profileoverviewcard
