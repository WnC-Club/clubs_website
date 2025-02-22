
import './f1-1.css';
import { FaDiscord, FaFacebookF, FaGlobe, FaInstagram, FaTwitter , FaCode } from 'react-icons/fa';

 const Footer = () => {
  return (
    <footer className='bg-gray-800 px-4 md:px-16 lg:px-28 text-gray-300'>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-8 py-8'>

       
          {/* Logo will go here */}
          <div className="flex items-center space-x-2 text-6xl font-bold text-blue-500 px-3">
      <FaCode />
      <FaGlobe />
      <FaCode />
      <span className='text-3xl px-5'>Innovation starts with code</span>
    </div>
         
      

        <div>
          <h2 className='text-lg font-bold mb-4'>Quick Links</h2>
          <ul>
            <li><a href='#' className='hover:underline'>Domains</a></li>
            <li><a href='#' className='hover:underline'>Contact Us</a></li>
            <li><a href='#' className='hover:underline'>Office Bearers</a></li>
            <li><a href='#' className='hover:underline'>About Us</a></li>
          </ul>
        </div>

        <div>
          <h2 className='text-lg font-bold mb-4'>Follow Us</h2>
          <ul className='flex flex-col space-y-2'>
            <li className='flex items-center space-x-2'>
              {" "}
              <FaFacebookF className='text-blue-300' /> {" "}
              <a href='#' className='hover:underline'> 
                Facebook
                </a>
            </li>
            <li className='flex items-center space-x-2'>
              <FaTwitter className='text-sky-500' />
              <a href='#' className='hover:underline'>Twitter</a>
            </li>
            <li className='flex items-center space-x-2'>
              <FaDiscord className='text-violet-500' />
              <a href='#' className='hover:underline'>Discord</a>
            </li>
            <li className='flex items-center space-x-2'>
              <FaInstagram className='text-orange-300' />
              <a href='#' className='hover:underline'>Instagram</a>
            </li>
          </ul>
        </div>
      </div>

      <div className='border-t border-gray-600 p-4 text-center'>
        <p>Copyright © 2025 Web and Coding Club NITP. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
