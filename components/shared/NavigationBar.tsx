'use client';
import dizaynLogo from '@/public/dizayn-logo.png';
import { ChevronDown } from '@/public/icons/icons';
import {
  Accordion,
  AccordionItem,
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
import { usePathname, useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { FaChevronDown } from 'react-icons/fa';
import LangChanger from './LangChanger';

const NavigationBar = () => {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openAccordion, setOpenAccordion] = useState<string | null>(null);

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
  const [isHomePage, setIsHomePage] = useState(false);
  useEffect(() => {
    // pathname /tr veya /en ise isHomePage'i true olarak ayarla
    if (pathname === '/tr' || pathname === '/en') {
      setIsHomePage(true);
    } else {
      setIsHomePage(false); // diğer tüm sayfalar için false
    }
  }, [pathname]);

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
    { name: t('menuList.dealers.name'), link: t('menuList.dealers.link') },
    { name: t('menuList.calculations.name'), link: t('menuList.calculations.link') },
    { name: t('menuList.corporate.name'), link: t('menuList.corporate.link') },
    { name: t('menuList.ourProject.name'), link: t('menuList.ourProject.link') },
    { name: t('menuList.certificates.name'), link: t('menuList.certificates.link') },
    { name: t('menuList.contact.name'), link: t('menuList.contact.link') },
    { name: t('menuList.arge.name'), link: t('menuList.arge.link') },
  ];

  const router = useRouter(); // Add this line to import the 'router' object
  const changeLanguage = (newLocale: string) => {
    const pathWithoutLocale = pathname.replace(/^\/[a-z]{2}/, '');
    const searchParams = new URLSearchParams();
    const newUrl = `/${newLocale}${pathWithoutLocale}${
      searchParams.toString() ? `?${searchParams.toString()}` : ''
    }`;
    router.push(newUrl);
  };

  const listMenu = (firstIndex: number, lastIndex: number): React.ReactNode =>
    menuList.slice(firstIndex, lastIndex).map((page: any, index) => {
      if (!page.submenu) {
        return (
          <NavbarItem key={`${page}-${index}`}>
            <Link
              href={page.link}
              className=" font-spaceGrotesk text-gray-900 transition-all duration-300 ease-in-out hover:text-accent-blue"
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
              className="w-[340px] rounded-md bg-gray-100 shadow-light-200"
              itemClasses={{
                base: 'gap-4',
              }}
            >
              {page.submenu.map((item: any) => (
                <DropdownItem
                  className="flex rounded-md p-0 hover:bg-gray-300"
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
      className={`bg-transparent pt-3 ${isHomePage ? 'fixed top-0' : 'static'}
        md:text-sm
      `}
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
      height={'50px'}
    >
      <NavbarContent
        className="lg:hidden"
        justify="start"
      >
        <NavbarMenuToggle aria-label={isMenuOpen ? 'Close menu' : 'Open menu'} />
      </NavbarContent>

      <NavbarContent
        className="hidden gap-4 lg:flex"
        justify="center"
      >
        <NavbarItem key={'Katalog'}>
          <Link
            className="rounded-md bg-blue-500 px-2 py-1  font-semibold text-white transition-all duration-300 ease-in-out "
            target="_blank"
            href="/dizayn-fiyat-listesi.pdf"
          >
            {t('priceCatalog')}
          </Link>
        </NavbarItem>

        {listMenu(0, 3)}
      </NavbarContent>

      <NavbarBrand className="flex w-full flex-1 items-center justify-center">
        <Link href="/">
          <Image
            src={dizaynLogo}
            alt="logo"
            className="min-w-32 cursor-pointer"
            width={150}
            height={120}
          />
        </Link>
      </NavbarBrand>

      <NavbarContent
        className="hidden gap-4 lg:flex"
        justify="end"
      >
        {menuList && listMenu(3, menuList.length - 1)}

        <LangChanger
          locale={locale}
          changeLanguage={changeLanguage}
        />
      </NavbarContent>

      {/* Mobile Content */}
      <NavbarMenu className={`${isHomePage ? '!bg-transparent' : 'bg-white'}`}>
        {/* Fiyat Listesi */}
        <NavbarMenuItem>
          <Link
            className="mt-3 flex w-full items-center justify-center rounded-md bg-blue-500 px-2 py-1 text-base font-semibold text-white transition-all duration-300 ease-in-out hover:bg-blue-600"
            href="/dizayn-fiyat-listesi.pdf"
            target="blank"
            size="md"
          >
            {t('priceList')}
          </Link>
        </NavbarMenuItem>

        {menuList?.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              className="w-full text-gray-900"
              href={`/${item.name.toLowerCase()}`}
              size="md"
            >
              {item.name}
            </Link>
            {item.submenu &&
              item.submenu.map((subItem: any, subIndex: number) => (
                <Link
                  key={`${subItem}-${subIndex}-1`}
                  className="w-full pl-4 text-gray-900"
                  href={`${subItem.link}`}
                  size="md"
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

        <NavbarMenuItem>
          <Accordion>
            <AccordionItem
              title={
                <div className="flex items-center justify-between">
                  <span className="text-2xl">{locale === 'tr' ? 'Türkçe' : 'English'}</span>
                  <FaChevronDown
                    className={`" max-w-4 transition-transform duration-300 ${
                      openAccordion === 'language' ? 'rotate-180' : ''
                    }`}
                  />
                </div>
              }
              indicator=" "
              onClick={() => setOpenAccordion(openAccordion === 'language' ? null : 'language')}
              className="text-center text-2xl"
            >
              <LangChanger
                locale={locale}
                changeLanguage={changeLanguage}
                isMobile={true}
              />
            </AccordionItem>
          </Accordion>
        </NavbarMenuItem>
      </NavbarMenu>
    </Navbar>
  );
};

export default NavigationBar;
