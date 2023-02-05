"use client";


export const Galery = ({ images }) => {
  return (
    <div>
      {images.map((image, index) => (
        <img src={image} key={index} />
      ))}
    </div>
  );
};
