import Link from 'next/link'
import CarouselInner from './carouselinner'

function Carousel() {
  return (
    <div id='carousel' className='carousel slide' data-bs-ride='carousel'>
      <ol className='carousel-indicators'>
        <li
          data-bs-target='carousel'
          data-bs-slide-to='0'
          className='active'
        ></li>
        <li data-bs-target='carousel' data-bs-slide-to='1'></li>
        <li data-bs-target='carousel' data-bs-slide-to='2'></li>
        <li data-bs-target='carousel' data-bs-slide-to='3'></li>
        <li data-bs-target='carousel' data-bs-slide-to='4'></li>
      </ol>
      <div className='carousel-inner'>
        <div className='carousel-item active'>
          <CarouselInner
            imgPath='/images/930x700.png'
            caption='Caption'
            captionDescription='This text describes the slide'
          />
        </div>
        <div className='carousel-item'>
          <CarouselInner
            imgPath='/images/930x700.png'
            caption='Caption'
            captionDescription='This text describes the slide'
          />
        </div>
        <div className='carousel-item'>
          <CarouselInner
            imgPath='/images/930x700.png'
            caption='Caption'
            captionDescription='This text describes the slide'
          />
        </div>
        <div className='carousel-item'>
          <CarouselInner
            imgPath='/images/930x700.png'
            caption='Caption'
            captionDescription='This text describes the slide'
          />
        </div>
        <div className='carousel-item'>
          <CarouselInner
            imgPath='/images/930x700.png'
            caption='Caption'
            captionDescription='This text describes the slide'
          />
        </div>
      </div>

      <Link href={'#carousel'}>
        <a className='carousel-control-prev' role='button' data-bs-slide='prev'>
          <span
            className='carousel-control-prev-icon'
            aria-hidden='true'
          ></span>
          <span className='visually-hidden'>Previous</span>
        </a>
      </Link>

      <Link href={'#carousel'}>
        <a className='carousel-control-next' role='button' data-bs-slide='next'>
          <span
            className='carousel-control-next-icon'
            aria-hidden='true'
          ></span>
          <span className='visually-hidden'>Next</span>
        </a>
      </Link>
    </div>
  )
}

export default Carousel
