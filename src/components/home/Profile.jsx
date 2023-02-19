const Profile = ({ user }) => {
    return (
        <div className="w-full h-fit rounded shadow-md p-3 bg-white">
            <p className="mb-3">Good {user.greetings},</p>
            <p className="font-medium">{user.name}</p>
            <div className='flex items-center gap-1 before:content-[""] before:border before:border-dashed before:self-stretch p-3'>
                <img src={user.qrcode} alt="" className='rounded-full w-20 h-20 mr-2 item' />
                <div className='w-full ml-2'>
                    <div className='flex justify-between items-center mb-4'>
                        <p>Saldo</p>
                        <p className='font-medium text-black'>Rp {user.saldo}</p>
                    </div>
                    <div className='flex justify-between items-center'>
                        <p>Points</p>
                        <p className='font-medium text-teal-500'>{user.point}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Profile;