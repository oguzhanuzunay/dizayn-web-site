import Image from 'next/image';
import React, { useState } from 'react';
import { FaChevronDown } from 'react-icons/fa';

interface LangChangerProps {
  locale: string;
  changeLanguage: (locale: string) => void;
  isMobile?: boolean;
}

const LangChanger: React.FC<LangChangerProps> = ({
  locale,
  changeLanguage,
  isMobile = false, // Default to false for desktop view
}) => {
  const [dropdown, setDropdown] = useState(false);

  if (isMobile) {
    return (
      <ul className="flex flex-col">
        <li
          className="px-4 py-2 cursor-pointer hover:text-blue-500 flex items-center"
          onClick={() => changeLanguage('en')}
        >
          <Image
            src="/language/en.png"
            alt="English"
            width={20}
            height={20}
          />
          <span className="ml-2">English</span>
        </li>
        <li
          className="px-4 py-2 cursor-pointer hover:text-blue-500 flex items-center"
          onClick={() => changeLanguage('tr')}
        >
          <Image
            src="/language/tr.png"
            alt="Türkçe"
            width={20}
            height={20}
          />
          <span className="ml-2">Türkçe</span>
        </li>
      </ul>
    );
  }

  return (
    <li
      className="relative"
      onMouseEnter={() => setDropdown(true)}
      onMouseLeave={() => setDropdown(false)}
    >
      <button
        className="flex items-center text-gray-800 hover:text-blue-500 hover:font-semibold duration-150"
        onClick={() => setDropdown(!dropdown)}
      >
        <Image
          src={`/language/${locale}.png`}
          alt={locale}
          width={20}
          height={20}
          className="max-xl:min-w-7"
        />
        <span className="ml-2 hidden xl:flex">{locale === 'tr' ? 'Türkçe' : 'English'}</span>
        <FaChevronDown className="ml-1 text-gray-900" />
      </button>
      {dropdown && (
        <ul className="absolute top-full left-0 mt-0 bg-gray-100 rounded shadow-lg">
          <li
            className="size-4 w-fit cursor-pointer hover:bg-gray-200 flex items-center rounded-t-lg"
            onClick={() => changeLanguage('en')}
          >
            <Image
              src="/language/en.png"
              alt="English"
              width={20}
              height={20}
            />
            <span className="w-full mr-5 hidden lg:block">English</span>
          </li>
          <li
            className="size-4 cursor-pointer hover:bg-gray-200 flex items-center rounded-b-lg"
            onClick={() => changeLanguage('tr')}
          >
            <Image
              src="/language/tr.png"
              alt="Türkçe"
              width={20}
              height={20}
            />
            <span className="w-full hidden lg:block">Türkçe</span>
          </li>
        </ul>
      )}
    </li>
  );
};

export default LangChanger;
