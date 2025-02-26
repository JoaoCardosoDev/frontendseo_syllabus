"use client"; // Make this a client component

import { Geist, Geist_Mono } from "next/font/google";
import { Provider } from "react-redux"; 
import { persistor, store } from "./redux/store"; 
import "./globals.css";
import { PersistGate } from "redux-persist/integration/react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
              
          {children}
            </PersistGate>
        </Provider>
      </body>
    </html>
  );
}
