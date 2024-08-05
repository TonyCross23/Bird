import React from "react";
import Themes from "./themes";
import Link from "next/link";
import Bird from "../bird";

function Nav() {
  return (
    <header className="fixed top-0 px-10 py-5  w-full rounded-none border dark:border-gray-700 border-white border-opacity-40 bg-white bg-opacity-80 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem]
    dark:bg-gray-800 dark:text-gray-300">
      <ul className="flex">
        <li className="flex-1 mr-2">
          <Link
            className="text-center"
            href="/"
          >
            <img className="rounded h-12" src="../images/logo.png"/>
          </Link>
        </li>
        <li className="flex flex-1 gap-5 mr-2">
          <Link
            className="text-center block borde rounded hover:border-gray-200 dark:hover:border-gray-900 font-bold text-xl hover:bg-gray-200 dark:hover:bg-gray-600 py-2 px-1"
            href="/"
          >
            Home
          </Link>
          <Link
            className="text-center block borde rounded hover:border-gray-200 dark:hover:border-gray-900 font-bold text-xl hover:bg-gray-200 dark:hover:bg-gray-600 py-2 px-1"
            href="http://localhost:4000/bird"
          >
            Birds
          </Link>
        </li>
        <li className="text-center flex-0 me-8">
          <Link
            className="block py-2 px-6  border rounded-2xl font-bold bg-gray-200 dark:bg-gray-600 dark:border-none dark:text-gray-200 text-center text-slate-950"
            href="/"
          >
            Let's Fly
          </Link>
        </li>
        <Themes/>
      </ul>
    </header>
  );
}

export default Nav;
