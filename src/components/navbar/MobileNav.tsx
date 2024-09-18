"use client";

import { PRODUCT_CATEGORIES } from "@/config";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { User } from "@/payload-types";
import { useAuth } from "@/hooks/use-auth";

const MobileNav = ({ user }: { user: User | null }) => {
    const { signOut } = useAuth();
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const pathname = usePathname();

    useEffect(() => {
        setIsOpen(false);
    }, [pathname]);

    const closeOnCurrent = (href: string) => {
        if (pathname === href) {
            setIsOpen(false);
        }
    };

    useEffect(() => {
        if (isOpen) document.body.classList.add("overflow-hidden");
        else document.body.classList.remove("overflow-hidden");
    }, [isOpen]);

    if (!isOpen)
        return (
            <button
                type="button"
                onClick={() => setIsOpen(true)}
                className="lg:hidden relative -m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400"
            >
                <Menu className="h-6 w-6" aria-hidden="true" />
            </button>
        );

    return (
        <div>
            <div className="relative z-40 lg:hidden">
                <div className="fixed inset-0 bg-black bg-opacity-25" />
            </div>

            <div className="fixed overflow-y-scroll overscroll-y-none inset-0 z-40 flex">
                <div className="w-4/5">
                    <div className="relative flex w-full max-w-sm flex-col overflow-y-auto bg-white shadow-xl">
                        <div className="flex px-4 pb-2 pt-5">
                            <button
                                type="button"
                                onClick={() => setIsOpen(false)}
                                className="relative -m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400"
                            >
                                <X className="h-6 w-6" aria-hidden="true" />
                            </button>
                        </div>

                        <div className="product_cat">
                            <ul>
                                {PRODUCT_CATEGORIES.map((category) => (
                                    <li
                                        key={category.label}
                                        className="px-4 pb-8"
                                    >
                                        <div className="">
                                            <div className="-mb-px flex">
                                                <p className="border-transparent text-gray-900 flex-1 whitespace-nowrap py-4 text-lg font-medium">
                                                    {category.label}
                                                </p>
                                            </div>
                                        </div>

                                        <div className="grid grid-cols-2 gap-y-10 gap-x-4">
                                            {category.featured.map((item) => (
                                                <div
                                                    key={item.name}
                                                    className="group relative text-sm"
                                                >
                                                    <div className="relative aspect-square overflow-hidden rounded-lg bg-gray-100 group-hover:opacity-75">
                                                        <Image
                                                            fill
                                                            src={item.imageSrc}
                                                            alt="Категория товара"
                                                            className="object-cover object-center"
                                                        />
                                                    </div>
                                                    <Link
                                                        href={item.href}
                                                        className="mt-2 block font-medium text-gray-900"
                                                    >
                                                        {item.name}
                                                    </Link>
                                                </div>
                                            ))}
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="border-t border-gray-200 px-4 py-6">
                            {user ? (
                                <div className="space-y-6">
                                    <div className="flow-root">
                                        <p className="-m-2 block p-2 font-medium text-primary">
                                            {user.email}
                                        </p>
                                    </div>
                                    <div className="flow-root">
                                        <Link
                                            href="/sell"
                                            className="-m-2 block p-2 font-medium text-gray-900"
                                        >
                                            Кабинет продавца
                                        </Link>
                                    </div>
                                    <div className="flow-root">
                                        <Link
                                            onClick={signOut}
                                            href="/sign-up"
                                            className="-m-2 block p-2 font-medium text-gray-900"
                                        >
                                            Выйти
                                        </Link>
                                    </div>
                                </div>
                            ) : (
                                <div className="space-y-6">
                                    <div className="flow-root">
                                        <Link
                                            onClick={() =>
                                                closeOnCurrent("/sign-in")
                                            }
                                            href="/sign-in"
                                            className="-m-2 block p-2 font-medium text-gray-900"
                                        >
                                            Войти
                                        </Link>
                                    </div>
                                    <div className="flow-root">
                                        <Link
                                            onClick={() =>
                                                closeOnCurrent("/sign-up")
                                            }
                                            href="/sign-up"
                                            className="-m-2 block p-2 font-medium text-gray-900"
                                        >
                                            Регистрация
                                        </Link>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MobileNav;
