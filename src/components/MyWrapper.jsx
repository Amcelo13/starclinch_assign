import { useState,useEffect } from "react";
import './imgj.css'

const MyWrapper = () => {
  const images = [
    "https://wpcdn.starclinch.in/2019/03/26642.jpg?format=webp&w=300&dpr=1.5",
    "https://wpcdn.starclinch.in/2019/03/26635.jpg?format=webp&w=300&dpr=1.5",
    "https://wpcdn.starclinch.in/2019/03/26632.jpg?format=webp&w=300&dpr=1.5",
    "https://wpcdn.starclinch.in/2019/03/26636.jpg?format=webp&w=300&dpr=1.5",
    "https://wpcdn.starclinch.in/2019/03/26637.jpg?format=webp&w=300&dpr=1.5",
    "https://wpcdn.starclinch.in/2019/03/26634.jpg?format=webp&w=300&dpr=1.5",
    "https://wpcdn.starclinch.in/2019/03/26629.jpg?format=webp&w=300&dpr=1.5",
    "https://wpcdn.starclinch.in/2019/03/26633.jpg?format=webp&w=300&dpr=1.5",
    "https://wpcdn.starclinch.in/2019/03/26628.jpg?format=webp&w=300&dpr=1.5",
    "https://wpcdn.starclinch.in/2019/03/26627.jpg?format=webp&w=300&dpr=1.5",
    "https://wpcdn.starclinch.in/2019/03/26626.jpg?format=webp&w=300&dpr=1.5",
    "https://wpcdn.starclinch.in/2019/03/26625.jpg?format=webp&w=300&dpr=1.5",
    "https://wpcdn.starclinch.in/2019/03/26624.jpg?format=webp&w=300&dpr=1.5",
    "https://wpcdn.starclinch.in/2019/03/26638.jpg?format=webp&w=300&dpr=1.5",
    "https://wpcdn.starclinch.in/2019/03/26623.jpg?format=webp&w=300&dpr=1.5",
    "https://wpcdn.starclinch.in/2019/03/26640.jpg?format=webp&w=300&dpr=1.5",
    "https://wpcdn.starclinch.in/2019/03/26641.jpg?format=webp&w=300&dpr=1.5",
    "https://wpcdn.starclinch.in/2019/03/26639.jpg?format=webp&w=300&dpr=1.5",
    "https://wpcdn.starclinch.in/2019/03/26626.jpg?format=webp&w=300&dpr=1.5",
    "https://wpcdn.starclinch.in/2019/03/26629.jpg?format=webp&w=300&dpr=1.5",
  ];

  const [currentModalIndex, setCurrentModalIndex] = useState(0);
  const [prevModalIndex, setPrevModalIndex] = useState(images.length - 1);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = (index) => {
    setCurrentModalIndex(index);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const nextModal = () => {
    setPrevModalIndex(currentModalIndex);
    setCurrentModalIndex((currentModalIndex + 1) % images.length);
  };

  const prevModal = () => {
    setPrevModalIndex(currentModalIndex);
    setCurrentModalIndex(
      (currentModalIndex - 1 + images.length) % images.length
    );
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (isModalOpen) {
        if (event.key === "ArrowLeft") {
          prevModal();
        } else if (event.key === "ArrowRight") {
          nextModal();
        }
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {  
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isModalOpen]);
  return (
    <>
      <div
        style={{cursor:'pointer',
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: "10px",
          paddingRight: "1rem",
          paddingLeft: "1rem",
        }}
      >
        {images.map((image, i) => (
          <img className = "imgj"
            key={i}
            src={image}
        
            onClick={() => showModal(i)}
          />
        ))}
      </div>
      {isModalOpen && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: 9999,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
          }}
        >
          <div
            style={{
              position: "relative",
              width: "100%",
              height: "100%",
              backgroundColor: "black",
              opacity: '0.925',
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img
              src={images[currentModalIndex]}
              style={{
                maxWidth: "80%",
                maxHeight: "80%",
                objectFit: "contain",
                opacity: "1",
                border: "0.7rem solid white",
                borderRadius: "1rem",
                transition: "transform 0.3s ease-in-out",
                "&:hover": {
                  transform: "scale(1.2)",
                  transitionDelay: "0.3s",
                },
                transform: isModalOpen ? "scale(1.2)" : "scale(1)",
              }}
            />
            <button
              style={{
                position: "absolute",
                top: "50%",
                left: 0,
                transform: "translateY(-50%)",
                backgroundColor: "transparent",
                border: "none",
                color: 'white',
                outline: "none",
                fontSize: "3rem",
                cursor: "pointer",
              }}
              onClick={prevModal}
            >
              {"<"}
            </button>
            <button
              style={{
                position: "absolute",
                top: "50%",
                right: 0,
                transform: "translateY(-50%)",
                backgroundColor: "transparent",
                color: 'white',
                border: "none",
                outline: "none",
                fontSize: "3rem",
                cursor: "pointer",
              }}
              onClick={nextModal}
            >
              {">"}
            </button>
            <button
              style={{
                position: "absolute",
                top: 0,
                right: 0,
                backgroundColor: "transparent",
                border: "none",
                outline: "none",
                color: 'white',
                fontSize: "2rem",
                cursor: "pointer",
              }}
              onClick={closeModal}
            >
              {"X"}
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default MyWrapper;
