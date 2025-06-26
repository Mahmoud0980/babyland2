import React, { useState, useEffect } from "react";
import { Container, Nav, Navbar, Form, Button } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { useNavigate } from "react-router-dom";
import { FiShoppingCart } from "react-icons/fi";
import Modal from "react-bootstrap/Modal";

import axios from "axios"

import logo from './../log.jpg';
import NavDropdown from 'react-bootstrap/NavDropdown';
// import logo from "./../logo.jpg"; // تأكد من صحة مسار الصورة
import "./nav.css";

function EnhancedNavbar() {
  const [show, setShow] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const userName = localStorage.getItem("userName");
  const navigate = useNavigate();

  const fetchCartItems = () => {
    if (!userName) return;
    axios.post("http://localhost/API_Test/getCart.php", { user_name: userName })
      .then(res => setCartItems(res.data))
      .catch(err => console.error("فشل في تحميل السلة", err));
  };

  useEffect(() => {
    if (show) fetchCartItems();
  }, [show]);

  const removeFromCart = (productId) => {
    axios.post("http://localhost/API_Test/removeFromCart.php", {
      user_name: userName,
      product_id: productId
    })
      .then(res => {
        if (res.data.status === "success") {
          alert("تم الحذف من السلة");
          fetchCartItems(); // تحديث العناصر بعد الحذف
        } else {
          alert("فشل في الحذف");
        }
      })
      .catch(err => {
        console.error("خطأ في الحذف:", err);
      });
  };
  const handlePurchase = () => {
    if (!userName) {
      alert("يرجى تسجيل الدخول قبل الشراء");
      return;
    }

    axios.post("http://localhost/API_Test/placeOrder.php", {
      user_name: userName
    })
      .then((res) => {
        if (res.data.status === "success") {
          alert("تم الشراء بنجاح!");
          setCartItems([]);
          setShow(false);
        } else {
          console.log(res)
          alert("حدث خطأ أثناء تنفيذ الطلب");
        }
      })
      .catch((err) => {
        console.error("خطأ في الشراء:", err);
        alert("فشل في الشراء");
      });
  };


  return (
    <>
      <Navbar expand="lg" variant="light" sticky="top" className="navbar-custom">
        <Container>
          <LinkContainer to="/">
            <Navbar.Brand>
              <img
                src={logo}
                alt="Logo"
                className="nav-logo"
                onMouseEnter={(e) =>
                  (e.currentTarget.style.transform = "rotate(15deg) scale(1.1)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.transform = "rotate(0deg) scale(1)")
                }
              />
            </Navbar.Brand>
          </LinkContainer>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />

          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="" style={{ gap: "15px", margin: "auto" }}>
              <LinkContainer to="/">
                <Nav.Link className="nav-link-custom">الرئيسية</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/boys">
                <Nav.Link className="nav-link-custom">قسم الاولاد</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/girls">
                <Nav.Link className="nav-link-custom">قسم البنات</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/baby">
                <Nav.Link className="nav-link-custom">بي.بي</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/tools">
                <Nav.Link className="nav-link-custom">الأدوات</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/about">
                <Nav.Link className="nav-link-custom">من نحن</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/contact">
                <Nav.Link className="nav-link-custom">تواصل معنا</Nav.Link>
              </LinkContainer>

              {userName ? (
                <NavDropdown title={userName} id="basic-nav-dropdown">
                  <NavDropdown.Item
                    onClick={() => {
                      localStorage.removeItem("userName");
                      window.location.reload();
                    }}
                  >
                    تسجيل الخروج
                  </NavDropdown.Item>
                </NavDropdown>
              ) : (
                <NavDropdown title="تسجيل الدخول" id="basic-nav-dropdown">
                  <LinkContainer to="/login">
                    <NavDropdown.Item>تسجيل الدخول</NavDropdown.Item>
                  </LinkContainer>
                  <LinkContainer to="/register">
                    <NavDropdown.Item>إنشاء حساب</NavDropdown.Item>
                  </LinkContainer>
                </NavDropdown>
              )}


            </Nav>

            <div style={{ display: "flex", gap: "15px", alignItems: "center" }}>


              <Button variant="light" className="cart-btn" onClick={() => setShow(true)}>
                <FiShoppingCart style={{ fontSize: "1.2rem" }} />
                <span className="cart-badge">{cartItems.length}</span>
              </Button>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Modal show={show} onHide={() => setShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>سلة المشتريات</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {cartItems.length === 0 ? (
            <p>السلة فارغة</p>
          ) : (
            cartItems.map((item) => (
              <div key={item.id} className="cart-item" style={{ marginBottom: '15px', borderBottom: '1px solid #ddd', paddingBottom: '10px' }}>
                <img src={item.image_url} alt={item.name} style={{ width: "60px", height: "60px", objectFit: "cover", marginRight: "10px", borderRadius: "4px" }} />
                <div style={{ display: "inline-block", verticalAlign: "top" }}>
                  <div><strong>{item.name}</strong></div>
                  <div>الكمية: {item.quantity}</div>
                  <div>المقاس: {item.size || 'غير محدد'}</div>
                  <div>اللون: {item.color || 'غير محدد'}</div>
                  <div>السعر: {item.price} $</div>
                  <button
                    onClick={() => removeFromCart(item.product_id)}
                    style={{ marginTop: '5px', color: 'red', background: 'none', border: 'none', cursor: 'pointer' }}
                  >
                    حذف
                  </button>
                </div>
              </div>
            ))
          )
          }
          <button
            onClick={handlePurchase}
            style={{
              marginTop: '15px',
              backgroundColor: '#28a745',
              color: 'white',
              padding: '10px 20px',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer'
            }}
          >
            شراء جميع المنتجات
          </button>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default EnhancedNavbar;
