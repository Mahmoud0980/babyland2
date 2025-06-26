import React from "react";
import styled from "styled-components";
import image1 from "../assets/images/image1.jpg";
import image2 from "../assets/images/image2.jpg";
import image3 from "../assets/images/image3.jpg";
// بيانات المنتجات
const products = [
  {
    id: 1,
    title: "Product 1",
    image: "/images/image1.jpg",
    colors: ["red", "green", "blue"],
  },
  {
    id: 2,
    title: "Product 2",
    image: "/images/image2.jpg",
    colors: ["yellow", "black", "pink"],
  },
  {
    id: 3,
    title: "Product 3",
    image: "/images/image3.jpg",
    colors: ["purple", "orange", "gray"],
  },
];

// الأنماط الأساسية
const CardContainer = styled.div`
  display: flex;
  gap: 30px;
  justify-content: center;
  padding: 50px;
`;

const CardWrapper = styled.div`
  width: 300px;
  height: 400px;
  position: relative;
  transform-style: preserve-3d;
  transition: transform 0.8s;
  perspective: 1000px;

  &:hover {
    transform: rotateY(180deg) scale(1.05);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3)
    
  }
`;

const CardFace = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
`;

const FrontFace = styled(CardFace)`
  background: #fff;
`;

const BackFace = styled(CardFace)`
  background: linear-gradient(45deg, #434343, #000000);
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transform: rotateY(180deg);
`;

const ProductImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const ColorCircle = styled.span`
  display: inline-block;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  margin: 0 5px;
  cursor: pointer;
  border: 2px solid white;
`;

const AddToCartButton = styled.button`
  padding: 10px 20px;
  background: #ff6b6b;
  color: white;
  border: none;
  border-radius: 5px;
  margin-top: 20px;
  cursor: pointer;
  font-weight: bold;
  transition: all 0.3s;

  &:hover {
    background: #ff5252;
  }
`;

const Card = () => {
  return (
    <CardContainer>
      {products.map((product) => (
        <CardWrapper key={product.id}>
          <FrontFace>
            <ProductImage src={image1} alt={product.title} />
          </FrontFace>
          <BackFace>
            <h2>{product.title}</h2>
            <div style={{ margin: "15px 0" }}>
              <h3>Size:</h3>
              <div style={{ marginTop: "10px" }}>
                {["S", "M", "L"].map((size) => (
                  <span
                    key={size}
                    style={{
                      margin: "0 5px",
                      cursor: "pointer",
                      fontWeight: "bold",
                    }}
                  >
                    {size}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h3>Color:</h3>
              <div style={{ marginTop: "10px" }}>
                {product.colors.map((color) => (
                  <ColorCircle
                    key={color}
                    style={{ background: color }}
                  />
                ))}
              </div>
            </div>
            <AddToCartButton>Add To Cart</AddToCartButton>
          </BackFace>
        </CardWrapper>
      ))}
    </CardContainer>
  );
};

export default Card;