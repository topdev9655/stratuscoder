import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Image from 'next/image';

function Navigation() {
  const router = useRouter();
  const [showNavbar, setShowNavbar] = useState(false);
  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar)
  }

  return (
    <header>
      <nav className="fixed w-full top-0 z-30 bg-white border-b-2 border-border-nav">
        <div className="container mx-auto">
          <div className="sm:px-6 px-0">
            <div className="relative flex h-20 items-center justify-between">
              <div className="absolute inset-y-0 right-0 flex items-center">
                <button 
                    onClick={handleShowNavbar}
                    type="button"
                        className="hidden sm:block inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                        aria-controls="mobile-menu" aria-expanded="false">
                  <span className="sr-only">Open main menu</span>
                  <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                    <path d="M6.33333 6C5.59695 6 5 6.59695 5 7.33333C5 8.06971 5.59695 8.66667 6.33333 8.66667H25C25.7364 8.66667 26.3333 8.06971 26.3333 7.33333C26.3333 6.59695 25.7364 6 25 6H6.33333Z" fill="#00151F"/>
                    <path d="M10.3333 14C9.59695 14 9 14.597 9 15.3333C9 16.0697 9.59695 16.6667 10.3333 16.6667H25C25.7364 16.6667 26.3333 16.0697 26.3333 15.3333C26.3333 14.597 25.7364 14 25 14H10.3333Z" fill="#00151F"/>
                    <path d="M14.3333 22.6667C13.597 22.6667 13 23.2636 13 24C13 24.7364 13.597 25.3333 14.3333 25.3333H25C25.7364 25.3333 26.3333 24.7364 26.3333 24C26.3333 23.2636 25.7364 22.6667 25 22.6667H14.3333Z" fill="#00151F"/>
                  </svg>
                  <svg className="hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                       stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"/>
                  </svg>
                </button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex md:flex-1 flex-shrink-0 items-center">
                  <Link href="/" legacyBehavior>
                    <a className="flex items-center gap-x-2.5">
                      <Image src="/images/logo.png" alt="Stratuscoder" width="50" height="50" />
                      <span className="text-xl font-bold align-middle">Stratuscoder Inc</span>
                      {/*<img className="block h-8 w-auto lg:hidden"*/}
                      {/*     src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500" alt="Your Company" />*/}
                      {/*<img className="hidden h-8 w-auto lg:block"*/}
                      {/*     src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500" alt="Your Company" />*/}
                    </a>
                  </Link>

                </div>
                <div className="sm:hidden ml-6 lg:block font-nav">
                  <div className="flex items-center space-x-4">
                    <Link href="/" legacyBehavior>
                      <a className={
                        (router.pathname === '/' ? 'text-active' : 'hover:text-active') + ' flex items-center px-3 py-2 font-semibold'
                      }>
                        <span className={(router.pathname === '/' ? ' ' : 'invisible ') + 'block w-2 h-2 rounded-full bg-active mr-2'}></span>
                        HOME
                      </a>
                    </Link>
                    <Link href="/services" legacyBehavior>
                      <a className={
                        (router.pathname === '/services' ? 'text-active' : 'hover:text-active') + ' flex items-center px-3 py-2 font-semibold'
                      }>
                        <span className={(router.pathname === '/services' ? ' ' : 'invisible ') + 'block w-2 h-2 rounded-full bg-active mr-2'}></span>
                        SERVICES
                      </a>
                    </Link>
                    <Link href="/careers" legacyBehavior>
                      <a className={
                        (router.pathname === '/careers' ? 'text-active' : 'hover:text-active') + ' flex items-center px-3 py-2 font-semibold'
                      }>
                        <span className={(router.pathname === '/careers' ? ' ' : 'invisible ') + 'block w-2 h-2 rounded-full bg-active mr-2'}></span>
                        CAREERS
                      </a>
                    </Link>
                    <Link href="/about-us" legacyBehavior>
                      <a className={
                        (router.pathname === '/about-us' ? 'text-active' : 'hover:text-active') + ' flex items-center px-3 py-2 font-semibold'
                      }>
                        <span className={(router.pathname === '/about-us' ? ' ' : 'invisible ') + 'block w-2 h-2 rounded-full bg-active mr-2'}></span>
                        ABOUT US
                      </a>
                    </Link>
                    <Link href="/contact" legacyBehavior>
                      <a className={
                        (router.pathname === '/contact' ? 'text-active' : 'hover:text-active') + ' flex items-center px-3 py-2 font-semibold'
                      }>
                        <span className={(router.pathname === '/contact' ? ' ' : 'invisible ') + 'block w-2 h-2 rounded-full bg-active mr-2'}></span>
                        CONTACT
                      </a>
                    </Link>
                    <Link href="javascript:;" legacyBehavior>
                      <a className="flex items-center px-3 py-2 font-semibold">
                        <Image
                          src="/icons/search.svg"
                          alt="search"
                          width="24"
                          height="24"
                        />
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={`mobile-menu ${showNavbar && 'active'}`} id="mobile-menu">
          <div className="space-y-1 px-2 pt-2 pb-3">
            <Link href="/" legacyBehavior>
              <a className="hover:bg-gray-700 text-gray-300 block px-3 py-2 rounded-md text-base font-medium"
                aria-current="page">HOME</a>
            </Link>
            <Link href="/services" legacyBehavior>
              <a className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">SERVICES</a>
            </Link>
            <Link href="/careers" legacyBehavior>
              <a className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">CAREERS</a>
            </Link>
            <Link href="/about-us" legacyBehavior>
              <a className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">ABOUT US</a>
            </Link>
            <Link href="/contact" legacyBehavior>
              <a className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">CONTACT</a>
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navigation;