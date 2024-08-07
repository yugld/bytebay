import { getServerSideUser } from "@/lib/payload-utils";
import Image from "next/image";
import { cookies } from "next/headers";
import { getPayloadClient } from "@/get-payload";
import { notFound, redirect } from "next/navigation";
import { Product, ProductFile, User } from "@/payload-types";
import { PRODUCT_CATEGORIES } from "@/config";
import { formatPrice } from "@/lib/utils";
import Link from "next/link";
import PaymentStatus from "@/components/PaymentStatus";
import { Icons } from "@/components/Icons";

interface PageProps {
    searchParams: {
        [key: string]: string | string[] | undefined;
    };
}

const ThankYouPage = async ({ searchParams }: PageProps) => {
    const orderId = searchParams.orderId;
    const nextCookies = cookies();

    const { user } = await getServerSideUser(nextCookies);
    const payload = await getPayloadClient();

    const { docs: orders } = await payload.find({
        collection: "orders",
        depth: 2,
        where: {
            id: {
                equals: orderId,
            },
        },
    });

    const [order] = orders;

    if (!order) return notFound();

    const orderUserId =
        typeof order.user === "string" ? order.user : order.user.id;

    if (orderUserId !== user?.id) {
        return redirect(`/sign-in?origin=thank-you?orderId=${order.id}`);
    }

    const products = order.products as Product[];

    const orderTotal = products.reduce((total, product) => {
        return total + product.price;
    }, 0);

    return (
        <main className="relative lg:min-h-full">
            {/* add succsess image */}

            <div>
                <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:grid lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8 lg:py-32 xl:gap-x-24">
                    <div className="lg:col-start-2">
                        <p className="text-sm font-medium text-blue-600">
                            Заказ выполнен успешно
                        </p>
                        <h1 className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                            Спасибо за заказ
                        </h1>
                        {order._isPaid ? (
                            <p className="mt-2 text-base text-muted-foreground">
                                Ваш заказ был обработан, и доступен для
                                скачивания ниже. Мы отправили вашу чек ​​и
                                информацию о заказе на{" "}
                                {typeof order.user !== "string" ? (
                                    <span className="font-medium text-gray-900">
                                        {order.user.email}
                                    </span>
                                ) : null}
                                .
                            </p>
                        ) : (
                            <p className="mt-2 text-base text-muted-foreground">
                                Пожалуйста, дождитесь подтверждения оплаты и мы
                                отправим вам подтверждение!
                            </p>
                        )}

                        <div className="mt-16 text-sm font-medium">
                            <div className="text-muted-foreground">
                                № заказа
                            </div>
                            <div className="mt-2 text-gray-900">{order.id}</div>

                            <ul className="mt-6 divide-y divide-gray-200 border-t border-gray-200 text-sm font-medium text-muted-foreground">
                                {(order.products as Product[]).map(
                                    (product) => {
                                        const label = PRODUCT_CATEGORIES.find(
                                            ({ value }) =>
                                                value === product.category
                                        )?.label;

                                        const downloadUrl = (
                                            product.product_files as ProductFile
                                        ).url as string;

                                        const { image } = product.images[0];

                                        return (
                                            <li
                                                key={product.id}
                                                className="flex space-x-6 py-6"
                                            >
                                                <div className="relative h-24 w-24">
                                                    {typeof image !==
                                                        "string" &&
                                                    image.url ? (
                                                        <Image
                                                            fill
                                                            src={image.url}
                                                            alt={`${product.name} image`}
                                                            className="flex-none rounded-md bg-gray-100 object-cover object-center"
                                                        />
                                                    ) : null}
                                                </div>

                                                <div className="flex-auto flex flex-col justify-between">
                                                    <div className="space-y-1">
                                                        <h3 className="text-gray-900">
                                                            {product.name}
                                                        </h3>

                                                        <p className="my-1">
                                                            Категория: {label}
                                                        </p>
                                                    </div>

                                                    {order._isPaid ? (
                                                        <a
                                                            href={downloadUrl}
                                                            download={
                                                                product.name
                                                            }
                                                            className="text-blue-600 hover:underline underline-offset-2"
                                                        >
                                                            Скачать покупку
                                                        </a>
                                                    ) : null}
                                                </div>

                                                <p className="flex-none font-medium text-gray-900">
                                                    {formatPrice(product.price)}
                                                </p>
                                            </li>
                                        );
                                    }
                                )}
                            </ul>

                            <div className="space-y-6 border-t border-gray-200 pt-6 text-sm font-medium text-muted-foreground">
                                <div className="flex justify-between">
                                    <p>Сумма без комиссии</p>
                                    <p className="text-gray-900">
                                        {formatPrice(orderTotal)}
                                    </p>
                                </div>

                                <div className="flex justify-between">
                                    <p>Комиссия</p>
                                    <p className="text-gray-900">
                                        {formatPrice(1)}
                                    </p>
                                </div>

                                <div className="flex items-center justify-between border-t border-gray-200 pt-6 text-gray-900">
                                    <p className="text-base">Итого</p>
                                    <p className="text-base">
                                        {formatPrice(orderTotal + 1)}
                                    </p>
                                </div>
                            </div>

                            <PaymentStatus
                                isPaid={order._isPaid}
                                orderEmail={(order.user as User).email}
                                orderId={order.id}
                            />

                            <div className="mt-16 border-t border-gray-200 py-6 text-right">
                                <Link
                                    href="/products"
                                    className="text-sm font-medium text-blue-600 hover:text-blue-500"
                                >
                                    Продолжить покупки
                                    <Icons.arrow />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default ThankYouPage;
