import { useState } from 'react';
import './SD1.css';

function Artists() {

  const [images, setImages] = useState([
    { src: "public/assets/a.png", alt: "Image 1" },
    { src: "public/assets/b.png", alt: "Image 2" },
    { src: "public/assets/c.png", alt: "Image 3" },
    { src: "public/assets/d.png", alt: "Image 4" },
    { src: "public/assets/e.png", alt: "Image 5" },
    { src: "public/assets/f.png", alt: "Image 6" },
    { src: "public/assets/g.png", alt: "Image 7" },
    { src: "public/assets/h.png", alt: "Image 8" },
    { src: "public/assets/i.png", alt: "Image 9" },
    { src: "public/assets/j.png", alt: "Image 10" },
    { src: "public/assets/k.png", alt: "Image 11" },
    { src: "public/assets/l.png", alt: "Image 12" },
    { src: "public/assets/k.png", alt: "Image 13" },
    { src: "public/assets/l.png", alt: "Image 14" },
    { src: "public/assets/m.png", alt: "Image 15" },
    { src: "public/assets/n.png", alt: "Image 16" }
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
              alt={image.alt} style={{borderRadius:'0.7rem' ,height:'17rem',cursor:'pointer'}}
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