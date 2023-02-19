import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import home2 from '../assets/home2.png';
import menu2 from '../assets/menu2.png';
import { AuthContext } from '../context/authcontext';
import { MenuContext } from '../context/menuContext';

const NavBar = () => {
    const navigate = useNavigate();
    const { auth } = useContext(AuthContext);
    const { dispatchMenu } = useContext(MenuContext);
    const handleFetchMenu = async () => {
        try {
            const response = await axios.post('https://soal.staging.id/api/menu', {
                show_all: 1
            }, {
                headers: {
                    Authorization: `${auth.auth.token_type} ${auth.auth.access_token}`
                }
            });
            dispatchMenu({
                type: 'REQUEST_MENU',
                payload: response.data
            });
        } catch (err) {
            dispatchMenu({
                type: 'REQUEST_ERROR',
                payload: err.message
            })
        }
    }
    useEffect(() => {
        if (!auth.auth.access_token) return navigate('/')
    }, [auth.auth.access_token])
    return (
        <nav className='fixed bottom-0 w-full p-3 shadow-md bg-white'>
            <div className='w-full bg-white flex justify-around items-center'>
                <Link to={`/user/${auth.auth.expires_in}/home`}>
                    <img src={home2} alt="disable-home-icon" className='w-6 h-6' />
                </Link>
                <Link to={`/user/${auth.auth.expires_in}/menu`} onClick={handleFetchMenu}>
                    <img src={menu2} alt="disable-menu-icon" className='w-6 h-6' />
                </Link>
            </div>
        </nav>
    );
}

export default NavBar;