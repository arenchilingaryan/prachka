import React from 'react'
import G1 from '../../img/g-1.jpg'
import G2 from '../../img/g-2.jpg'
import G3 from '../../img/g-3.jpg'
import G4 from '../../img/g-4.jpg'
import G5 from '../../img/g-5.jpg'

import './Gallery.scss'

export default function Gallery() {
  return (
    <div className="gallery">
      <img className="gallery__img" src={G1} alt={"sorry bro :'("}/>
      <img className="gallery__img" src={G2} alt={"sorry bro :'("}/>
      <img className="gallery__img" src={G3} alt={"sorry bro :'("}/>
      <img className="gallery__img" src={G4} alt={"sorry bro :'("}/>
      <img className="gallery__img" src={G5} alt={"sorry bro :'("}/>
    </div>
  )
}
