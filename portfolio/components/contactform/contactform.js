function Contactform() {
  return (
    <form className='mb-4'>
      <div className='row'>
        <div className='col-12 col-md-6'>
          <div className='mb-3'>
            <label htmlFor='name' className='form-label'>
              Name
            </label>
            <input
              id='name'
              type='text'
              className='form-control'
              placeholder='Enter Your Name'
            />
          </div>
          <div className='mb-3'>
            <label htmlFor='email' className='form-label'>
              Email
            </label>
            <input
              id='email'
              type='email'
              className='form-control'
              placeholder='Enter Your Email'
            />
          </div>
        </div>

        <div className='col-12 col-md-6'>
          <div className='mb-3'>
            <label htmlFor='message' className='form-label'>
              Message
            </label>
            <textarea
              id='message'
              className='form-control'
              rows='4'
              placeholder='Enter Your Message'
            />
          </div>
        </div>
      </div>

      <button type='submit' className='btn btn-primary'>
        Send Message
      </button>
    </form>
  )
}

export default Contactform
