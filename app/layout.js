import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  metadataBase: new URL("https://hotelsaregama.in"),

  title: {
    default:
      "Saregama Family Restaurant & Bar | Best Highway Restaurant Near Ghoti Nashik",
    template: "%s | Saregama Restaurant Nashik",
  },

  description:
    "Saregama Family Restaurant & Bar is a premium highway restaurant near Ghoti, Nashik on Mumbai–Nashik Expressway. Enjoy biryani, butter chicken, Chinese food, bar, rooms & family dining.",

  keywords: [
    "Saregama Restaurant Nashik",
    "Hotel Saregama Ghoti",
    "Best restaurant near Ghoti Nashik",
    "Mumbai Nashik highway food stop",
    "Family restaurant Nashik highway",
    "Best biryani in Nashik highway",
    "Butter chicken Nashik",
    "Bar near Ghoti Nashik",
    "Restaurant with rooms Nashik highway",
    "Late night restaurant Nashik",
    "Food stop Mumbai to Nashik highway",
  ],

  authors: [{ name: "Saregama Restaurant" }],
  creator: "Saregama Restaurant",
  publisher: "Saregama Restaurant",

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  alternates: {
    canonical: "https://hotelsaregama.in",
  },

  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },

  manifest: "/site.webmanifest",

  openGraph: {
    title:
      "Saregama Family Restaurant & Bar | Best Highway Stop Near Nashik",
    description:
      "Top-rated restaurant on Mumbai–Nashik Expressway near Ghoti. Food, drinks, rooms & family dining.",
    url: "https://hotelsaregama.in",
    siteName: "Saregama Restaurant",
    images: [
      {
        url: "https://hotelsaregama.in/logo.png", // ✅ FIXED
        width: 1200,
        height: 630,
        alt: "Saregama Restaurant Nashik",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Saregama Restaurant Nashik",
    description:
      "Best highway restaurant near Ghoti Nashik. Food, drinks & family dining.",
    images: ["https://hotelsaregama.in/logo.png"], // ✅ FIXED
  },

  category: "restaurant",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />

        {/* 🔥 STRUCTURED DATA (GOOGLE BOOST) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": ["Restaurant", "LocalBusiness"],

              name: "Saregama Family Restaurant & Bar",
              image: "https://hotelsaregama.in/logo.png", // ✅ FIXED
              "@id": "https://hotelsaregama.in",
              url: "https://hotelsaregama.in",

              telephone: "+91-9373545169",
              priceRange: "₹₹",

              servesCuisine: [
                "Indian",
                "Chinese",
                "Biryani",
                "Bar Food",
              ],

              address: {
                "@type": "PostalAddress",
                streetAddress: "Mumbai–Nashik Expressway, Ghoti",
                addressLocality: "Nashik",
                addressRegion: "Maharashtra",
                postalCode: "422402",
                addressCountry: "IN",
              },

              geo: {
                "@type": "GeoCoordinates",
                latitude: 19.7278837,
                longitude: 73.6320107,
              },

              openingHoursSpecification: [
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: [
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday",
                    "Saturday",
                    "Sunday",
                  ],
                  opens: "11:00",
                  closes: "01:30",
                },
              ],

              sameAs: [
                "https://www.instagram.com/hotelsaregama_nsk",
                "https://www.google.com/maps/place/Saregama+Family+Restaurant+and+Bar",
              ],

              hasMap:
                "https://www.google.com/maps/place/Saregama+Family+Restaurant+and+Bar",
            }),
          }}
        />
      </body>
    </html>
  );
}