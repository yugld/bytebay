import { Icons } from "@/components/Icons";
import MaxWidthWrapper from "@/components/layout/MaxWidthWrapper";
import ProductReel from "@/components/products/ProductReel";
import { Button, buttonVariants } from "@/components/ui/button";
import { ArrowDownToLine, CheckCircle, Leaf } from "lucide-react";
import Link from "next/link";

const perks = [
    {
        name: "Надежная доставка",
        Icon: ArrowDownToLine,
        description: "Описание",
    },
    {
        name: "Гарантированное качество",
        Icon: CheckCircle,
        description: "Описание",
    },
    {
        name: "Сохранение планеты",
        Icon: Leaf,
        description: "Описание",
    },
];

export default function Home() {
    return (
        <>
            <MaxWidthWrapper>
                <div className="py-20 mx-auto text-center flex flex-col items-center max-w-3xl">
                    <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                        Современный маркетплейс{" "}
                        <span className="text-primary">
                            с вашими цифровыми{" "}
                        </span>
                        товарами
                    </h1>
                    <p className="mt-6 text-lg max-w-prose text-muted-foreground">
                        Вперед за покупками!
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 mt-6">
                        <Link href="/products" className={buttonVariants()}>
                            Перейти к предложениям
                        </Link>
                        <Button
                            variant="ghost"
                            className="group not-prose inline-flex items-center gap-1 text-current transition-colors duration-300 ease-in-out"
                        >
                            Наша поддержка
                            <Icons.arrow />
                        </Button>
                    </div>
                </div>

                <ProductReel
                    query={{ sort: "desc", limit: 4 }}
                    href="/products?sort=recent"
                    title="Новинки"
                />
            </MaxWidthWrapper>

            <section className="border-t border-gray-200 bg-gray-50">
                <MaxWidthWrapper className="py-20">
                    <div className="grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-0">
                        {perks.map((perk) => (
                            <div
                                key={perk.name}
                                className="text-center md:flex md:items-start md:text-left lg:block lg:text-center"
                            >
                                <div className="md:flex-shrink-0 flex justify-center hover:transform hover:scale-125 duration-300">
                                    <div className="h-16 w-16 flex items-center justify-center rounded-full bg-gray-200 text-violet-900">
                                        {<perk.Icon className="w-1/3 h-1/3" />}
                                    </div>
                                </div>

                                <div className="mt-6 md:ml-4 md:mt-0 lg:ml-0 lg:mt-6">
                                    <h3 className="text-base font-medium text-gray-900">
                                        {perk.name}
                                    </h3>
                                    <p className="mt-3 text-sm text-muted-foreground">
                                        {perk.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </MaxWidthWrapper>
            </section>
        </>
    );
}
