import React from 'react'

 const MenCollection = (props) => {

  const{title, image1, image2, image3, image4, image5, image6}=props.gentsCollection
  return (
    <div class="menCollection">
      <h1>Mens Collection</h1>
      <div className="mensimagecollection">
        <img src={image1} alt="Image1" />
        <img src={image2} alt="Image2" />
        <img src={image3} alt="Image3" />
        <img src={image4} alt="Image4" />
        <img src={image5}   alt="Image5" />
        <img src={image6} alt="Image6" />
      </div>

    </div>
  )
}
export default MenCollection
