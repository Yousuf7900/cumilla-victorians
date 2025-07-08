import banner from '../../assets/images/banner-main.png'

const Banner = ({handleFreeCredit}) => {
    return (
        <div>
            <div className='mt-6'>
                <div className='bg-[url(src/assets/images/bg-shadow.png)] bg-cover bg-gray-950 rounded-3xl p-16 text-center space-y-6'>
                    <img className='mx-auto' src={banner} alt="Banner-img" />
                    <h1 className='text-5xl font-bold text-white'>Assemble Your Ultimate Dream 11 Cricket Team</h1>
                    <p className='text-2xl font-medium text-gray-400'>Beyond Boundaries Beyond Limits</p>
                    <button onClick={() => handleFreeCredit()} className='bg-[#E7FE29] border-2 p-3.5 rounded-2xl outline-2 outline-[#E7FE29] outline-offset-4 font-bold'><a href="#">Claim Free Credit</a></button>
                </div>
            </div>
        </div>
    );
};

export default Banner;