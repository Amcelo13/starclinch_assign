import MasonryInfiniteScroller from 'react-masonry-infinite';


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

const MyWrapper = () => {
  return (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "10px" ,paddingRight:'1rem',paddingLeft:'1rem'}}>
      {images.map((image, i) => (
        <img 
          key={i}
          src={image}
          style={{ width: "100%", display: "block" ,borderRadius:'1rem'}}
        />
      ))}
    </div>
  );
};

export default MyWrapper;