import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import ChatBot from '@/components/chat/ChatBot';

const geistSans = Geist({
    variable: '--font-geist-sans',
    subsets: ['latin'],
});

const geistMono = Geist_Mono({
    variable: '--font-geist-mono',
    subsets: ['latin'],
});

export const metadata: Metadata = {
    title: 'FDW Formations - Apprenez le développement web',
    description: 'Formations de haute qualité en React, Angular et Node.js',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html
            lang="fr"
            className="scroll-smooth"
        >
            <body className={`${geistSans.variable} ${geistMono.variable} antialiased overflow-x-hidden has-[.body-overflow]:overflow-hidden`}>
                {children}
                <ChatBot />
            </body>
        </html>
    );
}
