const CoverArt = ({ album }) => {
  const { images, name } = album;
  return (
    <div className="CoverArt">
      <img 
        src={images[0].url} 
        alt={name} 
        className="CoverArt_img"
      />
    </div>
  )
}

export default CoverArt;