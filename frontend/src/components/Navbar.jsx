import React, { useContext, useState, useEffect } from 'react';
import { assets } from '../assets/assets';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';

const Navbar = () => {
    const [visible, setVisible] = useState(false);
    const { setShowSearch, getCartCount, navigate, token, setToken, setCartItems } = useContext(ShopContext);
    const location = useLocation(); // Get the current route
    const [underlineStyle, setUnderlineStyle] = useState({ left: 0, width: 0 });

    const logout = () => {
        navigate('/login');
        localStorage.removeItem('token');
        setToken('');
        setCartItems({});
    };

    const redirectToAdmin = () => {
        window.open('https://re-fashify-adminpanel.vercel.app', '_blank');
    };

    const updateUnderline = () => {
        const activeLink = document.querySelector('.active-link');
        if (activeLink) {
            const rect = activeLink.getBoundingClientRect();
            const parentRect = activeLink.parentElement.getBoundingClientRect();
            setUnderlineStyle({
                left: rect.left - parentRect.left + rect.width / 4, // Shift left by 1/4th of the button width
                width: rect.width / 2, // Set the width to half of the button
            });
        }
    };

    useEffect(() => {
        updateUnderline();
    }, [location]);

    return (
        <div className="relative flex items-center justify-between py-5 font-medium">
            <Link to="/">
                <img src={assets.logo} className="w-36" alt="" />
            </Link>

            <ul className="relative hidden sm:flex gap-5 text-sm text-gray-700">
                {/* Animated underline */}
                <div
                    className="absolute h-[2px] bg-gray-700 transition-all duration-300"
                    style={{
                        left: `${underlineStyle.left}px`,
                        width: `${underlineStyle.width}px`,
                        bottom: '-4px', // Adjust the gap between the underline and text
                    }}
                ></div>

                <NavLink
                    to="/"
                    className={({ isActive }) =>
                        isActive ? 'active-link flex flex-col items-center gap-1' : 'flex flex-col items-center gap-1'
                    }
                    onClick={updateUnderline}
                >
                    <p>HOME</p>
                </NavLink>
                <NavLink
                    to="/collection"
                    className={({ isActive }) =>
                        isActive ? 'active-link flex flex-col items-center gap-1' : 'flex flex-col items-center gap-1'
                    }
                    onClick={updateUnderline}
                >
                    <p>COLLECTION</p>
                </NavLink>
                <NavLink
                    to="/about"
                    className={({ isActive }) =>
                        isActive ? 'active-link flex flex-col items-center gap-1' : 'flex flex-col items-center gap-1'
                    }
                    onClick={updateUnderline}
                >
                    <p>ABOUT</p>
                </NavLink>
                <NavLink
                    to="/contact"
                    className={({ isActive }) =>
                        isActive ? 'active-link flex flex-col items-center gap-1' : 'flex flex-col items-center gap-1'
                    }
                    onClick={updateUnderline}
                >
                    <p>CONTACT</p>
                </NavLink>
            </ul>

            <div className="flex items-center gap-6">
                <img
                    onClick={() => {
                        setShowSearch(true);
                        navigate('/collection');
                    }}
                    src={assets.search_icon}
                    className="w-5 cursor-pointer"
                    alt=""
                />

                <div className="group relative">
                    <img
                        onClick={() => (token ? null : navigate('/login'))}
                        className="w-5 cursor-pointer"
                        src={assets.profile_icon}
                        alt=""
                    />
                    {/* Dropdown Menu */}
                    {token && (
                        <div className="group-hover:block hidden absolute dropdown-menu right-0 pt-4">
                            <div className="flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded">
                                <p className="cursor-pointer hover:text-black">My Profile</p>
                                <p onClick={() => navigate('/orders')} className="cursor-pointer hover:text-black">
                                    Orders
                                </p>
                                <p onClick={redirectToAdmin} className="cursor-pointer hover:text-black">
                                    Admin
                                </p>
                                <p onClick={logout} className="cursor-pointer hover:text-black">
                                    Logout
                                </p>
                            </div>
                        </div>
                    )}
                </div>
                <Link to="/cart" className="relative">
                    <img src={assets.cart_icon} className="w-5 min-w-5" alt="" />
                    <p className="absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]">
                        {getCartCount()}
                    </p>
                </Link>
                <img
                    onClick={() => setVisible(true)}
                    src={assets.menu_icon}
                    className="w-5 cursor-pointer sm:hidden"
                    alt=""
                />
            </div>
        </div>
    );
};

export default Navbar;