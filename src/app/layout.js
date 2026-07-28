import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import { NextThemeProvider } from "@/components/ThemeProvider";

const geistSans = Space_Grotesk({
  variable: "--font-space-grotesk-sans",
  subsets: ["latin"],
});

export const metadata = {
  title: "EMMA portfolio",
  description: "Portfolio of EMMA",
};

// export const metadata = {
//   title: "EMMA | Pixel-Perfect UI Specialist",
//   description:
//     "I help brands and teams achieve flawless visual fidelity — converting Figma designs and live websites into reusable, SEO‑ready Next.js templates with zero compromise.",
//   keywords: [
//     "Figma to Next.js",
//     "Pixel Perfect UI",
//     "Frontend Developer",
//     "Live Site Replication",
//     "SEO Ready Templates",
//     "Accessibility First",
//     "Design Fidelity",
//     "Next.js Portfolio",
//   ],
//   robots: "index, follow",
//   authors: [{ name: "EMMA", url: "https://yourdomain.com/about" }],
//   creator: "EMMA",
//   openGraph: {
//     title: "EMMA | Pixel-Perfect UI Specialist",
//     description:
//       "Flawless Figma-to-Next.js conversion. SEO-ready templates with zero compromise on design fidelity.",
//     url: "https://yourdomain.com",
//     siteName: "EMMA Portfolio",
//     images: [
//       {
//         url: "https://yourdomain.com/images/figma-nextjs-hero.jpg",
//         width: 1200,
//         height: 630,
//         alt: "EMMA Portfolio Hero Image",
//       },
//     ],
//     locale: "en_US",
//     type: "website",
//   },
//   twitter: {
//     card: "summary_large_image",
//     title: "EMMA | Pixel-Perfect UI Specialist",
//     description:
//       "Figma-to-Next.js templates with flawless fidelity and SEO precision.",
//     images: ["https://yourdomain.com/images/figma-nextjs-hero.jpg"],
//   },
// };

export default function RootLayout({ children }) {
  return (
    <html
      suppressHydrationWarning
      lang="en"
      className="scroll-smooth dark:bg-black/60 bg-white"
    >
      <body suppressHydrationWarning className={`${geistSans.className}`}>
        <NextThemeProvider>{children}</NextThemeProvider>
      </body>
    </html>
  );
}

// dark:bg-[#020403]
