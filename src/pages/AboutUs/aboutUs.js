import React from 'react';
import './aboutUs.css';

function AboutUs() {
  return (
    <div className="about-container">
      <div className="about-card">
        <h1 className="about-title">من نحن</h1>
        <p className="about-paragraph">
          في قلب كل طفل، توجد قصة تنتظر أن تُروى، وفي كل يوم، فرصة جديدة ليتألق.
          في <span className="highlight">بيبي لاند</span> نؤمن بأن ملابس الأطفال ليست مجرد أزياء،
          بل هي أدوات تعبير عن شخصيتهم وانعكاس لبراءتهم.
        </p>

        <h2 className="section-title">قصتنا</h2>
        <p className="about-paragraph">
          <span className="highlight">بيبي لاند</span> لم يولد صدفة، بل هو ثمرة شغف عميق
          بتقديم الأفضل لأطفالنا. بدأنا رحلتنا من إدراكنا لحاجة الأمهات إلى ملابس تجمع بين الجودة العالية
          والتصميم العصري والراحة المطلقة. ملابس تدعم حركة أطفالهم وتسمح لهم باللعب والاستكشاف بحرية.
        </p>

        <h2 className="section-title">تواصل معنا</h2>
        <p className="contact-number">📞 92506444</p>
      </div>
    </div>
  );
}

export default AboutUs;
