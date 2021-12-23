import Script from 'next/script'
import Layout from '../components/layout/layout'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Script
        src='https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js'
        integrity='sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p'
        crossOrigin='anonymous'
      />
      <Script
        src='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/js/all.min.js'
        integrity='sha512-fzff82+8pzHnwA1mQ0dzz9/E0B+ZRizq08yZfya66INZBz86qKTCt9MLU0NCNIgaMJCgeyhujhasnFUsYMsi0Q=='
        crossOrigin='anonymous'
        referrerPolicy='no-referrer'
      />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}

export default MyApp
