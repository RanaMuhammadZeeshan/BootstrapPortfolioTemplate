import Link from 'next/link'

function Footerlink({ iconName, linkPath, linktext }) {
  return (
    <>
      <i className={`fab fa-fw ${iconName} text-muted`}></i>
      <Link href={linkPath}>
        <a>{linktext}</a>
      </Link>
    </>
  )
}

export default Footerlink
