import { useState } from 'react';
import './Artists.css'
function Artists() {

  const [images, setImages] = useState([
    { src: "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1965&q=80", alt: "Image 1" },
    { src: "https://images.unsplash.com/photo-1664448027922-f017a91ff392?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8NXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60", alt: "Image 2" },
    { src: "image3.jpg", alt: "Image 3" },
    { src: "image4.jpg", alt: "Image 4" },
    { src: "image5.jpg", alt: "Image 5" },
    { src: "image6.jpg", alt: "Image 6" },
    { src: "image7.jpg", alt: "Image 7" },
    { src: "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1965&q=80", alt: "Image 8" },
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
          fontWeight: '500', width: "400px"
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
              alt={image.alt}
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