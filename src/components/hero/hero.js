import "./Hero.css"
import heroImg from "../../assets/image/image10.png"
import Button from "../../components/Button/ButtonP"
const Hero = () => {
    return (

        <div className="hero">
            <div className="img">
                <img src={heroImg} alt="Baby Land Banner" />
            </div>
            <div className="content">
                <h2>
                    مرحباً بك في <span>Baby Land</span>
                </h2>
                <p>موقع متخصص في بيع الملابس لجميع أعمار الأطفال بجودة وأناقة.</p>
                <button>تسوق الآن</button>
            </div>
        </div>



    );
};

export default Hero;
