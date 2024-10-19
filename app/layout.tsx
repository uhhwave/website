import type {Metadata} from "next";
import "./globals.css";
import {ThemeProvider} from "@/components/theme-provider"
import localFont from 'next/font/local'
import {SpeedInsights} from '@vercel/speed-insights/next';
import {Analytics} from '@vercel/analytics/react';


const sfHello = localFont({
    src: [
        {
            path: './fonts/sfh/SFHello-Regular.woff2',
            weight: '400'
        },
        {
            path: './fonts/sfh/SFHello-Medium.woff2',
            weight: '500'
        },
        {
            path: './fonts/sfh/SFHello-Bold.woff2',
            weight: '700'
        }
    ],
})

export const metadata: Metadata = {
    title: 'hi!~',
    description: "this is wave's site<3",
    openGraph: {
        url: 'https://wavee.space',
        type: 'website',
        title: 'hi!~',
        description: "this is wave's site<3",
        images: [
            {
                url: 'https://wavee.space/goldr.jpeg',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'hi!~',
        description: "this is wave's site<3",
        images: [
            {
                url: 'https://wavee.space/goldr.jpeg',
            },
        ],
    },
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <head>
            <title>hi!~</title>
            <meta charSet="utf-8"/>
            <meta name="viewport" content="width=device-width"/>
            <meta name="darkreader-lock"/>
            <meta name="theme-color" content="#201a1b"/>
        </head>
        <body className={sfHello.className}>
        <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
        >
            {children}
            <SpeedInsights/>
            <Analytics/>
        </ThemeProvider>
        </body>
        </html>
    );
}
