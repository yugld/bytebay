import MaxWidthWrapper from "@/components/MaxWidthWrapper";
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
                    bonjour
                </div>
            </MaxWidthWrapper>
        </>
    );
}
