function Testimonial({ testimonialText }) {
  return (
    <figure>
      <blockquote className='blockquote'>
        <p> {testimonialText}</p>
      </blockquote>
      <figcaption className='blockquote-footer'>Firstbane Lastname</figcaption>
    </figure>
  )
}

export default Testimonial
