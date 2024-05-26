function Footer({ending, copyright}) {
  return (
    <div className='footer'>
        <h5 className='footer-title'>{ending}</h5>
        <p className='footer-p'>{copyright}</p>
    </div>
  )
}

export default Footer