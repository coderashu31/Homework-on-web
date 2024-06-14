import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-orange-400 to-pink-500 text-white py-6">
      <div className="container mx-auto flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold">
            About Us
          </h2>
          <p className="mt-2">
            TeacherOn is a platform where you can find tutors and students for various subjects and disciplines.
          </p>
        </div>
        <div>
          <h2 className="text-2xl font-bold">
            Quick Links
          </h2>
          <ul className="mt-2">
            <li>
              <a href="/" className="text-white hover:underline">Home</a>
            </li>
            <li>
              <a href="/about" className="text-white hover:underline">About</a>
            </li>
            <li>
              <a href="/contact" className="text-white hover:underline">Contact</a>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="text-2xl font-bold">
            Contact Us
          </h2>
          <p className="mt-2">
            Email: info@hwk_onweb.com<br />
            Phone: +123456789
            Address: Kolkata India
          </p>
        </div>
      </div>
    </footer>
  );
}
