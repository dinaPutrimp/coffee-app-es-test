import axios from 'axios';
import { useContext, useEffect } from 'react';
import logo from '../../assets/logo technopartner.png';
import { AuthContext } from '../../context/authcontext';
import { UserContext } from '../../context/userContext';
import Profile from './Profile';
import QrCode from './QrCode';

const Home = () => {
    const { auth } = useContext(AuthContext);
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
    return (
        <div className="w-full">
            <div>
                <img src={logo} alt="logo" className='h-16' />
            </div>
            <div className='p-6 bg-motif'>
                {user && user.user && <Profile user={user.user} dispatch={() => dispatchUser({ type: 'TOGGLE', payload: true })} />}
            </div>
            <QrCode user={user.user} dispatch={() => dispatchUser({ type: 'TOGGLE', payload: true })} toggle={user.toggleModal} />
        </div>
    );
}

export default Home;