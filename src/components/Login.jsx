import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/logo technopartner.png';
import { AuthContext } from '../context/authcontext';

const Login = () => {
    const { auth, dispatchAuth } = useContext(AuthContext);
    const navigate = useNavigate();
    const [login, setLogin] = useState({
        email: '',
        password: ''
    });
    const handleChange = (e) => {
        setLogin((value) => ({
            ...value,
            [e.target.name]: e.target.value
        }))
    }
    const handleSubmitLogin = async (e) => {
        e.preventDefault()
        try {
            const response = await axios.post('https://soal.staging.id/oauth/token', {
                grant_type: 'password',
                client_secret: '0a40f69db4e5fd2f4ac65a090f31b823',
                client_id: 'e78869f77986684a',
                username: login.email,
                password: login.password
            });
            dispatchAuth({
                type: 'LOGIN',
                payload: response.data
            })
            setLogin({
                email: '',
                password: ''
            })
        } catch (err) {
            dispatchAuth({
                type: 'LOGIN_ERROR',
                payload: err.message
            })
        }
    }

    useEffect(() => {
        if (auth.auth.access_token) return navigate(`user/${auth.auth.expires_in}`)
    }, [auth.auth.access_token])

    return (
        <div className='w-full text-center bg-white'>
            <img src={logo} alt="logo" className='w-full h-25 mb-6' />
            <form className='px-20' onSubmit={handleSubmitLogin}>
                <div className='mb-4'>
                    <label htmlFor="email" className='text-sm mb-3'>Email</label>
                    <input type="email" name="email" id="email" className='w-full p-2 border' onChange={handleChange} value={login.email} />
                </div>
                <div className='mb-4'>
                    <label htmlFor="password" className='text-sm mb-3'>Password</label>
                    <input type="password" name="password" id="password" className='w-full p-2 border' onChange={handleChange} value={login.password} />
                </div>
                <input type="submit" value="Login" className='w-full p-2 bg-blue-900 rounded text-sm font-medium cursor-pointer' />
            </form>
        </div>
    );
}

export default Login;