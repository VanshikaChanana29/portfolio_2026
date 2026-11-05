import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Chatbot from "@/components/chatbot";
import AnalyticsEvents from "@/components/analytics";
import { analytics, brand, links, person, seo, services } from "@/content/site-data";

const inter = Inter({ subsets: ["latin"], display: "swap", variable: "--font-sans" });

export const metadata = {
  metadataBase: new URL(person.siteUrl),
  title: seo.title,
  description: seo.description,
  keywords: seo.keywords,
  authors: [{ name: person.name, url: person.siteUrl }],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: "/",
    siteName: brand.name,
    title: seo.title,
    description: seo.description,
    locale: "en_US",
  },
  twitter: { card: "summary_large_image", title: seo.title, description: seo.description },
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }, { url: "/favicon.ico", sizes: "any" }],
    apple: "/apple-touch-icon.png",
  },
  robots: { index: true, follow: true },
};

export const viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fafafc" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0a10" },
  ],
};

// Runs before paint so there is no flash of the wrong theme.
const themeScript = `(function(){try{var m=localStorage.getItem('theme');if(m!=='light'&&m!=='dark'){m=matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light'}document.documentElement.dataset.mode=m}catch(e){}})();`;

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${person.siteUrl}/#person`,
      name: person.name,
      jobTitle: person.role,
      url: person.siteUrl,
      image: `${person.siteUrl}${person.photo}`,
      email: `mailto:${person.email}`,
      address: { "@type": "PostalAddress", addressLocality: "Gurugram", addressCountry: "IN" },
      sameAs: [links.linkedin, links.github, links.upwork, links.fiverr].filter(Boolean),
      knowsAbout: ["Next.js", "React", "Node.js", "TypeScript", "Python", "FastAPI", "PostgreSQL", "LangChain", "RAG"],
    },
    {
      "@type": "ProfessionalService",
      "@id": `${person.siteUrl}/#service`,
      name: `${person.name}, Freelance Full-Stack & AI Development`,
      url: person.siteUrl,
      image: `${person.siteUrl}/opengraph-image`,
      description: seo.description,
      founder: { "@id": `${person.siteUrl}/#person` },
      areaServed: ["US", "GB", "EU", "Worldwide"],
      address: { "@type": "PostalAddress", addressLocality: "Gurugram", addressCountry: "IN" },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Services",
        itemListElement: services.map((s) => ({
          "@type": "Offer",
          itemOffered: { "@type": "Service", name: s.title, description: s.summary },
        })),
      },
    },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </head>
      <body className="font-sans">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[200] focus:rounded-lg focus:bg-accent-solid focus:px-4 focus:py-2 focus:text-white"
        >
          Skip to content
        </a>
        <Navbar />
        <main id="main">{children}</main>
        <Footer />
        <Chatbot />
        <AnalyticsEvents />
        {analytics.plausibleDomain && (
          <Script defer data-domain={analytics.plausibleDomain} src="https://plausible.io/js/script.js" strategy="afterInteractive" />
        )}
        {analytics.umamiWebsiteId && (
          <Script defer data-website-id={analytics.umamiWebsiteId} src="https://cloud.umami.is/script.js" strategy="afterInteractive" />
        )}
      </body>
    </html>
  );
}
