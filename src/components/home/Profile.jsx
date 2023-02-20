const Profile = ({ user, dispatch }) => {
    return (
        <div className="w-full h-fit rounded shadow-md p-4 bg-white">
            {user && user.result &&
                <>
                    <p className="mb-1">{user.result.greeting},</p>
                    <p className="font-medium mb-3">{user.result.name}</p>
                    <div className='flex items-center gap-1 before:content-[""] before:border before:border-dashed before:self-stretch p-3'>
                        <img src={user.result.qrcode} alt="" className='rounded-full w-20 h-20 mr-2 item cursor-pointer' onClick={dispatch()} />
                        <div className='w-full ml-2'>
                            <div className='flex justify-between items-center mb-4'>
                                <p>Saldo</p>
                                <p className='font-medium text-black'>{user.result.saldo}</p>
                            </div>
                            <div className='flex justify-between items-center'>
                                <p>Points</p>
                                <p className='font-medium text-teal-500'>{user.result.point}</p>
                            </div>
                        </div>
                    </div>
                </>
            }
        </div>
    );
}

export default Profile;