

import footer_logo from '../../assets/images/logo-footer.png'

const Footer = () => {
  return (
    <div className='bg-[#06091A] text-white'>
      <div className='max-w-7xl mx-auto px-4'>
        <div className='pt-52'>
          <img className='mx-auto' src={footer_logo} alt="footer-logo" />
        </div>
        <div className='flex flex-col md:flex-row justify-between mt-10 gap-10 md:gap-0'>
          <div>
            <h2 className='font-semibold text-lg pb-4'>About Us</h2>
            <p className='text-gray-400'>We are a passionate team <br /> dedicated to providing the best <br /> services to our customers.</p>
          </div>
          <div>
            <h2 className='font-semibold text-lg pb-4'>Quick Links</h2>
            <ul className='text-gray-400 list-disc space-y-2 mx-2'>
              <li><a onClick={(e) => e.preventDefault()} href="#">Home</a></li>
              <li><a onClick={(e) => e.preventDefault()} href="#">Services</a></li>
              <li><a onClick={(e) => e.preventDefault()} href="#">About</a></li>
              <li><a onClick={(e) => e.preventDefault()} href="#">Contact</a></li>
            </ul>
          </div>
          <div className='space-y-3'>
            <h2 className='font-semibold text-lg pb-4'>Subscribe</h2>
            <p className='text-gray-400'>Subscribe to our newsletter for the <br /> latest updates.</p>
            <div className="flex">
              <input className="rounded-l-xl px-4 py-3 border border-gray-400 bg-white text-black placeholder:text-gray-300 flex-grow" type="text" placeholder='Enter your email' />
              <button className="font-bold border border-gray-400 rounded-r-xl px-4 py-3 bg-gradient-to-r from-fuchsia-600 to-purple-600">
                <a onClick={(e) => e.preventDefault()} href="#">Subscribe</a>
              </button>
            </div>
          </div>
        </div>
      </div>
      <hr className='mt-10 pb-5 text-gray-700'/>
      <p className='text-center pb-5 text-gray-700'>@2025 All Rights Reserved by John Wick.</p>
    </div>
  );
};

export default Footer;
