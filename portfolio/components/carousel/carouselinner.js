function CarouselInner({ imgPath, caption, captionDescription }) {
  return (
    <>
      <img src={imgPath} alt='slide image' className='d-block w-100' />
      <div className='carousel-caption'>
        <h3>{caption}</h3>
        <p>{captionDescription} </p>
      </div>
    </>
  )
}

export default CarouselInner
