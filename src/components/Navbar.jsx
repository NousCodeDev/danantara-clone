import { useState, useEffect } from "react";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { ChevronDownIcon, Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import DanantaraLogo from "../assets/danantara-logo.png";
import IndonesiaFlag from "../assets/indonesia.png";
import UnitedKingdomFlag from "../assets/united-kingdom.png";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navigationItems = [
    { name: "Tentang Kami", url: "#tentang-kami" },
    { name: "Perjalanan Kami", url: "#perjalanan-kami" },
    { name: "Visi & Misi", url: "#visi-misi" },
    { name: "Narahubung", url: "#narahubung" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ease-in-out ${scrolled ? "bg-white shadow-md py-6 transform translate-y-0" : "bg-white py-4 transform translate-y-0"}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <a href="/">
          <img src={DanantaraLogo} alt="Danantara Logo" className="w-[130px] h-[30px]" />
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-5 font-medium text-[16px]">
          {navigationItems.map((item) => (
            <a key={item.name} href={item.url} className="relative py-2 hover:text-gray-500 transition-colors duration-300 group">
              {item.name}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </div>

        {/* Language Dropdown */}
        <div className="hidden md:block relative">
          <Menu>
            {({ open }) => (
              <div className="relative">
                <MenuButton className="flex items-center gap-2 rounded-md py-1.5 px-3 text-sm text-black hover:bg-gray-100 transition duration-200">
                  <img src={IndonesiaFlag} alt="" className="w-[25px] h-[25px]" />
                  <ChevronDownIcon className={`w-4 h-4 transition-transform ${open ? "rotate-180" : ""}`} />
                </MenuButton>
                <MenuItems className="absolute right-0 mt-2 w-32 bg-white shadow-lg rounded-md overflow-hidden border border-gray-200 z-50">
                  <MenuItem>
                    {({ active }) => (
                      <button className={`flex items-center gap-2 w-full px-4 py-2 text-sm transition ${active ? "bg-gray-100" : ""}`}>
                        <img src={UnitedKingdomFlag} alt="" className="w-[20px] h-[20px]" /> English
                      </button>
                    )}
                  </MenuItem>
                </MenuItems>
              </div>
            )}
          </Menu>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden p-2 rounded-md focus:outline-none" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <XMarkIcon className="w-6 h-6" /> : <Bars3Icon className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div className={`md:hidden transition-all duration-300 overflow-hidden bg-white ${isOpen ? "max-h-[300px] opacity-100" : "max-h-0 opacity-0"}`}>
        <div className="px-4 pt-3 pb-3 space-y-2">
          {navigationItems.map((item) => (
            <a key={item.name} href={item.url} className="block px-3 py-2 rounded-md text-base hover:bg-gray-100 transition">
              {item.name}
            </a>
          ))}

          {/* Mobile Language Selector */}
          <div className="px-3 py-2 space-y-2">
            <button className="flex items-center gap-2 py-2 px-3 w-full rounded-md hover:bg-gray-100 transition">
              <img src={IndonesiaFlag} alt="" className="w-[25px] h-[25px]" /> Indonesia
            </button>
            <button className="flex items-center gap-2 py-2 px-3 w-full rounded-md hover:bg-gray-100 transition">
              <img src={UnitedKingdomFlag} alt="" className="w-[25px] h-[25px]" /> English
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};
