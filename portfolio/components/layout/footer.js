import Footercolumn from '../footerlinks/footercolumn'

function Footer() {
  return (
    <footer className='bg-light py-4'>
      <div className='container'>
        <div className='row'>
          <Footercolumn
            columnHeadings='Code'
            columnHeadingIcon='fa-code'
            columnLinks={[
              'https://github.com/',
              'https://codepen.io',
              'https://stackoverflow.com',
            ]}
            columnIcon={['fa-github', 'fa-codepen', 'fa-stack-overflow']}
            columnLinkText={['Github', 'Codepen', 'Stackoverflow']}
          />

          <Footercolumn
            columnHeadings='Design'
            columnHeadingIcon='fa-paint-brush'
            columnLinks={['', '', '']}
            columnIcon={['fa-behance', 'fa-dribbble']}
            columnLinkText={['Behance', 'Dribbble']}
          />

          <Footercolumn
            columnHeadings='Photography'
            columnHeadingIcon='fa-images'
            columnLinks={['', '', '']}
            columnIcon={['fa-flickr', 'fa-instagram']}
            columnLinkText={['Flickr', 'Instagram']}
          />

          <Footercolumn
            columnHeadings='Video'
            columnHeadingIcon='fa-video'
            columnLinks={['', '', '']}
            columnIcon={['fa-youtube', 'fa-vimeo']}
            columnLinkText={['Youtube', 'Vimeo']}
          />
        </div>

        <p className='text-center mb-0 '>
          &copy; 2021 Firstname Lastname, All rights reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer
