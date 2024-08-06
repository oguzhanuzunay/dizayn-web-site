'use client';
import { languageTexts } from '@/constants';
import { usePathname } from 'next/navigation';

import dizaynLogo from '@/public/dizayn-logo.png';
import { ChevronDown } from '@/public/icons/icons';
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
import { useLocale, useTranslations } from 'next-intl';
import Image from 'next/image';
import React, { useState } from 'react';

const NavigationBar = () => {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const t = useTranslations('NavigationBar');
  const locale = useLocale();
  const icons = {
    chevron: (
      <ChevronDown
        fill="currentColor"
        size={16}
        height={16}
        width={16}
      />
    ),
  };

  const menuList = [
    {
      name: t('menuList.products.name'),
      submenu: [
        {
          name: t('menuList.products.subMenu.indoor.name'),
          description: t('menuList.products.subMenu.indoor.description'),
          icons: '/icons/water-pipe.png',
          link: t('menuList.products.subMenu.indoor.link'),
        },
        {
          name: t('menuList.indoor.name'),
          description: t('menuList.indoor.description'),
          icons: '/icons/pipe.png',
          link: t('menuList.indoor.link'),  
        },
      ],
    },
    { name: t('menuList.dealers') },
    { name: t('menuList.calculations') },
    { name: t('menuList.institutional') },
    { name: t('menuList.ourProject') },
    { name: t('menuList.certificates') },
    { name: t('menuList.contact') },
    { name: t('menuList.arge') },
  ];

  const listMenu = (firstIndex: number, lastIndex: number): React.ReactNode =>
    menuList.slice(firstIndex, lastIndex).map((page: any) => {
      if (!page.submenu) {
        return (
          <NavbarItem key={page}>
            <Link
              href={`/${locale}/${page.name.toLowerCase().replace(' ', '-')}`}
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
                  <Link href={item.link}>{item.name}</Link>
                </DropdownItem>
              ))}
            </DropdownMenu>
          </Dropdown>
        );
      }
    });

  return (
    <Navbar
      className={`bg-transparent pt-3 ${pathname === '/' ? 'fixed top-0' : 'static'}`}
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
        <NavbarItem key={'Katalog'}>
          <Link
            className="rounded-lg bg-blue-500 px-2 py-1 text-medium font-normal text-white transition-all duration-300 ease-in-out "
            target="_blank"
            href="/dizayn-fiyat-listesi.pdf"
          >
            Ürün Kataloğu
          </Link>
        </NavbarItem>

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
            width={150}
            height={120}
          />
        </Link>
      </NavbarBrand>

      <NavbarContent
        className="hidden gap-4 md:flex"
        justify="end"
      >
        {languageTexts[locale]?.menuList && listMenu(3, languageTexts[locale].menuList.length - 1)}
      </NavbarContent>

      {/* Mobile Content */}
      <NavbarMenu className={`${pathname === '/' ? '!bg-transparent' : 'bg-white'}`}>
        {/* Fiyat Listesi */}
        <NavbarMenuItem>
          <Link
            className="mt-3 flex w-full items-center justify-center rounded-lg bg-blue-500 px-2 py-1 text-medium font-semibold text-white transition-all duration-300 ease-in-out hover:bg-blue-600"
            href="/dizayn-fiyat-listesi.pdf"
            target="blank"
            size="lg"
          >
            {t('priceList')}
          </Link>
        </NavbarMenuItem>

        {languageTexts[locale]?.menuList?.map((item, index) => (
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
                  href={`${subItem.link}`}
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
