"use client";

import { trpc } from "@/trpc/client";
import { Loader2, XCircle } from "lucide-react";
import Link from "next/link";
import { buttonVariants } from "./ui/button";

interface VerifyEmailProps {
    token: string;
}

const VerifyEmail = ({ token }: VerifyEmailProps) => {
    const { data, isLoading, isError } = trpc.auth.verifyEmail.useQuery({
        token,
    });

    if (isError) {
        return (
            <div className="flex flex-col items-center gap-2">
                <XCircle className="h-8 w-8 text-red-600" />
                <h3 className="font-semibold text-xl">Ошибка!</h3>
                <p className="text-muted-foreground text-sm">
                    Токен недействителен или срок его действия истек.
                    Пожалуйста, попробуйте еще раз!
                </p>
            </div>
        );
    }

    if (data?.success) {
        return (
            <div className="flex h-full flex-col items-center justify-center">
                <h3 className="font-semibold text-2xl">Готово!</h3>
                <p className="text-muted-foreground text-center mt-1">
                    Спасибо за подтверждение аккаунта!
                </p>
                <Link
                    className={buttonVariants({ className: "mt-4" })}
                    href="/sign-in"
                >
                    Войти
                </Link>
            </div>
        );
    }

    if (isLoading) {
        return (
            <div className="flex flex-col items-center gap-2">
                <Loader2 className="animate-spin h-8 w-8 text-zinc-300" />
                <h3 className="font-semibold text-xl">Отправляем запрос...</h3>
                <p className="text-muted-foreground text-sm">
                    Это не займет много времени ;)
                </p>
            </div>
        );
    }
};

export default VerifyEmail;
