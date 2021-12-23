import Head from 'next/head'
import Link from 'next/link'
import React from 'react'
import Carousel from '../components/carousel/carousel'
import Featuredprojects from '../components/featuredprojects/featuredprojects'

function projectPage() {
  return (
    <>
      <Head>
        <title>Project Detail</title>
        <meta
          name='Project Detail'
          content='initial-scale=1.0, width=device-width'
        />
      </Head>

      <div className='container mt-4'>
        <h2 className='display-4 mb-4'>
          <span className='badge bg-primary'>Tag</span>
          Portfolio Project Heading
          <small className='d-block text-muted'>
            Portfolio Project Subheading
          </small>
        </h2>

        <div className='row mb-4'>
          <div className='col-12 col-xl-8 mb-4 mb-xl-0'>
            <Carousel />
          </div>

          <div className='col-12 col-xl-4'>
            <h3>Project Description</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
              pulvinar purus vitae nisl semper, a ornare purus euismod. Quisque
              id dapibus ligula, vel finibus lectus. Aliquam neque diam, iaculis
              non arcu a, fringilla viverra libero. Mauris pharetra quis nulla
              eget fermentum.
            </p>
            <h3>Project Details</h3>
            <ul>
              <li>Description of detail</li>
              <li>Description of detail</li>
              <li>Description of detail</li>
              <li>Description of detail</li>
              <li>Description of detail</li>
            </ul>
            <h3>Project Link</h3>
            <i className='fas fa-external-link-alt'></i>
            <Link href={'#0'}>
              <a target={'_blank'}>www.portfolioitemheading.com</a>
            </Link>
          </div>
        </div>

        <h3>Related Projects</h3>
        <div className='row mb-4'>
          <div className='col-12 col-md-6 col-xl-3 mb-4'>
            <Featuredprojects
              linkPath='/project'
              srcPath='/images/510x400.png'
            />
          </div>

          <div className='col-12 col-md-6 col-xl-3  mb-4'>
            <Featuredprojects
              linkPath='/project'
              srcPath='/images/510x400.png'
            />
          </div>

          <div className='col-12 col-md-6 col-xl-3  mb-4'>
            <Featuredprojects
              linkPath='/project'
              srcPath='/images/510x400.png'
            />
          </div>

          <div className='col-12 col-md-6 col-xl-3  mb-4'>
            <Featuredprojects
              linkPath='/project'
              srcPath='/images/510x400.png'
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default projectPage
