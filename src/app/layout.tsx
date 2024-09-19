import Providers from "@/components/Providers";
import { cn, constructMetadata } from "@/lib/utils";
import { Inter } from "next/font/google";
import { Toaster } from "sonner";
import "./globals.css";

import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import PageTransition from "@/components/PageTransition";

const inter = Inter({ subsets: ["latin"] });

export const metadata = constructMetadata();

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" className="h-full">
            <body
                className={cn(
                    "relative h-full font-sans antialiased",
                    inter.className
                )}
            >
                <main className="relative flex flex-col min-h-screen">
                    <Providers>
                        <Navbar />
                        <PageTransition>{children}</PageTransition> <Footer />
                    </Providers>
                </main>

                <Toaster position="top-center" richColors />
            </body>
        </html>
    );
}
