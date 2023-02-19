import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import logo from '../../assets/logo technopartner.png';
import { AuthContext } from '../../context/authcontext';
import Profile from './Profile';

const Home = () => {
    const { auth, dispatchAuth } = useContext(AuthContext);
    const [user, setUser] = useState({});
    useEffect(() => {
        if (!auth.auth.access_token) return navigate('/');
        async function getUserData() {
            try {
                const response = await axios.get('https://soal.staging.id/api/home', {
                    headers: {
                        Authorization: `${auth.auth.token_type} ${auth.auth.access_token}`,
                    }
                });
                setUser(response.data);
                console.log(response)
            } catch (err) {
                console.log(err)
            }
        };
        getUserData();
    }, [auth.auth.expires_in]);
    console.log(user)
    return (
        <div className="w-full">
            <div>
                <img src={logo} alt="logo" className='h-16' />
            </div>
            <div className='p-6 bg-motif'>
                <Profile user={user.user} />
            </div>
        </div>
    );
}

export default Home;