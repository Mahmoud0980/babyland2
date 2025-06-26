import React from "react";
import styled from "styled-components";
import image1 from "../assets/images/image1.jpg"; // تأكدي من صحة المسار
import image2 from "../assets/images/image2.jpg";
import image3 from "../assets/images/image3.jpg";
// الأنماط مع تأثير الـ 3D Flip
const CardWrapper = styled.div`
  width: 300px;
  height: 400px;
  position: relative;
  transform-style: preserve-3d;
  transition: all 0.5s ease;
  &:hover {
    transform: rotateY(180deg);
  }
`;

const ImgBox = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const ContentBox = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background: #333;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  backface-visibility: hidden;
  transform: rotateY(180deg);
`;


const Card = ({ prodImg, ingSize, bgColor, prodTitle }) => {
  return (
    <>
      <CardWrapper>
        <ImgBox>
          <img src="/images/image1.jpg" alt={prodTitle} />
        </ImgBox>
        <ContentBox>
          <h2>{prodTitle}</h2>
          <div className="size">
            <h3>Size: </h3>
            <span>S</span>
            <span>M</span>
            <span>L</span>
          </div>
          <div className="color">
            <h3>Color:</h3>
            <span style={{ background: "red" }}></span>
            <span style={{ background: "green" }}></span>
            <span style={{ background: "blue" }}></span>
          </div>
          <button>Add To Cart</button>
        </ContentBox>
      </CardWrapper>
    </>
  );
};
export default Card; // التصدير هنا