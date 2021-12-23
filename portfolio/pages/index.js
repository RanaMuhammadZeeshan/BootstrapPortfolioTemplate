import Head from 'next/head'
import Contactform from '../components/contactform/contactform'
import Featuredprojects from '../components/featuredprojects/featuredprojects'
import ImageComponent from '../components/image/image'
import Testimonial from '../components/testimonial/testimonial'

export default function Home() {
  return (
    <>
      <Head>
        <title>Portfolio Home</title>
        <meta
          name='Portfolio Home'
          content='initial-scale=1.0, width=device-width'
        />
      </Head>

      <div className='container mt-4'>
        <h2 className='display-4 mb-4'>
          Firstname Lastname
          <small className='d-block text-mutated'>Job Position</small>
        </h2>

        <div className='row mb-4'>
          <div className='col-12 col-lg-6 mb-4 mb-lg-0'>
            <ImageComponent
              styleClasses='img-fluid rounded'
              altInfo='Personal Image'
              srcPath='/images/690x400.png'
            />
          </div>
          <div className='col-12 col-lg-6 '>
            <h3>About</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
              pulvinar purus vitae nisl semper, a ornare purus euismod. Quisque
              id dapibus ligula, vel finibus lectus. Aliquam neque diam, iaculis
              non arcu a, fringilla viverra libero. Mauris pharetra quis nulla
              eget fermentum. In nec dapibus nisl, sit amet convallis nisl. Duis
              non urna et dui scelerisque volutpat vel sit amet lectus. Praesent
              vel malesuada erat. Nulla eu accumsan tellus.
            </p>
            <p>
              Sed vehicula, urna non cursus cursus, arcu urna eleifend erat,
              eget egestas nulla mauris et elit. Mauris et augue sed odio
              tristique blandit. Ut consequat, massa id interdum convallis, nisi
              nisi rhoncus erat, blandit laoreet mauris ipsum interdum felis.
              Aenean tincidunt lacus lectus, sed dapibus diam ultricies sed.
              Mauris auctor tempor elit, blandit efficitur orci. Duis quam
              lacus, commodo at odio sit amet, maximus laoreet nulla. Nullam
              eget tortor ac lacus vehicula ultricies. Mauris mattis quam sit
              amet lectus egestas, interdum ullamcorper massa vestibulum. Ut in
              tincidunt ligula. Nunc tortor diam, eleifend quis varius rhoncus,
              commodo id nisi. In in malesuada nunc.
            </p>
          </div>
        </div>

        <h3>Featured Projects</h3>
        <div className='row mb-4'>
          <div className='col-12 col-md-6 col-xl-3'>
            <Featuredprojects
              linkPath='/project'
              srcPath='/images/510x400.png'
            />
          </div>

          <div className='col-12 col-md-6 col-xl-3'>
            <Featuredprojects
              linkPath='/project'
              srcPath='/images/510x400.png'
            />
          </div>

          <div className='col-12 col-md-6 col-xl-3'>
            <Featuredprojects
              linkPath='/project'
              srcPath='/images/510x400.png'
            />
          </div>

          <div className='col-12 col-md-6 col-xl-3'>
            <Featuredprojects
              linkPath='/project'
              srcPath='/images/510x400.png'
            />
          </div>
        </div>

        <h3>Testimonials</h3>
        <div className='row mb-4'>
          <div className='col-12 col-lg-4'>
            <Testimonial
              testimonialText='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
                pulvinar purus vitae nisl semper, a ornare purus euismod.
                Quisque id dapibus ligula, vel finibus lectus. Aliquam neque
                diam, iaculis non arcu a, fringilla viverra libero'
            />
          </div>

          <div className='col-12 col-lg-4'>
            <Testimonial
              testimonialText='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
                pulvinar purus vitae nisl semper, a ornare purus euismod.
                Quisque id dapibus ligula, vel finibus lectus. Aliquam neque
                diam, iaculis non arcu a, fringilla viverra libero'
            />
          </div>

          <div className='col-12 col-lg-4'>
            <Testimonial
              testimonialText='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
                pulvinar purus vitae nisl semper, a ornare purus euismod.
                Quisque id dapibus ligula, vel finibus lectus. Aliquam neque
                diam, iaculis non arcu a, fringilla viverra libero'
            />
          </div>
        </div>

        <h3>Contact Me</h3>
        <Contactform />
      </div>
    </>
  )
}
