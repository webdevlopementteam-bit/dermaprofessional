import { DM_Serif_Display, Allura, Jost } from "next/font/google";
import "./globals.css";
import WhatsAppWidget from "@/components/WhatsAppWidget";

const serif = DM_Serif_Display({
  variable: "--font-dm-serif",
  weight: "400",
  subsets: ["latin"],
});

const script = Allura({
  variable: "--font-allura",
  weight: "400",
  subsets: ["latin"],
});

const sans = Jost({
  variable: "--font-jost",
  subsets: ["latin"],
});

export const metadata = {
  title: "Dermaplex Professional | Healthy Skin, Happier You",
  description:
    "Professional skincare & haircare by Dermaplex — thoughtfully crafted with the goodness of nature and backed by science.",
    icons:{
      icon:"/logo.jpg"
    },
  // Google Search Console ownership: renders <meta name="google-site-verification" ...>.
  verification: {
    google: "aIif-r6P2EXnH0_2owsi9nuVD9WTKaerODqrILWQwEs",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${serif.variable} ${script.variable} ${sans.variable} antialiased`}
    >
      <body className="min-h-full">
        {children}
        <WhatsAppWidget />
      </body>
    </html>
  );
}
