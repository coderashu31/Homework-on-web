import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="bg-gradient-to-r from-orange-400 to-pink-500 text-white p-6">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/">
            <h1 className="text-4xl font-bold">
                <span className="text-yellow-400">Homework</span>
                <span className="text-green-400"> on</span>
                <span className="text-blue-400"> Web</span>
            </h1>
        </Link>
        <ul className="flex gap-6">
          <Link to="/">
            <li className="hidden sm:inline text-white hover:underline">
              Home
            </li>
          </Link>

          <Link to="/about">
            <li className="hidden sm:inline text-white hover:underline">
              About
            </li>
          </Link>
          <Link to="/sign-in">
            <li className="text-white hover:underline">Sign in</li>
          </Link>
          <Link to="/contact">
            <li className="text-white hover:underline">Contact a tutor</li>
          </Link>
        </ul>
      </div>
    </header>
  );
}
