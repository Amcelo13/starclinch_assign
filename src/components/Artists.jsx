import { useState } from 'react';
import './Artists.css'
function Artists() {

  const [images, setImages] = useState([
    { src: "public/assets/1.png", alt: "Image 1" },
    { src: "public/assets/2.png", alt: "Image 2" },
    { src: "public/assets/3.png", alt: "Image 3" },
    { src: "public/assets/4.png", alt: "Image 4" },
    { src: "public/assets/3.png", alt: "Image 5" },
    { src: "public/assets/4.png", alt: "Image 6" },
    { src: "public/assets/5.png", alt: "Image 7" },
    { src: "public/assets/6.png", alt: "Image 8" },
  ]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [activeDotIndex, setActiveDotIndex] = useState(0);

  const showNextImages = (e) => {
    e.preventDefault();
    // Calculate the index of the first image in the next set
    const nextIndex = (currentIndex + 4) % images.length;
    
    // Update the state with the new index
    setCurrentIndex(nextIndex);
    setActiveDotIndex(nextIndex > 0 ? nextIndex / 4 : images.length / 4);

  };

  const showPreviousImages = (e) => {
    e.preventDefault();
    
    // Calculate the index of the first image in the previous set
    const previousIndex =
      (currentIndex - 4 + images.length) % images.length;

    // Update the state with the new index
    setCurrentIndex(previousIndex);
    setActiveDotIndex(previousIndex > 0 ? previousIndex / 4 : images.length / 4);

  };
  

  return (
    <>
      <div style={{
        display: 'flex', marginLeft: '6rem', marginTop: '1rem'
      }}>
        <img src="https://stcdn.starclinch.in/mobile/images/profile/similar_artist_icon_v2.svg" alt="" />
        <p style={{
          marginLeft: '1rem', marginTop: '1rem', color: 'black', fontSize: '20px', paddingTop: '3px',
          fontWeight: '500', fontFamily: 'Montserrat',width: "400px"
        }}>Similar Artists you may like</p>
      </div>
  
      <div className="image-gallery">
        {/* Show the images */}
        <div className="image-gallery-row">
          {images.slice(currentIndex, currentIndex + 4).map((image, index) => (
            <img 
              key={index}
              className="image-gallery-image"
              src={image.src}
              alt={image.alt} style={{borderRadius:'0.7rem',height:'15rem',cursor:'pointer'}}
            />
          ))}
        </div>
  
        {/* Show the dots */}
        <div className="image-gallery-dots">
          <span
            className={"image-gallery-dot" + (currentIndex === 0 ? " active" : "")}
            onClick={showPreviousImages}
          ></span>
          <span
            className={"image-gallery-dot" + (currentIndex === images.length - 4 ? " active" : "")}
            onClick={showNextImages}
          ></span>
        </div>
      </div>
    </>
  );
  
}

export default Artists