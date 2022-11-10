import React, { useState } from 'react';
import { RegisterWrapper } from './style';
import Input from '../../../Component/input';
import { NavLink } from 'react-router-dom';
import { useEffect } from 'react';
import LoginPage from '../Page/Auth/LoginPage';
import Meta from '../../../Component/Meta';
import Loading from '../Loading';

const Register = props => {
    const [state, setState] = useState({
        username: '',
        pass: '',
        repass: ''
    })
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        setIsLoading(true);
        setTimeout(() => {
            setIsLoading(false);
        }, 2000);
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }, [])
    const [type, setType] = useState('password')
    const handleChangeCheck = () => {
        setType(type === "password" ? 'text' : 'password');
    }
    const handleChangeInput = event => {
        const { type, name, value } = event.target;
        setState({
            [name]: value
        })


    }
    if (isLoading) return <>
        <Meta
            image="http://www.shoppanda.net/assets/images/register/clothes1.jpg"
            description='Đăng ký để trở thành thành viên  của Shop Panda nào !!!'
            url={`http://www.shoppanda.net/dang-ky/`}
            title="Đăng Ký"
            titlePage="Đăng Ký"
        />
        <Loading />
    </>
    return (
        <RegisterWrapper className="form-login-register register" bgImage="./assets/images/register/clothes1.jpg" backgroundImage="./assets/images/register/clothes2.jpg">

            <Meta
                image="http://www.shoppanda.net/assets/images/register/clothes1.jpg"
                description='Đăng ký để trở thành thành viên  của Shop Panda nào !!!'
                url={`http://www.shoppanda.net/dang-ky/`}
                title="Đăng Ký"
                titlePage="Đăng Ký"
            />
            <div className="container">
                <form action="" className="form-login-register">
                    <h3 className="name-form">
                        Đăng ký

                    </h3>
                    <Input
                        onChange={handleChangeInput}
                        id="user"
                        type="text"
                        value={state.username}
                        name="username"
                        placeholder="Tên đăng nhập..." />
                    <Input
                        onChange={handleChangeInput}
                        id="pass"
                        type={type}
                        value={state.pass}
                        name="pass"
                        placeholder="Mật khẩu..." />
                    <Input
                        onChange={handleChangeInput}
                        id="pass"
                        type={type}
                        value={state.repass}
                        name="repass"
                        placeholder="Nhập lại mật khẩu..." />
                    <div className="forgot-pass">
                        <div className="checkbox">
                            <Input id="showPass" onChange={handleChangeCheck} type="checkbox" name="showPass" value="" nameLabel="Hiển thị mật khẩu" />
                        </div>
                        <NavLink exact to="/dang-nhap" className="have-acount">Có tài khoản</NavLink>
                    </div>
                    <Input type="submit" value="ĐĂNG KÝ" name="submit" />
                    <span className='or'>Hoặc</span>
                    <LoginPage />
                </form>

            </div>
        </RegisterWrapper>
    );
}
export default Register;