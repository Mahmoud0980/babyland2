import "./Register.css"
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import logo from "../../log.jpg"
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Register() {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [username, setUsername] = useState("");
    const handleRegister = async () => {
        try {
            const response = await axios.post("/register.php", {
                mode: 'CORS',
                credentials: 'include',
                headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
                email,
                password,
                username,
            });

            if (response.data.success) {
                alert("تم إنشاء الحساب بنجاح");
                localStorage.setItem("userName", username);
                navigate("/"); // إعادة التوجيه للصفحة الرئيسية
            } else {
                alert("فشل في إنشاء الحساب: " + response.data.message);
            }
        } catch (err) {
            console.error(err);
            alert("حدث خطأ في الاتصال بالخادم");
        }
    };

    return (

        <div className="register">

            <div className="register-content">

                <img src={logo} style={{ width: "50%", display: "flex", margin: "auto", marginBottom: "10px" }} />
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Control
                        type="text"
                        placeholder={"اسم المستخدم"}
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Control
                        type="email"
                        placeholder="البريد الإلكتروني"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Control
                        type="password"
                        placeholder="كلمة المرور"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </Form.Group>
                <div className="btn-action">
                    <Button id="btnP" variant="primary" onClick={handleRegister}>
                        إنشاء حساب
                    </Button>
                </div>
            </div>
        </div>
    )
}
