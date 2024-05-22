'use client';
import { languageTexts } from '@/constants/texts';
import { useLanguageContext } from '@/context/language';
import Logo from '@/public/dizayn-logo.png';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Navbar = () => {
  const [language] = useLanguageContext();

  const listMenu = (firstIndex: number, lastIndex: number): React.ReactNode =>
    languageTexts[language].menuList.slice(firstIndex, lastIndex).map((pageName: string) => (
      <li
        key={pageName}
        className="flex h-12 w-24 cursor-pointer items-center justify-center text-sm font-bold text-gray-800 transition duration-300 ease-in-out hover:text-blue-600"
      >
        <Link
          className="font-spaceGrotesk font-medium text-gray-300 transition duration-300 ease-in-out hover:text-blue-700"
          href={`/${pageName.toLowerCase()}`}
        >
          {pageName}
        </Link>
      </li>
    ));

  return (
    <nav className="fixed z-10 flex w-full items-start justify-between border-b border-[rgba(255,255,255,0.3)] pt-3 ">
      <ul className="flex flex-row justify-center ">{listMenu(0, 3)}</ul>

      <Link
        href="/"
        className="pt-4"
      >
        <Image
          className="h-12 w-full cursor-pointer pb-2"
          src={Logo}
          alt="dizayn grup logo"
        />
      </Link>

      <ul className="flex flex-row justify-center ">
        {listMenu(3, languageTexts[language].menuList.length - 1)}
      </ul>
    </nav>
  );
};

export default Navbar;
