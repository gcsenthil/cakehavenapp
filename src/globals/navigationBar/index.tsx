"use client";
import Link from "next/link";
import { useState, useEffect } from "react";

const NavigationBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    // Only run this code on the client side
    const handleResize = () => {
      // Optional: Reset menu on screen resize if needed
      if (window.innerWidth > 768) {
        setIsMenuOpen(false); // Hide menu on large screens
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []); // Empty dependency ensures this runs only once

  const toggleMenu = () => {
    setIsMenuOpen((prevState) => !prevState);
  };

  return (
    <header className="sticky top-0 z-10 bg-fuchsia-700 text-white">
      <section className="mx-auto flex max-w-6xl items-center justify-between p-4">
        {/* Logo */}
        <h1 className="text-3xl font-medium">
          <a href="/">🍰 Cake Havens</a>
        </h1>

        {/* Mobile Hamburger Button */}
        <div>
          <button
            id="hamburger-button"
            className="relative h-8 w-8 cursor-pointer text-3xl md:hidden"
            onClick={toggleMenu}
          >
            <div className="absolute top-4 -mt-0.5 h-1 w-8 rounded bg-white transition-all duration-500 before:absolute before:h-1 before:w-8 before:-translate-x-4 before:-translate-y-3 before:rounded before:bg-white before:transition-all before:duration-500 before:content-[''] after:absolute after:h-1 after:w-8 after:-translate-x-4 after:translate-y-3 after:rounded after:bg-white after:transition-all after:duration-500 after:content-['']"></div>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden space-x-8 text-xl md:block" aria-label="main">
            <Link href="/#delights" className="hover:opacity-90">
              Our Delights
            </Link>
            <Link href="/#menu" className="hover:opacity-90">
              Menu
            </Link>
            <Link href="/#testimonials" className="hover:opacity-90">
              Testimonials
            </Link>
            <Link href="/#contact" className="hover:opacity-90">
              Contact Us
            </Link>
            <Link href="/order" className="hover:opacity-90">
              Order
            </Link>
          </nav>
        </div>
      </section>

      {/* Mobile Menu */}
      <section
        id="mobile-menu"
        className={`${
          isMenuOpen ? "flex" : "hidden"
        } top-16 justify-center absolute w-full origin-top animate-open-menu flex-col bg-black text-5xl transition-all duration-500`}
      >
        <nav
          className="flex min-h-screen flex-col items-center py-8"
          aria-label="mobile"
        >
          <Link
            href="/#delights"
            className="w-full py-6 text-center hover:opacity-90"
          >
            Home
          </Link>
          <Link
            href="/#delights"
            className="w-full py-6 text-center hover:opacity-90"
          >
            Our Delights
          </Link>
          <Link
            href="/#menu"
            className="w-full py-6 text-center hover:opacity-90"
          >
            Menu
          </Link>
          <Link
            href="/#testimonials"
            className="w-full py-6 text-center hover:opacity-90"
          >
            Testimonials
          </Link>
          <Link
            href="/#contact"
            className="w-full py-6 text-center hover:opacity-90"
          >
            Contact Us
          </Link>
          <Link
            href="/order"
            className="w-full py-6 text-center hover:opacity-90"
          >
            Order
          </Link>

          <a
            href="index.html"
            className="w-full py-6 text-center hover:opacity-90"
          >
            Home
          </a>
          <a
            href="#delights"
            className="w-full py-6 text-center hover:opacity-90"
          >
            Our Delights
          </a>
          <a href="#menu" className="w-full py-6 text-center hover:opacity-90">
            Menu
          </a>
          <a
            href="#testimonials"
            className="w-full py-6 text-center hover:opacity-90"
          >
            Testimonials
          </a>
          <a
            href="#contact"
            className="w-full py-6 text-center hover:opacity-90"
          >
            Contact Us
          </a>
          <a href="#order" className="w-full py-6 text-center hover:opacity-90">
            Order
          </a>
          <a
            href="#footer"
            className="w-full py-6 text-center hover:opacity-90"
          >
            Legal
          </a>
        </nav>
      </section>
    </header>
  );
};

export default NavigationBar;
