import React, { useState } from 'react';
import './ContactUs.css'; // تأكد من ربط ملف CSS

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('تم الإرسال:', formData);
    setIsSubmitted(true);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="contact-container">
      <div className="contact-card">
        <h1 className="contact-title">اتصل بنا</h1>

        {isSubmitted ? (
          <div className="success-message">
            <p>شكرًا لتواصلك معنا! سنرد عليك قريبًا.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-group">
              <label htmlFor="name">الاسم الكامل:</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">البريد الإلكتروني:</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">الرسالة:</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="5"
                required
              ></textarea>
            </div>

            <button type="submit" className="submit-button">إرسال</button>
          </form>
        )}

        <div className="contact-info">
          <h2 className="section-title">معلومات التواصل</h2>
          <p>📧 info@example.com</p>
          <p>📞 +963 123 456 789</p>
          <p>📍 دمشق، سوريا</p>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
