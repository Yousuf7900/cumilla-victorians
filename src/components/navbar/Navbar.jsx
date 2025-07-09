
import logo from '../../assets/images/logo.png'
import { HiMiniCurrencyDollar } from "react-icons/hi2";

const Navbar = ({ Coins }) => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-white z-[999]">
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <img src={logo} alt="Team-logo" className="h-12" />
          <ul className="flex gap-12 items-center text-gray-600">
            <li><a onClick={(e) => e.preventDefault()} href="#">Home</a></li>
            <li><a onClick={(e) => e.preventDefault()} href="#">Fixture</a></li>
            <li><a onClick={(e) => e.preventDefault()} href="#">Teams</a></li>
            <li><a onClick={(e) => e.preventDefault()} href="#">Schedule</a></li>
            <li className="flex items-center gap-2 ml-2.5 border-2 border-blue-100 rounded-xl px-4 py-2 font-bold text-xl text-black">
              {Coins} Coin
              <HiMiniCurrencyDollar className="text-amber-500 text-2xl" />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
