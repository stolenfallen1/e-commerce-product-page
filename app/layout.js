import { Kumbh_Sans } from "next/font/google";
import "./globals.css";

const inter = Kumbh_Sans({ subsets: ["latin"] });

export const metadata = {
    title: "E-commerce Product Page - Frontend Mentor",
    description:
        "Frontend Mentor Challenge - E-commerce Product Page with React, Next, Tailwind CSS and Shadcn-ui",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={inter.className}>{children}</body>
        </html>
    );
}
