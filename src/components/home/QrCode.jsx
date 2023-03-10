const QrCode = ({ user, dispatch, toggle }) => {
    return (
        <div className={`${toggle ? '' : 'hidden'} absolute inset-0 flex justify-center items-center text-center bg-modal p-2`}>
            <div className="w-full h-full bg-white relative text-center z-20">
                <i className="fa fa-times absolute top-4 right-4 text-xl cursor-pointer" onClick={dispatch()} />
                <div className="text-center mt-20">
                    <p className="mb-10">Show the QR Code below to the cashier!</p>
                    <div className="flex justify-center">
                        {user && user.result &&
                            <img src={user.result.qrcode} alt="QR Code" className="w-40 h-40" />
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}

export default QrCode;