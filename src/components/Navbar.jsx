
import { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  Search,
  Heart,
  ShoppingCart,
  CircleUser,
  Menu,
  X,
} from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Shop", path: "/shop" },
    { name: "Categories", path: "/categories" },
    { name: "About", path: "/about" },
  ];

  const linkStyle = ({ isActive }) =>
    `transition-colors duration-200 ${
      isActive ? "text-black" : "text-[#77736f] hover:text-black"
    }`;

  return (
    <>
      <header className="sticky top-0 z-40 border-b border-black/[0.06] bg-[#FBF9F7]/95 backdrop-blur-xl">
        <div className="mx-auto flex h-[76px] max-w-[1440px] items-center justify-between px-4 sm:px-6 lg:px-12">

          {/* Left Section */}
          <div className="flex items-center gap-10">

            {/* Mobile Hamburger */}
            <button
              onClick={() => setIsOpen(true)}
              aria-label="Open navigation menu"
              className="rounded-full cursor-pointer p-2 text-[#222] transition hover:bg-black/5 lg:hidden"
            >
              <Menu size={23} strokeWidth={1.7} />
            </button>

            {/* Logo */}
            <NavLink to="/" className="flex shrink-0 items-center">
              <img
                className="h-20 w-auto object-contain sm:h-20"
                src="/logo.png"
                alt="FORMA"
              />
            </NavLink>

            <nav className="hidden items-center gap-8 text-sm font-medium lg:flex">
              {navLinks.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.path}
                  className={linkStyle}
                >
                  {link.name}
                </NavLink>
              ))}
            </nav>
          </div>

          <div className="flex items-center gap-3 sm:gap-5 lg:gap-8">

            <div className="hidden w-56 items-center gap-3 rounded-full border border-black/[0.07] bg-[#F2F1ED] px-4 py-2.5 transition focus-within:border-black/30 md:flex lg:w-100">
              <Search size={17} className="shrink-0 text-[#807e7e]" />

              <input
                type="text"
                placeholder="Search products"
                aria-label="Search products"
                className="w-56 bg-transparent text-sm text-[#222] outline-none placeholder:text-[#96918c]"
              />
            </div>

            <button
              aria-label="Search products"
              className="rounded-full p-2 text-[#222] transition hover:bg-black/5 md:hidden"
            >
              <Search size={21} strokeWidth={1.7} />
            </button>

            <div className="flex items-center gap-1 sm:gap-3">
              <NavLink
                to="/wishlist"
                aria-label="Wishlist"
                className="rounded-full p-2 text-[#292929] transition hover:bg-black/5"
              >
                <Heart size={21} strokeWidth={1.7} />
              </NavLink>

              <NavLink
                to="/cart"
                aria-label="Shopping cart"
                className="rounded-full p-2 text-[#292929] transition hover:bg-black/5"
              >
                <ShoppingCart size={21} strokeWidth={1.7} />
              </NavLink>

              <NavLink
                to="/login"
                aria-label="My account"
                className="hidden rounded-full p-2 text-[#292929] transition hover:bg-black/5 sm:block"
              >
                <CircleUser size={21} strokeWidth={1.7} />
              </NavLink>
            </div>
          </div>
        </div>
      </header>

      <div
        onClick={() => setIsOpen(false)}
        className={`fixed inset-0 z-50 bg-black/35 backdrop-blur-[2px] transition-opacity duration-300 lg:hidden ${
          isOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
      />

      <aside
        aria-label="Mobile navigation"
        aria-hidden={!isOpen}
        className={`fixed inset-y-0 left-0 z-[60] flex w-[82%] max-w-[340px] flex-col border-r border-black/[0.06] bg-[#FBF9F7] shadow-2xl transition-transform duration-300 ease-out lg:hidden ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Drawer Header */}
        <div className="flex h-[76px] items-center justify-between border-b border-black/[0.07] px-6">
          <NavLink to="/" onClick={() => setIsOpen(false)}>
            <img
              src="/logo.png"
              alt="FORMA"
              className="h-20 w-auto object-contain"
            />
          </NavLink>

          <button
            onClick={() => setIsOpen(false)}
            aria-label="Close navigation menu"
            className="rounded-full border cursor-pointer border-black/10 p-2 transition hover:bg-black/5"
          >
            <X  size={20} strokeWidth={1.7} />
          </button>
        </div>

        {/* Drawer Search */}
        <div className="px-6 pt-7">
          <div className="flex items-center gap-3 rounded-xl border border-black/[0.08] bg-white px-4 py-3">
            <Search size={18} className="text-[#807e7e]" />
            <input
              type="text"
              placeholder="Search products"
              aria-label="Search products"
              className="w-full bg-transparent text-sm outline-none placeholder:text-[#96918c]"
            />
          </div>
        </div>

        {/* Navigation Links */}
        <nav className="flex flex-col px-6 pt-7">
          <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#96918c]">
            Menu
          </p>

          {navLinks.map((link, index) => (
            <NavLink
              key={link.name}
              to={link.path}
              onClick={() => setIsOpen(false)}
              style={{ transitionDelay: isOpen ? `${index * 45}ms` : "0ms" }}
              className={({ isActive }) =>
                `flex items-center justify-between border-b border-black/[0.07] py-4 text-[15px] transition-all duration-200 
              ${
                  isActive
                    ? "font-semibold text-black"
                    : "font-normal text-[#68645f] hover:pl-1 hover:text-black"
                }`
              }
            >
              {link.name}
              <span className="text-lg font-light">↗</span>
            </NavLink>
          ))}
        </nav>

        {/* Drawer Footer */}
        <div className="mt-auto border-t border-black/[0.07] p-6">
          <NavLink
            to="/login"
            onClick={() => setIsOpen(false)}
            className="flex w-full items-center justify-center gap-2 rounded-full bg-black px-5 py-3.5 text-sm font-medium text-white transition hover:bg-[#333]"
          >
            <CircleUser size={18} strokeWidth={1.7} />
            Sign In / Register
          </NavLink>

          <p className="mt-5 text-center text-[10px] tracking-[0.15em] text-[#96918c]">
            SIMPLE LIVING. BETTER CHOICES.
          </p>
        </div>
      </aside>
    </>
  );
};

export default Navbar;
