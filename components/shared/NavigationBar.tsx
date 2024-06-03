'use client';
import { languageTexts } from '@/constants';
import { useLanguageContext } from '@/context/language';

import { ChevronDown } from '@/public/icons/icons';

import dizaynLogo from '@/public/dizayn-logo.png';
import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  Link,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from '@nextui-org/react';
import Image from 'next/image';
import React, { useState } from 'react';

const NavigationBar = ({ customStyle }: { customStyle: string }) => {
  const [language] = useLanguageContext();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const icons = {
    chevron: (
      <ChevronDown
        fill="currentColor"
        size={16}
      />
    ),
  };

  const listMenu = (firstIndex: number, lastIndex: number): React.ReactNode =>
    languageTexts[language].menuList.slice(firstIndex, lastIndex).map((page: any) => {
      if (!page.submenu) {
        return (
          <NavbarItem key={page}>
            <Link
              href={`/${page.name.toLowerCase()}`}
              className="font-spaceGrotesk text-medium text-gray-900 transition-all duration-300 ease-in-out hover:text-accent-blue"
            >
              {page.name}
            </Link>
          </NavbarItem>
        );
      } else {
        return (
          <Dropdown key={page.name}>
            <NavbarItem>
              <DropdownTrigger>
                <Button
                  disableRipple
                  className="bg-transparent p-0 data-[hover=true]:bg-transparent data-[hover=true]:text-accent-blue"
                  radius="sm"
                  variant="light"
                  endContent={icons.chevron}
                >
                  {page.name}
                </Button>
              </DropdownTrigger>
            </NavbarItem>
            <DropdownMenu
              aria-label="ACME features"
              className="w-[340px]"
              itemClasses={{
                base: 'gap-4',
              }}
            >
              {page.submenu.map((item: any) => (
                <DropdownItem
                  key={item.name}
                  description={item.description}
                  startContent={
                    item.icons ? (
                      <Image
                        src={item.icons}
                        alt={item.name}
                        width={32}
                        height={32}
                      />
                    ) : null
                  }
                >
                  <Link href={`/${item.name.toLowerCase()}`}>{item.name}</Link>
                </DropdownItem>
              ))}
            </DropdownMenu>
          </Dropdown>
        );
      }
    });

  return (
    <Navbar
      className={`bg-transparent ${customStyle}`}
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
      height={'50px'}
    >
      <NavbarContent
        className="md:hidden"
        justify="start"
      >
        <NavbarMenuToggle
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          className=""
        />
      </NavbarContent>

      <NavbarContent
        className="hidden gap-4 md:flex"
        justify="center"
      >
        {listMenu(0, 3)}
      </NavbarContent>

      <NavbarBrand className="flex flex-1 items-center justify-center ">
        <Link
          href="/"
          className=""
        >
          <Image
            src={dizaynLogo}
            alt="logo"
            width={85}
            height={65}
          />
        </Link>
      </NavbarBrand>

      <NavbarContent
        className="hidden gap-4 md:flex"
        justify="end"
      >
        {listMenu(3, languageTexts[language].menuList.length - 1)}
      </NavbarContent>

      {/* Mobile Content */}
      <NavbarMenu className="!bg-transparent">
        {languageTexts[language].menuList.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              className="w-full text-gray-900"
              href={`/${item.name.toLowerCase()}`}
              size="lg"
            >
              {item.name}
            </Link>
            {item.submenu &&
              item.submenu.map((subItem: any, subIndex: number) => (
                <Link
                  key={`${subItem}-${subIndex}`}
                  className="w-full pl-4 text-gray-900"
                  href={`/${subItem.name}`}
                  size="lg"
                >
                  <Image
                    src={subItem.icons}
                    alt={subItem.name}
                    width={32}
                    height={32}
                  />
                  <p className="pl-2">{subItem.name}</p>
                </Link>
              ))}
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
};

export default NavigationBar;
