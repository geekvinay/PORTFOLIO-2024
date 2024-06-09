/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useEffect } from 'react';
import { Icon } from '@iconify/react';
import menuIcon from '@iconify-icons/mdi/menu';
import closeIcon from '@iconify-icons/mdi/close';
import logoImg from "../../assets/logo.svg";
import { sectionEnum } from "../../common/enum";

interface HeaderProps {
    currSec: sectionEnum;
    setCurrSec: (section: sectionEnum) => void;
}

const Header: React.FC<HeaderProps> = ({ currSec, setCurrSec }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isHeaderVisible, setIsHeaderVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const handleMenuClick = (section: sectionEnum) => {
        setCurrSec(section);
        setIsMenuOpen(false);
    };

    const handleScroll = () => {
        if (window.scrollY < 50 && window.scrollY >= 0) {
            setIsHeaderVisible(true);
        }
        else if (window.scrollY < 250) {
            setIsHeaderVisible(false);
        } else if (window.scrollY > lastScrollY) {
            setIsHeaderVisible(true);
        } else {
            setIsHeaderVisible(true);
        }
        setLastScrollY(window.scrollY);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [lastScrollY]);

    return (
        <header className={`fixed z-40 top-0 w-screen h-fit transition-all duration-1000 ${isHeaderVisible ? 'translate-y-0' : '-translate-y-full'}`}>
            <section className="sticky top-0 header-wrapper z-50 md:px-40 px-6 min-h-20 w-full bg-gray-100/70 flex items-center justify-between backdrop-blur-md border-b border-gray-200">
                <a href='#' className="flex items-center">
                    <img src={logoImg} className="h-10 w-auto object-cover opacity-80 hover:cursor-pointer hover:opacity-100" alt="Logo" />
                </a>
                <nav className="hidden list-none md:flex text-gray-900 text-base font-semibold items-center space-x-4">
                    {Object.values(sectionEnum).map((section) => (
                        <a key={section} href={`#${section.toLowerCase()}-section`}>
                            <li
                                key={section}
                                className={`px-2 transition-all duration-100 hover:cursor-pointer hover:opacity-90 ${currSec === section ? "opacity-90 font-bold" : "opacity-50"}`}
                                onClick={() => handleMenuClick(section)}
                            >
                                {section}
                            </li>
                        </a>
                    ))}
                </nav>
                <div className="md:hidden flex items-center space-x-4">
                    <span className="text-gray-900 font-semibold text-lg">{currSec}</span>
                    <Icon icon={isMenuOpen ? closeIcon : menuIcon} className="text-gray-900 text-3xl cursor-pointer transition-all duration-300" onClick={toggleMenu} />
                </div>
            </section>
            <div className={`fixed top-0 left-0 py-[20rem] z-30 w-screen h-screen bg-[#000000a6] backdrop-blur-lg bg-opacity-75 flex flex-col justify-center items-center text-center transform transition-transform duration-200 ${isMenuOpen ? "translate-x-0" : "translate-x-full"}`}>
                <nav className="text-white text-xl space-y-6 flex flex-col justify-start items-end text-end h-[80vh] w-full px-8 list-none">
                    {Object.values(sectionEnum).map((section) => (
                        <a href={`#${section}-section`} key={section} className="cursor-pointer text-white text-base font-semibold" onClick={() => handleMenuClick(section)}>
                            {section}
                        </a>
                    ))}
                </nav>
                <footer className="absolute bottom-[8rem] text-white text-lg">
                    <p>VINAY KISHORE</p>
                </footer>
            </div>
        </header>
    );
};

export default Header;
