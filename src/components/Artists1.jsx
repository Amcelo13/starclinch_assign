import { useState } from 'react';
import './SD1.css';

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
    { src: "image9.jpg", alt: "Image 9" },
    { src: "image10.jpg", alt: "Image 10" },
    { src: "image11.jpg", alt: "Image 11" },
    { src: "image12.jpg", alt: "Image 12" },
    { src: "image13.jpg", alt: "Image 13" },
    { src: "image14.jpg", alt: "Image 14" },
    { src: "image15.jpg", alt: "Image 15" },
    { src: "image16.jpg", alt: "Image 16" }
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
        display: 'flex', marginLeft: '8rem', marginTop: '-2rem'
      }}>
        <p style={{
          marginLeft: '1rem', marginTop: '1rem', color: 'black', fontSize: '20px', paddingTop: '3px',
          fontWeight: '500',fontFamily: 'Montserrat', width: "400px"
        }}>You might be interested in</p>
      </div>
  
      <div className="image-gallery">
        {/* Show the images */}
        <div className="image-gallery-row">
          {images.slice(currentIndex, currentIndex + 4).map((image, index) => (
            <img
              key={index}
              className="image-gallery-image"
              src={image.src}
              alt={image.alt} style={{borderRadius:'0.7rem'}}
            />
          ))}
        </div>
  
        {/* Show the dots */}
        <div className="image-gallery-dots">
  {Array.from({length: images.length / 4}, (_, i) => i).map((dotIndex) => (
    <span
      key={dotIndex}
      className={"image-gallery-dot" + (dotIndex === activeDotIndex ? " active" : "")}
      onClick={() => {
        setCurrentIndex(dotIndex * 4);
        setActiveDotIndex(dotIndex);
      }}
    ></span>
  ))}
</div>
</div>
</>
);
}

export default Artists;