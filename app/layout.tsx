import { Bebas_Neue, Roboto } from "next/font/google";
import "./globals.css";

export const bebasSans = Bebas_Neue({
  weight: ["400"],
  style: "normal",
  display: "swap",
  subsets: ["latin"], // Specify the available subsets
});

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
          className="flex justify-center h-screen px-0 lg:px-8 bg-repeat"
          style={{
            backgroundImage: "url('/img/background.png')",
          }}
        >
          <div className="w-full max-w-5xl lg:max-w-[80rem]">{children}</div>
        </div>
      </body>
    </html>
  );
}
