import React, { useState } from 'react';
import Slider from 'react-slick';
import './Artists.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

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
      <div style={{
        display: 'flex', marginLeft: '6rem', marginTop: '1rem'
      }}>
        <img src="https://stcdn.starclinch.in/mobile/images/profile/similar_artist_icon_v2.svg" alt="" />
        <p style={{
          marginLeft: '1rem', marginTop: '1rem', color: 'black', fontSize: '20px', paddingTop: '3px',
          fontWeight: '500', fontFamily: 'Montserrat', width: "400px"
        }}>Similar Artists you may like</p>
      </div>
      <Slider {...settings } style={{marginBottom:'1rem',width:'1100px',marginLeft:'7rem'}}>
        {images.map((image, index) => (
          <div key={index}>
            <img className="image-gallery-image" src={image.src} alt={image.alt} style={{ borderRadius: '0.7rem', height: '15rem', cursor: 'pointer' ,
          marginBottom:'1rem'}} />
          </div>
        ))}
      </Slider>
    </>
  );
}

export default Artists;