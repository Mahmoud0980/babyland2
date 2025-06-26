
import React from "react";
import {  useNavigate } from "react-router-dom";
//import StarRating from "./StarRating";
import './BoysPageLayout.css'; // استيراد ملف CSS
import girls1 from "../assets/images/image2.jpg";
import girls2 from "../assets/images/image1.jpg";
import girls3 from "../assets/images/image23.jpg";
import styled from "styled-components";
import girls4 from "../assets/images/image104.jpg";
import girls5 from "../assets/images/image104.jpg";
import girls6 from "../assets/images/image104.jpg";
import girls7 from "../assets/images/image104.jpg";
import girls8 from "../assets/images/image104.jpg";
const GairlsProducts = [
  
  {
    id: 1,
    title: "ملابس صيفية صبياني",
    image: girls1,
    sizes: ["S", "M", "L"],
    colors: ["#000000", "#1E88E5", "#F44336"],
    price: "120000 ل.س",
    rating: 4,
    categoryLink: "/boys/summer"
  },
  {
    id: 2,
    title: "بيجاما صبياني",
    image: girls2,
    sizes: ["One Size"],
    colors: ["#4CAF50", "#9E9E9E", "#607D8B"],
    price: "85000 ل.س",
    rating: 5,
    categoryLink: "/boys/pajamas"
  },
  {
    id: 3,
    title: "حذاء رياضي",
    image: girls3,
    sizes: ["32", "34", "36"],
    colors: ["#795548", "#E91E63", "#FFC107"],
    price: "180000 ل.س",
    rating: 3,
    categoryLink: "/boys/shoes"
  },
  {
    id: 4,
    title: "قميص رسمي",
    image: girls4,
    sizes: ["M", "L", "XL"],
    colors: ["#FFFFFF", "#2196F3", "#9C27B0"],
    price: "95000 ل.س",
    rating: 4,
    categoryLink: "/boys/shirts"
  },

  {
    id: 5,
    title: "قميص رسمي",
    image: girls5,
    sizes: ["M", "L", "XL"],
    colors: ["#FFFFFF", "#2196F3", "#9C27B0"],
    price: "95000 ل.س",
    rating: 4,
    categoryLink: "/boys/shirts"
  },
  {
    id: 6,
    title: "قميص رسمي",
    image: girls6,
    sizes: ["M", "L", "XL"],
    colors: ["#FFFFFF", "#2196F3", "#9C27B0"],
    price: "95000 ل.س",
    rating: 4,
    categoryLink: "/boys/shirts"
  },
  {
    id: 7,
    title: "قميص رسمي",
    image: girls7,
    sizes: ["M", "L", "XL"],
    colors: ["#FFFFFF", "#2196F3", "#9C27B0"],
    price: "95000 ل.س",
    rating: 4,
    categoryLink: "/boys/shirts"
  },
  {
    id: 8,
    title: "قميص رسمي",
    image: girls8,
    sizes: ["M", "L", "XL"],
    colors: ["#FFFFFF", "#2196F3", "#9C27B0"],
    price: "95000 ل.س",
    rating: 4,
    categoryLink: "/boys/shirts"
  }

  // يمكنك إضافة المزيد من المنتجات
// ... 
];


// الأنماط الأساسية
const ProductsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 30px;
  padding: 40px;
`;

const CardWrapper = styled.div`
  width: 280px;
  height: 420px;
  position: relative;
  transform-style: preserve-3d;
  transition: all 0.8s ease;
  perspective: 1000px;
  cursor: pointer;

  &:hover {
    transform: rotateY(180deg);
  }
`;

const CardFace = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
`;

const FrontFace = styled(CardFace)`
  background: #fff;
  display: flex;
  flex-direction: column;
`;

const BackFace = styled(CardFace)`
  background: linear-gradient(135deg, #434343 0%, #000000 100%);
  color: white;
  padding: 20px;
  transform: rotateY(180deg);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const ProductImage = styled.img`
  width: 100%;
  height: 280px;
  object-fit: cover;
`;

const ProductTitle = styled.h2`
  margin: 15px 0;
  text-align: center;
  font-size: 1.4rem;
`;

const PriceTag = styled.div`
  background: #ff6b6b;
  color: white;
  padding: 5px 15px;
  border-radius: 20px;
  font-weight: bold;
  position: absolute;
  top: 15px;
  right: 15px;
`;

const ColorSelector = styled.div`
  display: flex;
  gap: 10px;
  margin: 10px 0;
`;

const ColorOption = styled.div`
  width: 25px;
  height: 25px;
  border-radius: 50%;
  cursor: pointer;
  border: 2px solid white;
`;

const SizeSelector = styled.div`
  display: flex;
  gap: 10px;
  margin: 10px 0;
`;

const SizeOption = styled.div`
  padding: 5px 10px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    background: rgba(255, 255, 255, 0.4);
  }
`;

const AddToCartButton = styled.button`
  padding: 12px;
  width: 100%;
  background: #ff6b6b;
  color: white;
  border: none;
  border-radius: 8px;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s;
  margin-top: 15px;

  &:hover {
    background: #ff5252;
    transform: translateY(-3px);
  }
`;
const GairlsPage = () => {
  const navigate = useNavigate();
  const isLoggedIn = true;
//false
  const handleAddToCart = (productId) => {
    if (!isLoggedIn) {
      navigate("/login");
    } else {
      navigate("/orders");
    }
  };

  return (
    <div style={{ padding: "40px" }}>
      <h1 style={{ textAlign: "center", marginBottom: "40px" }}>ملابس الأولاد</h1>
      <ProductsContainer>
        {GairlsProducts.map((product) => (
          <CardWrapper key={product.id}>
            <FrontFace>
              <ProductImage src={product.image} alt={product.title} />
              <ProductTitle>{product.title}</ProductTitle>
              <PriceTag>{product.price}</PriceTag>
            </FrontFace>
            
            <BackFace>
              <div>
                <h3>المقاسات المتاحة:</h3>
                <SizeSelector>
                  {product.sizes.map((size) => (
                    <SizeOption key={size}>{size}</SizeOption>
                  ))}
                </SizeSelector>
                
                <h3>الألوان:</h3>
                <ColorSelector>
                  {product.colors.map((color) => (
                    <ColorOption 
                      key={color} 
                      style={{ backgroundColor: color }}
                    />
                  ))}
                </ColorSelector>
              </div>
              <div>
                <AddToCartButton>أضف إلى السلة</AddToCartButton>
                
              </div>
            </BackFace>
          </CardWrapper>
        ))}
      </ProductsContainer>
    </div>
  );
};
export default GairlsPage;
//export default GirlsPage;