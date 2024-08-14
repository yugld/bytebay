"use client";

import { usePathname } from "next/navigation";
import MaxWidthWrapper from "../layout/MaxWidthWrapper";
import { Icons } from "../Icons";
import Link from "next/link";
import { cn } from "@/lib/utils";

const Footer = () => {
    const pathname = usePathname();
    const pathsToMinimize = ["/verify-email", "/sign-up", "/sign-in"];

    return (
        <footer className="bg-white flex-grow-0">
            <MaxWidthWrapper>
                <div className="border-t border-gray-200">
                    {pathsToMinimize.includes(pathname) ? null : (
                        <div className="pb-8 pt-16">
                            <div className="flex justify-center">
                                <Icons.logo className="w-auto" />
                            </div>
                        </div>
                    )}

                    {pathsToMinimize.includes(pathname) ? null : (
                        <div>
                            <div className="relative flex items-center px-6 py-6 sm:py-8 lg:mt-0">
                                <div className="absolute inset-0 overflow-hidden rounded-lg">
                                    <div
                                        aria-hidden="true"
                                        className="absolute bg-zinc-50 inset-0 bg-gradient-to-br bg-opacity-90"
                                    />
                                </div>

                                <div className="text-center relative mx-auto max-w-sm">
                                    <h3 className="font-semibold text-gray-900">
                                        Стать продавцом
                                    </h3>
                                    <p className="mt-2 text-sm text-muted-foreground">
                                        Вы можете начать продавать цифровые
                                        продукты прямой сейчас{" "}
                                        <Link
                                            href="/sign-in?as=seller"
                                            className={cn(
                                                "whitespace-nowrap font-medium text-black hover:text-zinc-900",
                                                "group not-prose inline-flex items-center gap-1 text-current transition-colors duration-300 ease-in-out"
                                            )}
                                        >
                                            Начать
                                            <Icons.arrow />
                                        </Link>
                                    </p>
                                </div>
                            </div>
                        </div>
                    )}
                </div>

                <div className="py-10 md:flex md:items-center md:justify-between">
                    <div className="text-center md:text-left">
                        <p className="text-sm text-muted-foreground">
                            &copy; {new Date().getFullYear()} Все права защищены
                        </p>
                    </div>

                    <div className="mt-4 flex items-center justify-center md:mt-0">
                        <div className="flex space-x-8">
                            <Link
                                href="#"
                                className="text-sm text-muted-foreground hover:text-gray-600"
                            >
                                Условия
                            </Link>
                            <Link
                                href="#"
                                className="text-sm text-muted-foreground hover:text-gray-600"
                            >
                                Политика конфиденциальности
                            </Link>
                            <Link
                                href="#"
                                className="text-sm text-muted-foreground hover:text-gray-600"
                            >
                                Политика использования cookie
                            </Link>
                        </div>
                    </div>
                </div>
            </MaxWidthWrapper>
        </footer>
    );
};

export default Footer;
