function ImageComponent({ styleClasses, altInfo, srcPath }) {
  return <img src={srcPath} alt={altInfo} className={styleClasses} />
}

export default ImageComponent
