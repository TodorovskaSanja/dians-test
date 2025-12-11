import {
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
} from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { NavLink, Link } from "react-router-dom";

const navigation = [
    { name: "Cryptocurrencies", href: "/home", icon: "/icons/cryptocurrency.png" },
    { name: "Favorites", href: "/library", icon: "/icons/favorites.png" },
    { name: "Compare", href: "/login", icon: "/icons/compare.png" },
];

function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
}

export default function Header(props) {
    return (
        <>
            <Disclosure as="nav" className="bg-neutral-300 fixed w-full z-50">
                <div className="mx-auto max-w-screen-2xl px-2 sm:px-6 lg:px-8">
                    <div className="relative flex h-[4.5rem] items-center justify-between">
                        <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                            {/* Mobile menu button */}
                            <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-neutral-900 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                                <span className="absolute -inset-0.5" />
                                <span className="sr-only">Open main menu</span>
                                <Bars3Icon aria-hidden="true" className="block h-6 w-6 group-data-[open]:hidden" />
                                <XMarkIcon aria-hidden="true" className="hidden h-6 w-6 group-data-[open]:block" />
                            </DisclosureButton>
                        </div>
                        <div className="flex items-center gap-12">
                            <Link to="/" className="hidden lg:block">
                                <div className="flex flex-shrink-0 items-end text-5xl inline-flex">
                                    <span className="tracking-widest text-sm text-black font-bold">
                                        Crypto Tracking App
                                    </span>
                                </div>
                            </Link>
                            <div className="hidden ml-6 lg:ml-0 sm:block">
                                <div className="flex gap-4 items-center">
                                    {navigation.map((item) => (
                                        <NavLink
                                            key={item.name}
                                            to={item.href}
                                            className={({ isActive }) => {
                                                return (
                                                    "rounded-xl px-3 py-1.5 text-m tracking-wider no-underline text-black font-bold flex items-center gap-2" +
                                                    (isActive ? " bg-neutral-300" : " hover:bg-neutral-200")
                                                );
                                            }}
                                        >
                                            <img
                                                src={item.icon}
                                                alt={item.name}
                                                className="w-5 h-5"
                                            />
                                            <span>{item.name}</span>
                                        </NavLink>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Login and Signup Buttons */}
                        <div className="flex items-center gap-3 ml-auto">
                            <Link
                                to="/login"
                                className="text-white bg-sky-600 hover:bg-sky-700 rounded-xl py-2 px-4 text-sm font-medium focus:ring-2 focus:ring-sky-700"
                            >
                                Log In
                            </Link>
                            <Link
                                to="/signup"
                                className="text-sky-600 bg-neutral-50 hover:bg-neutral-200 rounded-xl py-2 px-4 text-sm font-medium focus:outline-4 focus:outline-sky-500 focus:ring-2 focus:ring-sky-500"
                            >
                                Sign Up
                            </Link>

                        </div>
                    </div>
                </div>

                <DisclosurePanel className="sm:hidden">
                    <div className="space-y-1 px-2 pb-3 pt-2">
                        {navigation.map((item) => (
                            <NavLink
                                key={item.name}
                                to={item.href}
                                aria-current={item.current ? "page" : undefined}
                                className={({ isActive }) => {
                                    return (
                                        "block rounded-xl px-3 py-1.5 text-xs tracking-wider no-underline text-white font-bold flex items-center gap-2 " +
                                        (isActive ? " bg-neutral-300" : " hover:bg-neutral-200")
                                    );
                                }}
                            >
                                <img
                                    src={item.icon}
                                    alt={item.name}
                                    className="w-4 h-4"
                                />
                                <span>{item.name}</span>
                            </NavLink>
                        ))}
                    </div>
                </DisclosurePanel>
            </Disclosure>

            <div className="bg-neutral-400 text-white py-3 pt-[5rem] ps-4 pe-4 flex justify-between items-center">
                <Link
                    to="/settings"
                    className="bg-neutral-200 inline-block rounded-full p-1"
                >
                    <img src="https://icons.iconarchive.com/icons/grafikartes/flat-retro-modern/256/settings-icon.png" className="w-[25px]" />
                </Link>
                <div>
                    <input
                        type="text"
                        className="px-4 py-2 border border-gray-300 rounded-3xl text-gray-700 focus:outline-none focus:ring-2 focus:ring-neutral-500 focus:border-neutral-500 placeholder-gray-400 shadow-lg"
                        placeholder="Search..."
                    />
                    <Link
                        to="/search"
                        className="text-body bg-neutral-500 box-border border border-default-medium hover:bg-neutral-600 hover:text-heading focus:ring-4 focus:ring-neutral-600 shadow-xs font-medium leading-5 rounded-3xl text-sm px-4 py-2.5 focus:outline-none ms-1"
                    >
                        Search
                    </Link>
                </div>
            </div>

            {/* Page Content */}
            <div className="bg-white text-black size">
                <div className="max-w-screen-2xl mx-auto min-h-screen px-3 pb-2">
                    {props.children}
                </div>
            </div>
        </>
    );
}
