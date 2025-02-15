import React from "react";

const Footer = () => {
  return (
    <footer id="footer" className="bg-fuchsia-700 text-xl text-white">
      <section className="mx-auto flex max-w-6xl flex-col p-4 sm:flex-row sm:justify-between">
        {/* Address Section */}
        <address>
          <h2>Cake Havens,</h2>
          23 C, North Street
          <br />
          Thuraiyur, Trichy 12345-5555
          <br />
          Email:
          <a href="mailto:inquiries@acmerockets.com">support@geniusnexa.com</a>
          <br />
          Phone: <a href="tel:+15555555555">+91 555 555 5555</a>
        </address>

        {/* Footer Navigation */}
        <nav className="hidden flex-col gap-2 md:flex" aria-label="footer">
          <a href="#delights" className="hover:opacity-90">
            Our Delights
          </a>
          <a href="#testimonials" className="hover:opacity-90">
            Testimonials
          </a>
          <a href="#contact" className="hover:opacity-90">
            Contact Us
          </a>
        </nav>

        {/* Copyright Section */}
        <div className="flex flex-col sm:gap-2">
          <p className="text-right">
            Copyright &copy; <span id="year">2025</span>
          </p>
          <p className="text-right">All Rights Reserved</p>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
