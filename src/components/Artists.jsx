import { useState } from 'react';
import './Artists.css'
function Artists() {

  const [images, setImages] = useState([
    { src: "https://i.pinimg.com/564x/c7/eb/5c/c7eb5ccaaaa03e3e508b51a3409b173a.jpg", alt: "Image 1" },
    { src: "https://i.pinimg.com/originals/cd/59/26/cd59267abeffbea76c71e33b1bd53e66.png", alt: "Image 2" },
    { src: "https://i.pinimg.com/originals/94/c4/90/94c490317098ea4a36c651da4a5f9101.png", alt: "Image 3" },
    { src: "https://i.pinimg.com/originals/42/20/3f/42203f9e6037f827535bcf067c77af00.png", alt: "Image 4" },
    { src: "https://i.pinimg.com/originals/94/c4/90/94c490317098ea4a36c651da4a5f9101.png", alt: "Image 5" },
    { src: "https://i.pinimg.com/originals/42/20/3f/42203f9e6037f827535bcf067c77af00.png", alt: "Image 6" },
    { src: "https://i.pinimg.com/originals/db/32/4d/db324d677c76d2963d49d04f9d6e0bd6.png", alt: "Image 7" },
    { src: "https://i.pinimg.com/originals/92/28/ed/9228edee1448f1e6742b9b82124a2186.png", alt: "Image 8" },
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