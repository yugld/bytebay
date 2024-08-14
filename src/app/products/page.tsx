"use client";

import { useEffect, useState } from "react";
import MaxWidthWrapper from "@/components/layout/MaxWidthWrapper";
import ProductReel from "@/components/products/ProductReel";
import { PRODUCT_CATEGORIES } from "@/config";

type Param = string | string[] | undefined;

interface ProductsPageProps {
    searchParams: { [key: string]: Param };
}

const parse = (param: Param) => {
    return typeof param === "string" ? param : undefined;
};

const ProductsPage = ({ searchParams }: ProductsPageProps) => {
    const sort = parse(searchParams.sort);
    const category = parse(searchParams.category);
    const [label, setLabel] = useState("Загружаем...");

    useEffect(() => {
        const categoryLabel = PRODUCT_CATEGORIES.find(
            ({ value }) => value === category
        )?.label;

        if (categoryLabel) {
            setLabel(categoryLabel);
        } else {
            setLabel("Каталог");
        }
    }, [category]);

    return (
        <MaxWidthWrapper>
            <ProductReel
                title={label}
                query={{
                    category,
                    limit: 40,
                    sort: sort === "desc" || sort === "asc" ? sort : undefined,
                }}
            />
        </MaxWidthWrapper>
    );
};

export default ProductsPage;
