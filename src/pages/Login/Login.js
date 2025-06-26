import "./Login.css"
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import logo from "../../log.jpg"
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";


export default function Login() {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");
    const handleLogin = () => {
        axios.post("http://babyland-001-site1.stempurl.com/Login.php", {
            email: email,
            password: password
        })
            .then(res => {
                console.log("Response Data:", res.data);
                setMessage(res.data.message);
                if (res.data.success) {
                    // تسجيل الدخول ناجح
                    localStorage.setItem("userName", res.data.name);
                    setMessage(res.data.message);

                    window.location.reload();
                    alert("✅ " + res.data.message);
                } else {
                    // كلمة المرور أو الإيميل خطأ
                    alert("❌ " + res.data.message);
                    console.log(res.data.message)
                }
            })
            .catch(error => {
                console.error("خطأ في الاتصال:", error);
                alert("⚠️ حدث خطأ في الاتصال بالخادم");
            });
    };

    return (
        <div className="login">

            <div className="login-content">
                <img src={logo} style={{ width: "50%", display: "flex", margin: "auto", marginBottom: "10px" }} />
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Control
                        type="email"
                        placeholder={"البريد الإلكتروني"}
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Control
                        type="password"
                        placeholder={"كلمة المرور"}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </Form.Group>
                <div className="btn-action">
                    <Button id="btnP" variant="primary" onClick={handleLogin}>تسجيل الدخول</Button>
                </div>
            </div>
        </div>
    )
}
