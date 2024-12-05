import React from 'react';
import Login, { Email, Logo, Title, Submit } from '@react-login-page/page4';
import { useNavigate } from 'react-router-dom';

const css = {
    '--login-bg': '#070221',
    '--login-color': '#fff',
    '--login-logo': '#070221',
    '--login-inner-bg': '#474747',
    '--login-banner-bg': '#fbfbfb',
    '--login-input': '#eee',
    '--login-input-icon': '#dddddd',
    '--login-input-bg': 'transparent',
    '--login-input-border': 'rgba(0, 0, 0, 0.13)',
    '--login-input-placeholder': '#d2d2d2',
    '--login-btn': '#fff',
    '--login-btn-bg': '#b08bf8',
    '--login-btn-bg-focus': '#b08bf8',
    '--login-btn-bg-hover': '#b08bf8',
    '--login-btn-bg-active': '#b08bf8',
};

const LoginPage = () => {
    const navigate = useNavigate(); // Hook do nawigacji

    const handleSubmit = (e) => {
        const username = document.getElementsByName('username')[0].value;
        const password = document.getElementsByName('password')[0].value;

        e.preventDefault();

        const url = `http://localhost:8080/api/users/login/${username}/${password}`;

        fetch(url, {
            method: 'POST',
        })
            .then((response) => {
                if (response.status === 200) {
                    response.json().then((data) => {
                        localStorage.setItem('user', JSON.stringify(data));
                    });
                    navigate('/app');
                } else {
                    alert('Nieporawny login lub hasło');
                }
            })
            .catch((error) => {

            });
    };

    return (
        <Login style={{ height: '100vh', ...css }}>
            <Title style={{ margin: '0 auto' }}>Zaloguj się do Taskera</Title>
            <Logo visible={false}></Logo>
            <Email
                name="username"
                label="Nazwa użytkownika"
                type="text"
                index={1}
                placeholder="Nazwa użytkownika"
            />
            <Submit onClick={handleSubmit}>Zaloguj się</Submit>
        </Login>
    );
};

export default LoginPage;
