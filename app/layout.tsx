import { Roboto } from "next/font/google";
import "./globals.css";

const roboto = Roboto({
  weight: ["400", "500"],
  style: "normal",
  display: "swap",
  subsets: ["latin"], // Specify the available subsets
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${roboto.className} antialiased`}>
        <div
          className="flex justify-center px-0 lg:px-8 bg-repeat"
          style={{
            backgroundImage: "url('/img/background.png')",
          }}
        >
          <div className="w-full max-w-5xl bg-bgCustom h-screen  overflow-hidden">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
