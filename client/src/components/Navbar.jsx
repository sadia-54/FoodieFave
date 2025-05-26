import React, { useState, useContext } from 'react';
import { assets } from '@assets/assets';
import { Link, useNavigate } from 'react-router-dom';
import { StoreContext } from '../context/StoreContext';

const Navbar = ({ setShowLogin }) => {
  const [menu, setMenu] = useState('menu');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const { getTotalCartAmount, token, setToken } = useContext(StoreContext);
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem('token');
    setToken('');
    navigate('/');
  };

  // Close mobile menu on link click
  const handleLinkClick = (menuName) => {
    setMenu(menuName);
    setMobileMenuOpen(false);
  };

  return (
    <nav className="py-5 px-4 flex justify-between items-center  relative z-50">
      {/* Logo */}
      <Link to="/">
        <img src={assets.logo} alt="Logo" className="w-[40px] sm:w-[45px] md:w-[55px] lg:w-[60px] rounded-[13px]" />
      </Link>

      {/* Desktop Menu */}
      <ul className="hidden lg:flex gap-5 text-[tomato] text-[18px] list-none">
        <Link
          to="/"
          onClick={() => handleLinkClick('home')}
          className={`${menu === 'home' ? 'pb-[2px] border-b-2 border-lightslategray' : ''}`}
        >
          Home
        </Link>
        <a
          href="#explore-menu"
          onClick={() => handleLinkClick('menu')}
          className={`${menu === 'menu' ? 'pb-[2px] border-b-2 border-lightslategray' : ''}`}
        >
          Menu
        </a>
        <a
          href="#app-download"
          onClick={() => handleLinkClick('mobile-app')}
          className={`${menu === 'mobile-app' ? 'pb-[2px] border-b-2 border-lightslategray' : ''}`}
        >
          Mobile-App
        </a>
        <a
          href="#footer"
          onClick={() => handleLinkClick('contact-us')}
          className={`${menu === 'contact-us' ? 'pb-[2px] border-b-2 border-lightslategray' : ''}`}
        >
          Contact Us
        </a>
      </ul>

      {/* Mobile Hamburger */}
      <div className="lg:hidden flex items-center gap-6">
        {/* Cart Icon */}
        <div className="relative">
          <Link to="/cart">
            <img src={assets.basket_icon} alt="Cart" className="w-6" />
          </Link>
          {getTotalCartAmount() > 0 && (
            <div className="absolute w-2.5 h-2.5 bg-[tomato] rounded-full top-[-6px] right-0"></div>
          )}
        </div>

        {/* Hamburger Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="focus:outline-none"
          aria-label="Toggle menu"
        >
          <svg
            className="w-7 h-7 text-[tomato]"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {mobileMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <ul className="lg:hidden absolute top-full left-0 right-0 bg-white shadow-md flex flex-col gap-4 py-4 px-6 text-[tomato] text-lg list-none z-40">
          <Link
            to="/"
            onClick={() => handleLinkClick('home')}
            className={`${menu === 'home' ? 'font-semibold border-b-2 border-lightslategray pb-1' : ''}`}
          >
            Home
          </Link>
          <a
            href="#explore-menu"
            onClick={() => handleLinkClick('menu')}
            className={`${menu === 'menu' ? 'font-semibold border-b-2 border-lightslategray pb-1' : ''}`}
          >
            Menu
          </a>
          <a
            href="#app-download"
            onClick={() => handleLinkClick('mobile-app')}
            className={`${menu === 'mobile-app' ? 'font-semibold border-b-2 border-lightslategray pb-1' : ''}`}
          >
            Mobile-App
          </a>
          <a
            href="#footer"
            onClick={() => handleLinkClick('contact-us')}
            className={`${menu === 'contact-us' ? 'font-semibold border-b-2 border-lightslategray pb-1' : ''}`}
          >
            Contact Us
          </a>
          {/* Sign In / Profile */}
          {!token ? (
            <button
              onClick={() => {
                setShowLogin(true);
                setMobileMenuOpen(false);
              }}
              className="mt-2 bg-transparent text-[tomato] border border-[tomato] px-6 py-2 rounded-full cursor-pointer transition duration-300 hover:bg-[rgb(244,225,230)]"
            >
              Sign In
            </button>
          ) : (
            <div className="flex flex-col gap-3 mt-2 border border-[tomato] rounded p-3 bg-[#fff2ef]">
              <div
                onClick={() => {
                  navigate('/myorders');
                  setMobileMenuOpen(false);
                }}
                className="flex items-center gap-2 cursor-pointer hover:text-[tomato]"
              >
                <img className="w-5" src={assets.bag_icon} alt="Orders" />
                <p>Orders</p>
              </div>
              <hr />
              <div
                onClick={() => {
                  logout();
                  setMobileMenuOpen(false);
                }}
                className="flex items-center gap-2 cursor-pointer hover:text-[tomato]"
              >
                <img className="w-5" src={assets.logout_icon} alt="Logout" />
                <p>Logout</p>
              </div>
            </div>
          )}
        </ul>
      )}

      {/* Desktop Cart and Profile */}
      <div className="hidden lg:flex items-center gap-8">
        <div className="relative">
          <Link to="/cart">
            <img src={assets.basket_icon} alt="Cart" className="w-[22px]" />
          </Link>
          {getTotalCartAmount() > 0 && (
            <div className="dot absolute w-2.5 h-2.5 bg-[tomato] rounded-full -top-2 -right-1"></div>
          )}
        </div>
        {!token ? (
          <button
            onClick={() => setShowLogin(true)}
            className="bg-transparent text-[tomato] border border-[tomato] px-[30px] py-[10px] rounded-full cursor-pointer transition duration-300 hover:bg-[rgb(244,225,230)]"
          >
            Sign In
          </button>
        ) : (
          <div className="navbar-profile relative group">
            <img src={assets.profile_icon} alt="Profile" className="cursor-pointer" />
            <ul className="nav-profile-dropdown absolute hidden right-0 z-10 group-hover:flex flex-col gap-2 bg-[#fff2ef] py-3 px-6 rounded border border-[tomato] list-none">
              <li
                onClick={() => navigate('/myorders')}
                className="flex items-center gap-2 cursor-pointer hover:text-[tomato]"
              >
                <img className="w-5" src={assets.bag_icon} alt="Orders" />
                <p>Orders</p>
              </li>
              <hr />
              <li
                onClick={logout}
                className="flex items-center gap-2 cursor-pointer hover:text-[tomato]"
              >
                <img className="w-5" src={assets.logout_icon} alt="Logout" />
                <p>Logout</p>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
