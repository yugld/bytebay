"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import MaxWidthWrapper from "../layout/MaxWidthWrapper";
import NavItems from "./NavItems";
import { buttonVariants } from "../ui/button";
import UserAccountNav from "./UserAccountNav";
import MobileNav from "./MobileNav";
import { Icons } from "../Icons";
import Cart from "../cart/Cart";

const NavbarClient = ({ user }) => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 30);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div
            className={`sticky z-50 top-0 inset-x-0 h-16 transition-all duration-300 ${
                isScrolled ? "bg-white border-gray-200" : ""
            }`}
        >
            <header className="relative">
                <MaxWidthWrapper>
                    <div className="">
                        <div className="flex h-16 items-center">
                            <MobileNav user={user} />
                            <div className="ml-4 flex lg:ml-0 bold">
                                <Link href="/">
                                    <Icons.logo className="w-32" />
                                </Link>
                            </div>
                            <div className="hidden z-50 lg:ml-8 lg:block lg:self-stretch">
                                <NavItems />
                            </div>
                            <div className="ml-auto flex items-center">
                                <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
                                    {user ? null : (
                                        <Link
                                            href="/sign-in"
                                            className={buttonVariants({
                                                variant: "ghost",
                                            })}
                                        >
                                            Войти
                                        </Link>
                                    )}

                                    {user ? null : (
                                        <span
                                            className="h-6 w-px bg-gray-200"
                                            aria-hidden="true"
                                        />
                                    )}

                                    {user ? (
                                        <UserAccountNav user={user} />
                                    ) : (
                                        <Link
                                            href="/sign-up"
                                            className={buttonVariants({
                                                variant: "ghost",
                                            })}
                                        >
                                            Регистрация
                                        </Link>
                                    )}

                                    {user && (
                                        <span
                                            className="h-6 w-px bg-gray-200"
                                            aria-hidden="true"
                                        />
                                    )}
                                </div>
                                <div className="ml-4 flow-root lg:ml-6">
                                    <Cart />
                                </div>
                            </div>
                        </div>
                    </div>
                </MaxWidthWrapper>
            </header>
        </div>
    );
};

export default NavbarClient;