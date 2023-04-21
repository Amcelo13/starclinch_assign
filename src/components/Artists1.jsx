import React, { useState } from 'react';
import Slider from 'react-slick';
// import './SD1.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function Artists() {

  const [images, setImages] = useState([
    { src: "https://i.pinimg.com/originals/b1/17/f2/b117f2374a5a62863ba956a933e0758a.png", alt: "Image 1" },
    { src: "https://i.pinimg.com/originals/79/e4/c9/79e4c9d3a123666c574f0218904b57aa.png", alt: "Image 2" },
    { src: "https://i.pinimg.com/originals/65/7f/0d/657f0d7e9da8f4d9709cf77210769a67.png", alt: "Image 3" },
    { src: "https://i.pinimg.com/originals/53/44/bc/5344bc5d779c2d154dd0ea25bcd831d0.png", alt: "Image 4" },
    { src: "https://i.pinimg.com/originals/ba/21/a0/ba21a025256b9185b26a980cab236346.png", alt: "Image 5" },
    { src: "https://i.pinimg.com/originals/9d/96/cf/9d96cfacf9402272ab8ab53b54ff09c5.png", alt: "Image 6" },
    { src: "https://i.pinimg.com/originals/d0/aa/57/d0aa57c2a4f884c11f3d6bb3686befb2.png", alt: "Image 7" },
    { src: "https://i.pinimg.com/originals/f4/af/ca/f4afcac4f56e324063e1dc1755e5e94a.png", alt: "Image 8" },
    { src: "https://i.pinimg.com/originals/88/4e/37/884e376fa3064eb41bef6dcdbb5ac888.png", alt: "Image 9" },
    { src: "https://i.pinimg.com/originals/96/19/30/96193075419e3e1f14ce968e3da9e470.png", alt: "Image 10" },
    { src: "https://i.pinimg.com/originals/71/10/96/711096895ca5eecc6718ff8c18e01fa5.png", alt: "Image 11" },
    { src: "https://i.pinimg.com/originals/a5/5d/67/a55d67dfac4334eebe0c7bf3d2447042.png", alt: "Image 12" },
    { src: "https://i.pinimg.com/originals/71/10/96/711096895ca5eecc6718ff8c18e01fa5.png", alt: "Image 13" },
    { src: "https://i.pinimg.com/originals/a5/5d/67/a55d67dfac4334eebe0c7bf3d2447042.png", alt: "Image 14" },
    { src: "https://i.pinimg.com/originals/e7/2e/2c/e72e2c538aecf328701d089997f0d46f.png", alt: "Image 15" },
    { src: "https://i.pinimg.com/originals/b3/25/08/b325088a1504a6ea909c3f7bd4fee139.png", alt: "Image 16" }
  ]);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <>
      <div style={{width:'auto', 
        display: 'flex', marginLeft: '6rem', marginTop: '1rem'
      }}>
        <p style={{
          marginLeft: '1rem', marginTop: '1rem', color: 'black', fontSize: '20px', paddingTop: '3px',
          fontWeight: '500', fontFamily: 'Montserrat', width: "400px"
        }}>You might be interested in</p>
      </div>
      <Slider {...settings } style={{marginBottom:'5rem',width:'1100px',marginLeft:'7rem',width:'auto',marginRight:'5rem' }}>
        {images.map((image, index) => (
          <div key={index}>
            <img className="image-gallery-image"  src={image.src} alt={image.alt} style={{ borderRadius: '0.7rem', height: '19rem', cursor: 'pointer' ,
          marginBottom:'1rem'}} />
          </div>
        ))}
      </Slider>
    </>
  );
}

export default Artists;