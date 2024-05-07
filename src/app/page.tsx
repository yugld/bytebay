import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { ArrowDownToLine, CheckCircle, Leaf } from "lucide-react";
import Link from "next/link";

const perks = [
    {
        name: "Instant Delivery",
        Icon: ArrowDownToLine,
        description:
            "Get your assets delivered to your email in seconds and download them right away.",
    },
    {
        name: "Guaranteed Quality",
        Icon: CheckCircle,
        description:
            "Every asset on our platform is verified by our team to ensure our highest quality standards. Not happy? We offer a 30-day refund guarantee.",
    },
    {
        name: "For the Planet",
        Icon: Leaf,
        description:
            "We've pledged 1% of sales to the preservation and restoration of the natural environment.",
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
