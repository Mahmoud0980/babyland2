import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Hero from "../components/hero/hero";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./ProductsFlipCard.css";

const ProductsFlipCard = () => {
  const [products, setProducts] = useState([]);
  const [price, setPrice] = useState(null);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const [showModal, setShowModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedColor, setSelectedColor] = useState('');

  useEffect(() => {
    axios.get("/getProducts.php", {
      mode: 'CORS',
      credentials: 'include',
      headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },

    })
      .then((response) => setProducts(response.data))
      .catch((error) => console.error("خطأ في جلب المنتجات:", error));
  }, []);

  useEffect(() => {
    axios.get("/predict_price.php", {
      mode: 'CORS',
      credentials: 'include',
      headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
    })
      .then(response => {
        if (response.data.predicted_price) {
          setPrice(response.data.predicted_price);
        } else {
          setError('تعذر التنبؤ بالسعر.');
        }
      })
      .catch(() => setError('خطأ في الاتصال بـ API'));
  }, []);

  const openModal = (product) => {
    setSelectedProduct(product);
    setSelectedSize('');
    setSelectedColor('');
    setShowModal(true);
  };

  const confirmAddToCart = () => {
    const userName = localStorage.getItem("userName");
    if (!userName || !selectedProduct) return;

    axios.post("/addToCart.php", {
      mode: 'CORS',
      credentials: 'include',
      headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
      user_name: userName,
      product_id: selectedProduct.id,
      quantity: 1,
      size: selectedSize,
      color: selectedColor
    })
      .then((response) => {

        if (response.data.status === 'success') {
          alert("تمت إضافة المنتج إلى السلة");
          setShowModal(false);
        } else {
          alert("خطأ أثناء الإضافة");
        }
      })
      .catch((error) => console.error("خطأ:", error));
  };

  return (
    <>
      <Hero />
      <div className="products-container">
        {products.map((product) => (
          <div className="card-wrapper" key={product.id}>
            <div className="card-face front-face">
              <img className="product-image" src={product.image_url} alt={product.name} />
              <h2 className="product-title">{product.name}</h2>
              <div className="price-tag">{product.price}$</div>
            </div>

            <div className="card-face back-face">
              <h3>المقاسات المتاحة:</h3>
              <div className="size-selector">{product.size}</div>

              <h3>الألوان:</h3>
              <div className="color-selector">{product.color}</div>

              <button className="btn btn-primary" style={{ backgroundColor: "#ff6fa1", borderColor: "#ff6fa1" }} onClick={() => openModal(product)}>أضف إلى السلة</button>

              <div className="p-4 bg-gray-100 shadow rounded-xl w-fit text-center">
                <h2 className="text-xl font-bold mb-2">🔮 السعر المتوقع القادم</h2>
                {price !== null ? (
                  <p className="text-green-700 text-2xl">${price} USD</p>
                ) : (
                  <p>جاري الحساب...</p>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* ✅ Modal لخيارات المقاس واللون */}
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>اختر المقاس واللون</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selectedProduct && (
            <>
              <div className="mb-3">
                <label>المقاس:</label>
                <select className="form-control" value={selectedSize} onChange={(e) => setSelectedSize(e.target.value)}>
                  <option value="">اختر مقاس</option>
                  {selectedProduct.size.split(',').map((size, i) => (
                    <option key={i} value={size.trim()}>{size.trim()}</option>
                  ))}
                </select>
              </div>

              <div className="mb-3">
                <label>اللون:</label>
                <select className="form-control" value={selectedColor} onChange={(e) => setSelectedColor(e.target.value)}>
                  <option value="">اختر لون</option>
                  {selectedProduct.color.split(',').map((color, i) => (
                    <option key={i} value={color.trim()}>{color.trim()}</option>
                  ))}
                </select>
              </div>
            </>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>إلغاء</Button>
          <Button style={{ backgroundColor: "#ff6fa1", borderColor: "#ff6fa1" }} variant="primary" onClick={confirmAddToCart} disabled={!selectedSize || !selectedColor}>تأكيد الإضافة</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ProductsFlipCard;
