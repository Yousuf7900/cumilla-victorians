import logo from '../../assets/images/logo.png'
import { HiMiniCurrencyDollar } from "react-icons/hi2";
const Navbar = ({Coins}) => {
    return (
        <div>
            <div className='flex justify-between items-center mt-5'>
                <img src={logo} alt="Team-logo" />
                <div>
                    <ul className='flex gap-12 items-center text-gray-600'>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Fixture</a></li>
                        <li><a href="#">Teams</a></li>
                        <li><a href="#">Schedule</a></li>
                        <li className='flex items-center gap-2 ml-2.5 border-2 border-blue-100 rounded-xl px-4 py-2 font-bold text-xl text-black'>{Coins} Coin <HiMiniCurrencyDollar className='text-amber-500 mt-0.5 text-2xl'></HiMiniCurrencyDollar></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;