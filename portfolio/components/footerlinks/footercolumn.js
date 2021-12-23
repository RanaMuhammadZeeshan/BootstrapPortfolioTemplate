import Footerlink from './footerlinks'

function Footercolumn({
  columnHeadingIcon,
  columnHeadings,
  columnLinks,
  columnIcon,
  columnLinkText,
}) {
  return (
    <div className='col-12 col-md-6 col-xl-3'>
      <div className='d-flex align-items-center mb-2'>
        <div className='fa-layers fa-fw fa-2x me-1'>
          <i className='fas fa-circle text-muted'></i>
          <i
            className={`fas ${columnHeadingIcon} text-white`}
            data-fa-transform='shrink-10'
          ></i>
        </div>
        <h5 className='m-0'>{columnHeadings}</h5>
      </div>

      <ul className='list-unstyled'>
        <li>
          <Footerlink
            iconName={columnIcon[0]}
            linkPath={columnLinks[0]}
            linktext={columnLinkText[0]}
          />
        </li>
        <li>
          <Footerlink
            iconName={columnIcon[1]}
            linkPath={columnLinks[1]}
            linktext={columnLinkText[1]}
          />
        </li>
        <li>
          <Footerlink
            iconName={columnIcon[2]}
            linkPath={columnLinks[2]}
            linktext={columnLinkText[2]}
          />
        </li>
      </ul>
    </div>
  )
}

export default Footercolumn
