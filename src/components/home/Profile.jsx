import { useContext } from "react";
import { UserContext } from "../../context/userContext";

const Profile = ({ user }) => {
    const { dispatchUser } = useContext(UserContext);
    return (
        <div className="w-full h-fit rounded shadow-md p-4 bg-white">
            {user.user && user.user.result &&
                <>
                    <p className="mb-1">{user.user.result.greeting},</p>
                    <p className="font-medium mb-3">{user.user.result.name}</p>
                    <div className='flex items-center gap-1 before:content-[""] before:border before:border-dashed before:self-stretch p-3'>
                        <img src={user.user.result.qrcode} alt="" className='rounded-full w-20 h-20 mr-2 item cursor-pointer' onClick={dispatchUser({ type: 'TOGGLE', payload: true })} />
                        <div className='w-full ml-2'>
                            <div className='flex justify-between items-center mb-4'>
                                <p>Saldo</p>
                                <p className='font-medium text-black'>{user.user.result.saldo}</p>
                            </div>
                            <div className='flex justify-between items-center'>
                                <p>Points</p>
                                <p className='font-medium text-teal-500'>{user.user.result.point}</p>
                            </div>
                        </div>
                    </div>
                </>
            }
        </div>
    );
}

export default Profile;