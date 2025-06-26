import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Form, Button, Card, Alert, FloatingLabel } from 'react-bootstrap';
import { FaUser, FaLock, FaSignInAlt } from 'react-icons/fa';
import './Login.css';

const Login = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.username.trim()) newErrors.username = 'يجب إدخال اسم المستخدم';
    if (!formData.password) newErrors.password = 'يجب إدخال كلمة المرور';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      setIsLoading(true);
      try {

        await new Promise(resolve => setTimeout(resolve, 1500));
        console.log('تم التسجيل بنجاح:', formData);
        navigate('/home');
      } catch (error) {
        console.error('فشل تسجيل الدخول:', error);
        setErrors({ submit: 'اسم المستخدم أو كلمة المرور غير صحيحة' });
      } finally {
        setIsLoading(false);
      }
    }
  };

  return (
    <Container className="login-container">
      <Card className="login-card">
        <Card.Header className="login-header">
          <h2 className="text-center">
            <FaSignInAlt className="me-2" />
            تسجيل الدخول
          </h2>
        </Card.Header>
        <Card.Body>
          {errors.submit && <Alert variant="danger">{errors.submit}</Alert>}

          <Form onSubmit={handleSubmit}>
            <FloatingLabel controlId="username" label="اسم المستخدم" className="mb-3">
              <Form.Control
                type="text"
                name="username"
                value={formData.username}
                onChange={handleChange}
                isInvalid={!!errors.username}
                placeholder="أدخل اسم المستخدم"
              />
              <Form.Control.Feedback type="invalid">
                {errors.username}
              </Form.Control.Feedback>
              <FaUser className="input-icon" />
            </FloatingLabel>

            <FloatingLabel controlId="password" label="كلمة المرور" className="mb-4">
              <Form.Control
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                isInvalid={!!errors.password}
                placeholder="أدخل كلمة المرور"
              />
              <Form.Control.Feedback type="invalid">
                {errors.password}
              </Form.Control.Feedback>
              <FaLock className="input-icon" />
            </FloatingLabel>

            <Button
              variant="primary"
              type="submit"
              className="w-100 login-btn"
              disabled={isLoading}
            >
              {isLoading ? 'جاري المعالجة...' : 'تسجيل الدخول'}
            </Button>
          </Form>

          <div className="login-links mt-3">
            <a href="/forgot-password" className="text-muted">نسيت كلمة المرور؟</a>
            <span className="mx-2">|</span>
            <a href="/register" className="text-primary">إنشاء حساب جديد</a>
          </div>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Login;