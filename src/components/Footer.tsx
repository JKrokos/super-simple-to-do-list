import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="flex justify-center p-2 border-t border-gray-300 w-full ">
      <p className="text-sm text-gray-600">
        © 2025 Super Simple To Do List by{" "}
        <Link
          className="text-blue-600 hover:text-blue-800"
          href="https://github.com/jkrokos"
          target="_blank"
        >
          JKrokos
        </Link>
      </p>
    </footer>
  );
};

export default Footer;
