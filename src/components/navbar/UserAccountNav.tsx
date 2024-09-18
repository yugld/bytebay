"use client";

import { User } from "@/payload-types";
import { Button } from "../ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import Link from "next/link";
import { useAuth } from "@/hooks/use-auth";

const UserAccountNav = ({ user }: { user: User }) => {
    const { signOut } = useAuth();

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild className="overflow-visible">
                <Button variant="ghost" size="sm" className="relative">
                    Профиль
                </Button>
            </DropdownMenuTrigger>

            <DropdownMenuContent className="bg-white w-60" align="end">
                {user ? (
                    <div className="flex items-center justify-start gap-2 p-2">
                        <div className="flex flex-col space-y-0.5 leading-none">
                            <p className="font-medium text-sm text-black">
                                {user.email}
                            </p>
                        </div>
                    </div>
                ) : (
                    <div className="p-2">
                        <DropdownMenuItem asChild>
                            <Link href="/sign-in">Войти</Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem asChild>
                            <Link href="/sign-up">Регистрация</Link>
                        </DropdownMenuItem>
                    </div>
                )}

                {user && (
                    <>
                        <DropdownMenuSeparator />

                        <DropdownMenuItem asChild>
                            <Link href="/sell">Кабинет продавца</Link>
                        </DropdownMenuItem>

                        <DropdownMenuItem
                            onClick={signOut}
                            className="cursor-pointer"
                        >
                            Выйти
                        </DropdownMenuItem>
                    </>
                )}
            </DropdownMenuContent>
        </DropdownMenu>
    );
};

export default UserAccountNav;
