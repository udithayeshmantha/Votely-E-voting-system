import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Logo from "../assets/logo.png";

import { Link, useNavigate } from "react-router-dom";

const navigation = [
  { name: "Home", href: "/", current: undefined },
  { name: "About", href: "/aboutus", current: undefined },
  { name: "Contact Us", href: "/contactus", current: undefined },
  { name: "FAQs", href: "/FAQ", current: undefined },
];
const buttons = [
  { name: "Sign Up", href: "/signup", current: undefined },
  { name: "Login", href: "/signin", current: undefined },
];
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {

  const navigate = useNavigate();

  const handleSignUpClick = () => {
    navigate('/signup');
  };

  const handleLoginClick = () => {
    navigate('/signin');
  };

  
  return (
    <Disclosure as="nav" className="bg-neutral-300 ">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 ">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            {/* Mobile menu button */}
            <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 hover:bg-gray-400 hover:text-black ">
              <span className="absolute -inset-0.5" />
              <span className="sr-only ">Open main menu</span>
              <Bars3Icon
                aria-hidden="true"
                className="block size-6 group-data-[open]:hidden"
              />
              <XMarkIcon
                aria-hidden="true"
                className="hidden size-6 group-data-[open]:block"
              />
            </DisclosureButton>
          </div>
          <div className="flex flex-1 items-center justify-around sm:items-stretch sm:justify-between">
            <div className="flex shrink-0 items-center">
              <Link to="/">
                <img alt="Volety" src={Logo} className="h-8 w-auto" />
              </Link>
            </div>
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    aria-current={item.current ? "page" : true}
                    className={classNames(
                      item.current
                        ? "underline-offset-8 underline decoration-2 font-semibold"
                        : "font-normal",
                      "rounded-md px-3 py-2 text-sm font-Poppins"
                    )}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
            <div className="hidden sm:ml-6 sm:block font-Poppins">
              <div className="flex space-x-2 ">
              <button
              onClick={handleSignUpClick}
              className="px-3 py-2 rounded-md text-sm font-medium"
            >
              Sign Up
            </button>
            <button
              onClick={handleLoginClick}
              className="ml-4 px-3 py-2 rounded-md text-sm font-medium"
            >
              Login
            </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <DisclosurePanel className="sm:hidden">
        <div className="space-y-1 px-2 pb-3 pt-2">
          {navigation.map((item) => (
            <DisclosureButton
              key={item.name}
              as={Link}
              to={item.href}
              aria-current={item.current ? "page" : undefined}
              className={classNames(
                item.current ? "font-semibold " : "font-normal ",
                "block rounded-md px-3 py-2 text-base font-semibold "
              )}
            >
              {item.name}
            </DisclosureButton>
          ))}
          <button
              onClick={handleSignUpClick}
              className="bg-blue-500 text-white px-3 py-2 rounded-md text-sm font-medium"
            >
              Sign Up
            </button>
            <button
              onClick={handleLoginClick}
              className="ml-4 bg-green-500 text-white px-3 py-2 rounded-md text-sm font-medium"
            >
              Login
            </button>
        </div>
      </DisclosurePanel>
    </Disclosure>
  );
}
