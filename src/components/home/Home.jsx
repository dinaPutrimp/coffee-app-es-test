import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import logo from '../../assets/logo technopartner.png';
import { AuthContext } from '../../context/authcontext';
import { UserContext } from '../../context/userContext';
import Profile from './Profile';
import QrCode from './QrCode';

const Home = () => {
    const { auth, dispatchAuth } = useContext(AuthContext);
    const { user, dispatchUser } = useContext(UserContext);
    useEffect(() => {
        if (!auth.auth.access_token) return navigate('/');
        async function getUserData() {
            try {
                const response = await axios.get('https://soal.staging.id/api/home', {
                    headers: {
                        Authorization: `${auth.auth.token_type} ${auth.auth.access_token}`,
                    }
                });
                dispatchUser({
                    type: 'FETCH_USER',
                    payload: response.data
                })
            } catch (err) {
                dispatchUser({
                    type: 'FETCH_USER_ERROR',
                    payload: err.message
                })
            }
        };
        getUserData();
    }, [auth.auth.access_token]);
    console.log(user);
    console.log(auth);
    return (
        <div className="w-full">
            <div>
                <img src={logo} alt="logo" className='h-16' />
            </div>
            <div className='p-6 bg-motif'>
                {user && user.user && <Profile user={user} />}
            </div>
            <QrCode />
        </div>
    );
}

export default Home;