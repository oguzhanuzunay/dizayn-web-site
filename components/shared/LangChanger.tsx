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
          className="flex cursor-pointer items-center px-4 py-2 hover:text-blue-500"
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
          className="flex cursor-pointer items-center px-4 py-2 hover:text-blue-500"
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
        className="flex items-center text-gray-800 duration-150 hover:font-semibold hover:text-blue-500"
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
        <ul className="absolute left-0 top-full mt-0 rounded bg-gray-100 shadow-lg">
          <li
            className="flex size-4 w-fit cursor-pointer items-center rounded-t-lg hover:bg-gray-200"
            onClick={() => changeLanguage('en')}
          >
            <Image
              src="/language/en.png"
              alt="English"
              width={20}
              height={20}
            />
            <span className="mr-5 hidden w-full lg:block">English</span>
          </li>
          <li
            className="flex size-4 cursor-pointer items-center rounded-b-lg hover:bg-gray-200"
            onClick={() => changeLanguage('tr')}
          >
            <Image
              src="/language/tr.png"
              alt="Türkçe"
              width={20}
              height={20}
            />
            <span className="hidden w-full lg:block">Türkçe</span>
          </li>
        </ul>
      )}
    </li>
  );
};

export default LangChanger;
