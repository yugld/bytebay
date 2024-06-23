"use client";

import { Icons } from "@/components/Icons";
import { Button, buttonVariants } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { trpc } from "@/trpc/client";
import {
    AuthCredentialsValidator,
    TAuthCredentialsValidator,
} from "@/lib/validators/account-credentials-validator";

const Page = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<TAuthCredentialsValidator>({
        resolver: zodResolver(AuthCredentialsValidator),
    });

    const { data } = trpc.anyApiRoute.useQuery();
    console.log(data);
    const onSubmit = ({ email, password }: TAuthCredentialsValidator) => {
        //отправка данных
    };

    return (
        <>
            <div className="container relative flex pt-20 flex-col items-center justify-center lg:px-0">
                <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
                    <div className="flex flex-col items-center space-y-2 text-center">
                        <Icons.logo className="h-20 w-20" />
                        <h1 className="text-2xl font-semibold tracking-tight">
                            Создаем аккаунт
                        </h1>

                        <Link
                            className={buttonVariants({
                                variant: "link",
                                className: "gap-1.5",
                            })}
                            href="/sign-in"
                        >
                            Уже есть аккаунт? Войти
                            <ArrowRight className="h-4 w-4" />
                        </Link>
                    </div>

                    <div className="grid gap-6">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="grid gap-2">
                                <div className="grid gap-1 py-2">
                                    <Label htmlFor="email">Email</Label>
                                    <Input
                                        {...register("email")}
                                        className={cn({
                                            "focus-visible:ring-red-500":
                                                errors.email,
                                        })}
                                        placeholder="name@mail.com"
                                    />
                                    {errors?.email && (
                                        <p className="text-sm text-red-500">
                                            {errors.email.message}
                                        </p>
                                    )}
                                </div>

                                <div className="grid gap-1 py-2">
                                    <Label htmlFor="password">Пароль</Label>
                                    <Input
                                        {...register("password")}
                                        type="password"
                                        className={cn({
                                            "focus-visible:ring-red-500":
                                                errors.password,
                                        })}
                                        placeholder="Password"
                                    />
                                    {errors?.password && (
                                        <p className="text-sm text-red-500">
                                            {errors.password.message}
                                        </p>
                                    )}
                                </div>

                                <Button>Зарегистрироваться</Button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Page;
