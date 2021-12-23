import Link from 'next/link'
import ImageComponent from '../image/image'

function Featuredprojects({ linkPath, srcPath }) {
  return (
    <>
      <Link href={linkPath}>
        <a>
          <figure className='figure'>
            <ImageComponent
              styleClasses='img-fluid figure-img img-thumbnail'
              altInfo='Portfolio item heading'
              srcPath={srcPath}
            />
            <figcaption className='figure-caption'>
              Portfolio item heading
            </figcaption>
          </figure>
        </a>
      </Link>
    </>
  )
}

export default Featuredprojects
